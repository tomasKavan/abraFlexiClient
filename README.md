# ABRA Flexi Typescript client
**English version follows**

[ABRA Flexi](https://www.abra.eu/flexi/) je český Ekonomický software pro malé a střední podniky vyvýjený společností [ABRA Software](https://www.abra.eu). ABRA Flexi poskytuje přístup k datům pomocí REST API s veřejnou dokumentací. 

ABRA Flexi Typescript client (AFTC) je knihovna pro přístup k REST API ABRA Flexi. Použitelná v prohlížeči i na serveru (Node.js) a poskytující metody pro dotazování a mutaci dat. 

AFTC obsahuje třídu pro každou z evidencí v ABRA Flexi. Vlastnosti těchto tříd zároveň modelují vztahy mezi evidencemi.

**Knihovna je v rané fázi vývoje a její rozhraní zatím není stabilní**.

## Instalace

Knihovna je distribuovaná jako npm balíček
```
npm install abra-flexi
```

**!! Zatím nedistribuováno !!**
Místo npm použíjte přímo git repository a `npm link` (knihovnu mustí nejdříve přeložit).
```
git checkout git@github.com:tomasKavan/abraFlexiClient.git
cd abraFlexiClient
npm install
npm run build
npm link
```

Ve svém projektu potom:

```
npm link abra-flexi
```

### Generování evidenčních tříd

Součástní repository knihovny je nástroj pro generování evidenčních tříd z metadat, které poskytuje API. Generátor dovoluje vybrat subset generovaných tříd. To je užitečné, pokud chcete udržet knihovnu co nejmenší a generovat pouze třídy pro Vámi použivané evidence.

Generátor je třeba přeložit
```
npm run build:gen
chmod a+x ./bin/index.js
```

a následně lze generování spustit například takto:
```
./bin/index.js -s https://muj-flexi-server.cz/c/moje-spolecnost/ -u uzivatel1 -p hesloUzivatele -c -e adresar -e faktura-prijata -e polozka-faktury-prijate
```

knihovnu s vygenerovanými třídami lze přeložit
```
npm run build
```

### Příklady

Složka `examples` obsahuje příklady použití knihovny. Prozatím jsem připravil 
- jednoduchý CLI nástroj pro načtení konkrétní evidence (loadEntityCli.ts)
- soubor s příkladem volání více typů dotazů (loadEntity.ts)
- příklad vytvoŕení nové faktury. Nutno nastavit konstanty na řádku 29-31 (createAndSave.ts)
Příkaldy je možné spustit pomocí nástroje `ts-node`:
```
ts-node examples/loadEntityCli.ts -h #vypíše nápovědu k příkazu
ts-node examples/loadEntity.ts -s https://muj.server.cz -c moje-firma -u uzivatel1 -h heslo1
ts-node examples/createAndSave.ts -s https://muj.server.cz -c moje-firma -u uzivatel1 -h heslo1
```

## Použití

V návodu se používají pojmy
- **evidence** Typ evidence v systému ABRA Flexi, například Faktura přijatá či Položka faktury přijaté. Každá evidence je reprezentováná evidenční třídou, například `AFFakturaPrijata` či `AFPolozkaFakturyPrijate`.
- **instance** Záznam v evidenci. Například faktura přijatá s kódem IV24.0001, identifikátorem 14 a dlšími hodnotami je instancí. Instance je v knihovně reprezentována instancí evidenční třídy, například: `const fp = await api.create(AFFakturaPrijata)`.

### Import a inicializace knihovny

```typescript 
import { AFApiClient, AFApiConfig } from 'abra-flexi'

const apiOpts: AFApiConfig = {
  url: '<doplnte_server>',
  company: '<doplnte_spolecnost>'
}

const api = new AFApiClient(apiOpts)
```

### Logování

Ve výchozím stavu je klient tichý (nevypisuje nic). Logování lze zapnout pomocí `logLevel`:

```typescript
const api = new AFApiClient({
  url: '<server>',
  company: '<spolecnost>',
  logLevel: 'debug'   // 'none' | 'error' | 'warn' | 'info' | 'debug'
})
```

Je možné také předat vlastní logger (např. Winston), který musí implementovat rozhraní `{ debug, info, warn, error }`:

```typescript
import winston from 'winston'

const api = new AFApiClient({
  url: '<server>',
  company: '<spolecnost>',
  logger: winston.createLogger({ ... }),
  logLevel: 'info'   // pokud neuvedete, přeposílají se všechny úrovně
})
```

### Dotazování instancí

Pro dotazování instancí jsou k dispozici metody `query` (vrací kolekci instancí evidenčních tříd) a `queryOne` (vrací jedu instanci). 

Parametrech dotazu může být uveden požadovaný detail. Detail se zapisuje formou pole vlastností evidencí formou textových řetězců. Detaily relací je možné vkládat pomocí pole o 2 prvcích, kde prvním je název vlastnosti relace v evidenci a druhým opět pole vlastností v napojené evidenci. Jasněji je to patrné z příkladu níže.

Pozor! Vnořené M:N či 1:N relací knihovna zatím podporuje pouze na základní úrovni. Například detail `faktura-vydana-polozka.cenik.atributy.typAtributu` se načte pouze po instanci ceníku. Bude řešeno v dalších verzích.

Filtrování je možné vkládat pomocí metod `Filter(expr, params)`, `ID(id)`, `CODE(code)` nebo `EXT(ext)`. Metoda `Filter` akceptuje textovou šablonu (`expr`), ve které budou všechny návěstí nahrazeny hodnotami předanými ve druhém argumentu (`params`). Návěstí mohou být:
- `:key` se nahradí textovou hodnotou klíče `key` ve druhém argumentu,
- `::mujKod` se nahradí textovou hodnotou klíče `mujKod` ve druhém argumentu a prefixuje se předponou `code:`,

Obě návěští podporují kolekce. Návěstí se pak nahradí výsledkem `kolekce.join(',')`. Pokud je hodnotou instance evidence (podtřída AFEntity), ignoruje se typ návěští a použije se číselné id resp. kód, není-li číselné id vyplněno/načteno. 

Metoda `Filter` vrací objekt s mající následující metody:
- `use(filter, op)` - přidá jiný objekt filtru do stávajícího. Atribut `op` určuje operátor pro spojení se stávajícím filtrem (`and` nebo `or`, defaultní je `or`). Filtr je vložen v závorkách.
- `useNot(filter, op)` - stojné jako `use()`, ale před závorku je vložen operátor `not`
- `or(expr, params)` - připojí na konec filtru, za operátor `or` výraz `expr`. Bez závorek.
- `and(expr, params)` - připojí na konec filtru, za operátor `and` výraz `expr`. Bez závorek.

Všechny metody vrací vždy novou instanci filtru. Filtry si tedy můžete předpřipravit a následně spojivat pomocí `use()`/`useNot()`.

```typescript 
import { AFInterniDoklad, Filter } from 'abra-flexi'

const queryOpts: AFQueryOptions = {
  detail: ['id', 'kod', 'typDokl', ['uzivatelske-vazby', ['id', 'evidenceType', 'objectId', 'vazbaTyp']]],
  filter: Filter(`typDokl = '::td'`, { td: 'MUJ_TYP_DOKLADU'})
} 

const run = async () => {
  try {
    const data = await api.query(AFInterniDoklad, queryOpts)
    console.log(data)
  } catch (e) {
    console.error(e)
  }
}
run()

```

### Stránkování a celkový počet záznamů

Dotazy podporují parametry `limit` a `start` pro stránkování. Pro zjištění celkového počtu záznamů (nezávislého na velikosti stránky) předejte `addRowCount: true`. Výsledek metody `query()` je standardní pole, ale navíc obsahuje vlastnost `totalCount` s celkovým počtem nalezených záznamů na serveru.

```typescript
const PAGE_SIZE = 50

const firstPage = await api.query(AFAdresar, {
  detail: ['id', 'kod', 'nazev'],
  limit: PAGE_SIZE,
  start: 0,
  addRowCount: true   // vyžádá @rowCount od serveru
})

console.log(firstPage.totalCount)  // např. 1234 — celkový počet, bez ohledu na limit
console.log(firstPage.length)      // 50 — velikost stránky

const totalPages = Math.ceil(firstPage.totalCount! / PAGE_SIZE)

// Další stránky — addRowCount není třeba opakovat (zvyšuje zátěž serveru)
const secondPage = await api.query(AFAdresar, {
  detail: ['id', 'kod', 'nazev'],
  limit: PAGE_SIZE,
  start: PAGE_SIZE
})
```

> **Poznámka:** `addRowCount: true` způsobí extra COUNT dotaz na straně serveru. Používejte ho pouze pro první stránku a hodnotu `totalCount` si uložte pro výpočet dalších stránek.

### Načtení většího detailu

Pro načtení většího detailu či aktualizaci dříve načtených instancí můžete použít metody `populate` a `populateOne`. Detailem požadované vlastnosti se aktualizují na původní instanci.

```typescript 
const loadedEntity // Zde máme uloženou dříve načtenou instanci entity AFInterniDoklad

const options = {
  detail: AFQueryDetail.FULL
}

const run = async () => {
  try {
    const populatedEntity = await api.populateOne(loadedEntity, options)
    console.log(populatedEntity)
    console.log(populatedEntity === loadedEntity) // Vypíše true
  } catch (e) {
    console.error(e)
  }
}
run()

```

### Načtení instancí z uživatelských vazeb

Instance entit odkazované pomocí uživatelských vazeb je možné načíst metodou `queryURels`. Metodě je třeba zaslat zdrojovou kolekci instancí. Instance neumsí být stejného typu (evidence), ale musí mít klíč `uzivatelske-vazby`. Metoda načítá vazby na kokrétní evidenci (vazby ostatních typů jsou vynechány). Vazby je možné filtrovat dle typu `typVazby`. Načtená data jsou přidána do vazeb zrojových instancí (vlastnost `object`). Data jsou dále vrácena jako kolekce párů `{ entity: zdrojova_entity, referencedFrom: načtená_entita }`.

Načteny jsou pouze instance vazeb, které se již vyskytují ve zdrojové kolekci! Metoda `queryURels` tedy sama uživatelské vazby na jednotlivých zdrojových instancích nenačítá. Načítá pouze instance, na které vazba odkazuje.

```typescript 
const soureEntities // Zde máme kolekci entit, pro které načítáme instance odkazované uživatelskou vazbou

const run = async () => {
  try {
    const pairs = await api.queryURels(AFInterniDoklad, soureEntities, {
      detail: ['id', 'kod', 'typDokl']
    })
    console.log(pairs)
  } catch (e) {
    console.error(e)
  }
}
run()

```

### Práce se štítky

Štítky (stitky) jsou na každé instanci dostupné jako textový řetězec ve vlastnosti `stitky`. Pro pohodlnější práci jsou k dispozici metody `getStitky()` a `getStitkyBySkupina(skup)`, které vrací pole instancí `AFStitek`.

Knihovna udržuje interní cache štítků, která se průběžně aktualizuje. Strategii cache lze nastavit v konfiguraci klienta pomocí `stitkyCacheStrategy` (`None`, `Lazy` (výchozí), `Eager`).

### Vytváření, změna a odstraňování instancí

#### Vytvoření nové instance

Novou instanci evidence vytvoříte pomocí `api.create()`. **Nepoužívejte `new` přímo** — konstruktor vyžaduje interní závislosti, které správně injektuje pouze klient.

```typescript
import { AFFakturaVydana } from 'abra-flexi'

const faktura = await api.create(AFFakturaVydana)
faktura.popis = 'Testovací faktura'
// ... nastavte další vlastnosti

const saved = await api.save(faktura)
console.log(saved.id)  // ID přidělené serverem je automaticky přiřazeno zpět na instanci
```

#### Odkaz na existující záznam bez načítání

Pokud potřebujete odkázat na existující záznam (např. jako relaci na jiné entitě), ale nechcete ho načítat, použijte `createIdStub()`:

```typescript
const firma = await api.createIdStub(AFAdresar, { id: 123 })
// nebo podle kódu:
const firma = await api.createIdStub(AFAdresar, { kod: 'MOJE_FIRMA' })
```

Instance vytvořená přes `createIdStub()` je správně označena jako existující (`isNew === false`) a lze ji použít v relacích jiných entit.

#### Uložení změn

Metoda `save()` uloží jak novou instanci (POST/PUT), tak změny na existující. Na server se odesílají pouze změněné vlastnosti.

```typescript
const faktura = await api.queryOne(AFFakturaVydana, { filter: ID(42) })
faktura.popis = 'Aktualizovaný popis'
await api.save(faktura)
```

**Poznámka k uživatelským vazbám:** ABRA Flexi nepodporuje vytvoření nové entity společně s uživatelskými vazbami v jednom požadavku. Pokud entita obsahuje `uzivatelske-vazby`, je třeba ji nejdříve uložit bez vazeb a vazby přidat v samostatném volání `save()`.

#### Smazání instance

```typescript
await api.delete(faktura)
```

Metoda funguje pro všechny typy evidencí, včetně `AFUzivatelskaVazba` (kde ABRA API nevystavuje standardní DELETE endpoint — knihovna to řeší automaticky).

### Stahování souborů

Metoda `queryFile()` slouží ke stažení dat v jiném formátu než JSON — například PDF, XML, CSV nebo ISDOC. Vrací objekt `{ blob, contentType, filename }`.

```typescript
import { AFFakturaVydana, ID } from 'abra-flexi'
import fs from 'fs'

// PDF faktury
const pdf = await api.queryFile(AFFakturaVydana, 'pdf', { filter: ID(42) })
fs.writeFileSync(pdf.filename ?? 'faktura.pdf', Buffer.from(await pdf.blob.arrayBuffer()))

// XML
const xml = await api.queryFile(AFFakturaVydana, 'xml', { filter: ID(42) })

// CSV kolekce
const csv = await api.queryFile(AFAdresar, 'csv', { limit: 100 })

// ISDOC / ISDOCX a další rozšíření
const isdocx = await api.queryFile(AFFakturaVydana, 'isdocx', { filter: ID(42) })
```

#### Tisk pomocí pojmenované sestavy

Parametry `reportName` a `reportLang` umožňují zvolit konkrétní tiskovou sestavu:

```typescript
const pdf = await api.queryFile(AFFakturaVydana, 'pdf', {
  filter: ID(42),
  reportName: 'faktura-dph',
  reportLang: 'cs'
})
```

### Akce na instancích

Pojmenované akce definované v ABRA Flexi (např. storno, uzavření dokladu) lze volat metodou `callEntityAction()`. Instance musí být uložená (mít přidělené `id`).

```typescript
import { AFFakturaVydana } from 'abra-flexi'

const faktura = await api.createIdStub(AFFakturaVydana, { id: 2452 })
await api.callEntityAction(faktura, 'storno')
```

## Task list pro vydání stabilní verze

- [X] Generování evidenčních tříd dle metadat REST API
- [X] Načítání kolekcí a jednotlivých instancí z REST API
- [X] Načítání užviatelských relací 
- [X] Refersh již načtených dat
- [X] Pohodlná práce se štítky
- [X] Vytváření, mazání a změna záznamů v REST API
- [X] Stahování souborů (PDF, CSV, XML, ISDOC, ...)
- [X] Akce na instancích
- [ ] Jednotný handling identifikátorů záznamů
- [ ] Lokální keš a společné instance pro jedno ID
- [ ] Battle tested - reálné nasazení, úprava rozhraní dle reálného použití
- [ ] Verzování, npm balíčkování
- [ ] Kontrola kompatibility při připojování k REST API
- [ ] English documentation

# English

[ABRA Flexi](https://www.abra.eu/en/flexi/) is Czech ERP for small businesses, developed by [ABRA Software](https://www.abra.eu/en). To access data in ABRA Flexi there is a REST API with public documentation. 

ABRA Flexi Typescript client (AFTC) is library to call ABRA Flexi REST API. It's for browsers and server environments (Node.js). It provides methods for CRUD. 

Because ABRA Flexi is Czech software, it's expected to have mainly Czech developer audience. English version of the documentation will be finalized when the library API becomes stable.
