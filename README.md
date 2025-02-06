# ABRA Flexi Typescript client
**English version follows**

[ABRA Flexi](https://www.abra.eu/flexi/) je český Ekonomický software pro malé a střední podniky vyvýjený společností [ABRA Software](https://www.abra.eu). ABRA Flexi poskytuje přístup k datům pomocí REST API s veřejnou dokumentací. 

ABRA Flexi Typescript client (AFTC) je knihovna pro přístup k REST API ABRA Flexi. Použitelná v prohlížeči i na serveru (Node.js) a poskytující metody pro dotazování a mutaci dat. 

AFTC obsahuje třídu pro každou z evidencí v ABRA Flexi. Vlastnosti těchto tříd zároveň modelují vztahy mezi evidencemi.

**Knihovna je v ranných fázích vývoje a její rozhraní nelze označit jako stabilní**.

## Instalace

Knihovna je distribuovaná jako npm balíček
```
npm install aftc
```

### Gnerování evidenčních tříd

Součástní repository knihovny je nástroj pro generování evidenčních tříd z metadat, které poskytuje API. Generátor dovoluje vybrat subset generovaných tříd. To je užitečné, pokud chcete udržet knihovnu co nejmenší a generovat pouze třídy pro Vámi použivané evidence.

Generátor je třeba přeložit
```
npm run build:cli
chown a+x ./bin/index.js
```

a následně lze generování spustit například takto:
```
./bin/index.js -s https://muj-flexi-server.cz/c/moje-spolecnost/ -u uzivatel1 -p hesloUzivatele -c -e adresar -e faktura-prijata -e polozka-faktury-prijate
```

knihovnu s vygenerovanými třídami lze přeložit
```
npm run build:cli
```

### Příklady

Složka `examples` obsahuje příklady použití knihovny. Prozatím jsem připravil 
- jednoduchý CLI nástroj pro načtení konkrétní evidence (loadEntityCli.ts)
- soubor s příkladem volání více typů dotazů (loadEntity.ts)
Příkaldy je možné spustit pomocí nástroje `ts-node`:
```
ts-node examples/loadEntityCli.ts -h #vypíše nápovědu k příkazu
ts-node examples/loadEntity.ts -s https://muj.server.cz -c moje-firma -u uzivatel1 -h heslo1
```

## Použití

V návodu se používají pojmy
- **evidence** Typ evidence v systému ABRA Flexi, například Faktura přijatá či Položka faktury přijaté. Každá evidence je reprezentováná evidenční třídou, například `AFFakturaPrijata` či `AFPolozkaFakturyPrijate`.
- **instance** Záznam v evidenci. Například faktura přijatá s kódem IV24.0001, identifikátorem 14 a dlšími hodnotami je instancí. Instance je v knihovně reprezentována instancí evidenční třídy, například: `const fp = new AFFakturaPrijata()`.

### Import a inicializace knihovny

```typescript 
import { AFApiClient } from 'aftc'

const apiOpts: AFApiConfig = {
  url: '<doplnte_server>',
  company: '<doplnte_spolecnost>
}

const api = new AFApiClient(apiOpts)
```

### Dotazování instancí

Pro dotazování instancí jsou k dispozici metody `query` (vrací kolekci instancí evidenčních tříd) a `queryOne` (vrací jedu instanci). 

Parametrech dotazu může být uveden požadovaný detail. Detail se zapisuje formou pole vlastností evidencí formou textových řetězců. Detaily relací je možné vkládat pomocí pole o 2 prvcích, kde prvním je název vlastnosti relace v evidenci a druhým opět pole vlastností v napojené evidenci. Jasněji je to patrné z příkladu níže.

Filtrování je možné vkládat pomocí metod `Filter`, `ID` nebo `CODE`. Metoda `Filter` akceptuje textovou šablonu, ve které budou všechny návěstí nahrazeny hodnotami předanými ve druhém argumentu. Návěstí mohou být:
- `:key` se nahradí textovou hodnotou klíče `key` ve druhém argumentu,
- `::mujKod` se nahradí textovou hodnotou klíče `mujKod` ve druhém argumentu a prefixuje se předponou `code:`,
- `:...kolekce` očekává, že klíč `kolekce` bude typu `Array`. Návěstí se nahradí výsledkem `kolekce.join(',')`. 

```typescript 
import { AFInterniDoklad, Filter } from 'aftc'

const queryOpts: AFQueryOptions = {
  detail: ['id', 'kod', 'typDokl', ['uzivatelske-vazby', ['id', 'evidenceType', 'objectId', 'vazbaTyp']]],
  filter: Filter(`typDokl = '::td'`, { td: 'MUJ_TYP_DOKLADU'})
} 

const { data } = api.query(AFInterniDoklad, queryOpts)

const run = async () => {
  try {
    const loaded = await data
    console.log(loaded)
  } catch (e) {
    console.error(e)
  }
}
run()

```

### Načtení většího detailu

Pro načtení většího detailu či aktualizaci dříve načtených instancí můžete použít metody `populate` a `populateOne`. Detailem požadované vlastnosti se aktualizují na původní instanci.

```typescript 
const loadedEntity // Zde máme uloženou dříve načtenou instanci entity AFInterniDoklad

const options = {
  detail: AFQueryDetail.FULL
}

const { data: popData } = api.populateOne(loadEntity)

const run = async () => {
  try {
    const updatedEntity = await popData
    console.log(updatedEntity)
    console.log(updatedEntity === loadedEntity) // Vypíše true
  } catch (e) {
    console.error(e)
  }
}
run()

```

### Načtení instancí z uživatelských vazeb

Instance entit odkazované pomocí uživatelských vazeb je možné načíst metodou `queryURel`. Metodě je třeba zaslat zdrojovou kolekci instancí. Instance neumsí být stejného typu (evidence), ale musí mít klíč `uzivatelske-vazby`. Metoda načítá vazby na kokrétní evidenci (vazby ostatních typů jsou vynechány). Vazby je možné filtrovat dle typu `typVazby`. Načtená data jsou přidána do vazeb zrojových instancí (vlastnost `object`). Data jsou dále vrácena jako kolekce párů `{ entity: zdrojova_entity, referencedFrom: načtená_entita }`.

Načteny jsou pouze instance vazeb, které se již vyskytují ve zdrojové kolekci! Metoda `queryURel` tedy sama uživatelské vazby na jednotlivých zdrojových instancích nenačítá. Načítá pouze instance, na které vazba odkazuje.

```typescript 
const soureEntities // Zde máme kolekci entit, pro které načítáme instance odkazované uživatelskou vazbou

const { data: pairs } = api.queryURels(AFInterniDoklad, soureEntities, {
  detail: ['id', 'kod', 'typDokl']
})

const run = async () => {
  try {
    const loadedPairs = await paris
    console.log(loadedPairs)
  } catch (e) {
    console.error(e)
  }
}
run()

```

### Vytváření, změna a odstraňování instancí

*TODO: Zatím neimplementováno*

## Task list pro vydání stabilní verze

- [X] Generování evidenčních tříd dle metadat REST API
- [X] Načítání kolekcí a jednotlivých instancí z REST API
- [X] Načítání užviatelských relací 
- [X] Refersh již načtených dat
- [ ] Pohodlná práce se štítky
- [ ] Vytváření, mazání a změna záznamů v REST API
- [ ] Lokální keš a společné instance pro jedno ID
- [ ] Battle tested - reálné nasazení, úprava rozhraní dle reálného použití
- [ ] Verzování 
- [ ] Kontrola kompatibility při připojování k REST API
- [ ] English documentation

# English

[ABRA Flexi]([https://www.abra.eu/flexi/](https://www.abra.eu/en/flexi/) is Czech ERP for small businesses, developer by [ABRA Software](https://www.abra.eu/en). To access data in ABRA Flexi there is a REST API with public documentation. 

ABRA Flexi Typescript client (AFTC) is library to call ABRA Fflexi REST API. It's for browsers and server environments (Node.js). It provides methods for CRUD. 

Because ABRA Flexi is Czech software, it's expected to have mainly Czech developer audience. English version of the documentation will be finalized when the library API becomes stable. 