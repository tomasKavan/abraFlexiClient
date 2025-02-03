import { AFEntity } from '../AFEntity'
import { AFCenik } from './AFCenik'
import { AFUzivatelskaVazba } from './AFUzivatelskaVazba'

export enum AFCenikObalMjHmotK {
  gram = 'mjHmot.gram', //gram
  kilogram = 'mjHmot.kilogram', //kilogram
  tuna = 'mjHmot.tuna', //tuna
}

export enum AFCenikObalTypObaluK {
  obchodProdej = 'typObalu.obchodProdej', //Obchodní - Prodejní
  obchodSkupina = 'typObalu.obchodSkupina', //Obchodní - Skupinové
  obchodPreprava = 'typObalu.obchodPreprava', //Obchodní - Přepravní
  prumysl = 'typObalu.prumysl', //Průmyslové
}

export enum AFCenikObalTypVznikuK {
  vyrobeneVCr = 'typVzniku.vyrobeneVCr', //Vyrobené v ČR
  nakoupeneVCr = 'typVzniku.nakoupeneVCr', //Nakoupené v ČR
  importovaneDoCr = 'typVzniku.importovaneDoCr', //importované do ČR
}

export enum AFCenikObalTypPouzitiK {
  1pouziti = 'typPouziti.1pouziti', //Obaly na jedno použití
  opakovane = 'typPouziti.opakovane', //Opakovaně používané obaly
}

export enum AFCenikObalMaterialK {
  mekPlastPet = 'material.mekPlastPet', //Měkké plasty - PET
  mekPlastPe = 'material.mekPlastPe', //Měkké plasty - PE
  mekPlastPvc = 'material.mekPlastPvc', //Měkké plasty - PVC
  mekPlastPp = 'material.mekPlastPp', //Měkké plasty - PP
  mekPlastPs = 'material.mekPlastPs', //Měkké plasty - PS
  mekPlastXps = 'material.mekPlastXps', //Měkké plasty - XPS
  mekPlastEps = 'material.mekPlastEps', //Měkké plasty - EPS
  mekPlastJine = 'material.mekPlastJine', //Měkké plasty - Jiné
  mekPlastBioRozlozit = 'material.mekPlastBioRozlozit', //Měkké plasty - Biologicky rozložitelné
  mekPlastKompozit = 'material.mekPlastKompozit', //Měkké plasty - Kompozitní
  mekPlastPetVetsi = 'material.mekPlastPetVetsi', //Měkké plasty - PET, nad 3 l
  mekPlastPeVetsi = 'material.mekPlastPeVetsi', //Měkké plasty - PE, nad 3 l
  mekPlastPvcVetsi = 'material.mekPlastPvcVetsi', //Měkké plasty - PVC, nad 3 l
  mekPlastPpVetsi = 'material.mekPlastPpVetsi', //Měkké plasty - PP, nad 3 l
  mekPlastPsVetsi = 'material.mekPlastPsVetsi', //Měkké plasty - PS, nad 3 l
  mekPlastXpsVetsi = 'material.mekPlastXpsVetsi', //Měkké plasty - XPS, nad 3 l
  mekPlastEpsVetsi = 'material.mekPlastEpsVetsi', //Měkké plasty - EPS, nad 3 l
  mekPlastJineVetsi = 'material.mekPlastJineVetsi', //Měkké plasty - Jiné, nad 3 l
  mekPlastBioRozlozitVetsi = 'material.mekPlastBioRozlozitVetsi', //Měkké plasty - Biologicky rozložitelné, nad 3 l
  mekPlastKompozitVetsi = 'material.mekPlastKompozitVetsi', //Měkké plasty - Kompozitní, nad 3 l
  pevDutePlastPet = 'material.pevDutePlastPet', //Pevné duté plasty - PET
  pevDutePlastPe = 'material.pevDutePlastPe', //Pevné duté plasty - PE
  pevDutePlastPvc = 'material.pevDutePlastPvc', //Pevné duté plasty - PVC
  pevDutePlastPp = 'material.pevDutePlastPp', //Pevné duté plasty - PP
  pevDutePlastPs = 'material.pevDutePlastPs', //Pevné duté plasty - PS
  pevDutePlastXps = 'material.pevDutePlastXps', //Pevné duté plasty - XPS
  pevDutePlastEps = 'material.pevDutePlastEps', //Pevné duté plasty - EPS
  pevDutePlastJine = 'material.pevDutePlastJine', //Pevné duté plasty - Jiné
  pevDutePlastBioRozlozit = 'material.pevDutePlastBioRozlozit', //Pevné duté plasty - Biologicky rozložitelné
  pevDutePlastKompozit = 'material.pevDutePlastKompozit', //Pevné duté plasty - Kompozitní
  pevDutePlastPetVetsi = 'material.pevDutePlastPetVetsi', //Pevné duté plasty - PET, nad 3 l
  pevDutePlastPeVetsi = 'material.pevDutePlastPeVetsi', //Pevné duté plasty - PE, nad 3 l
  pevDutePlastPvcVetsi = 'material.pevDutePlastPvcVetsi', //Pevné duté plasty - PVC, nad 3 l
  pevDutePlastPpVetsi = 'material.pevDutePlastPpVetsi', //Pevné duté plasty - PP, nad 3 l
  pevDutePlastPsVetsi = 'material.pevDutePlastPsVetsi', //Pevné duté plasty - PS, nad 3 l
  pevDutePlastXpsVetsi = 'material.pevDutePlastXpsVetsi', //Pevné duté plasty - XPS, nad 3 l
  pevDutePlastEpsVetsi = 'material.pevDutePlastEpsVetsi', //Pevné duté plasty - EPS, nad 3 l
  pevDutePlastJineVetsi = 'material.pevDutePlastJineVetsi', //Pevné duté plasty - Jiné, nad 3 l
  pevDutePlastBioRozlozitVetsi = 'material.pevDutePlastBioRozlozitVetsi', //Pevné duté plasty - Biologicky rozložitelné, nad 3 l
  pevDutePlastKompozitVetsi = 'material.pevDutePlastKompozitVetsi', //Pevné duté plasty - Kompozitní, nad 3 l
  kovyAl = 'material.kovyAl', //Kovy - Al
  kovyFe = 'material.kovyFe', //Kovy - Fe
  kovyFeKompozit = 'material.kovyFeKompozit', //Kovy - Kompozitní Fe
  kovyAlKompozit = 'material.kovyAlKompozit', //Kovy - Kompozitní Al
  kovyAlVetsi = 'material.kovyAlVetsi', //Kovy - Al, nad 3 l
  kovyFeVetsi = 'material.kovyFeVetsi', //Kovy - Fe, nad 3 l
  kovyFeKompozitVetsi = 'material.kovyFeKompozitVetsi', //Kovy - Kompozitní Fe, nad 3 l
  kovyAlKompozitVetsi = 'material.kovyAlKompozitVetsi', //Kovy - Kompozitní Al, nad 3 l
  napojoveKartony = 'material.napojoveKartony', //Nápojové kartony
  napojoveKartonyVetsi = 'material.napojoveKartonyVetsi', //Nápojové kartony, nad 3 l
  kompozit = 'material.kompozit', //Kompozitní materiál
  kompozitVetsi = 'material.kompozitVetsi', //Kompozitní materiál, nad 3 l
  skloTransparent = 'material.skloTransparent', //Sklo - Transparentní
  skloBarevne = 'material.skloBarevne', //Sklo - Barevné
  skloKompozit = 'material.skloKompozit', //Sklo - Kompozitní
  papirBezny = 'material.papirBezny', //Papír - Běžný
  papirHladkaLepenka = 'material.papirHladkaLepenka', //Papír - Hladká lepenka
  papirVlnitaLepenka = 'material.papirVlnitaLepenka', //Papír - Vlnitá lepenka
  papirNasavanaKart = 'material.papirNasavanaKart', //Papír - Nasávaná kartonáž
  papirKompozit = 'material.papirKompozit', //Papír - Kompozitní
  drevoDrevoDrevotriska = 'material.drevoDrevoDrevotriska', //Dřevo - Dřevo a dřevotříska
  drevoKompozit = 'material.drevoKompozit', //Dřevo - Kompozit s nedřevěnými částmi
  textil = 'material.textil', //Textil
  jine = 'material.jine', //Jiné
}

export enum AFCenikObalSurovinaK {
  primarni = 'surovina.primarni', //Primární
  recyklat = 'surovina.recyklat', //Recyklát
}

export enum AFCenikObalBarvaMaterialuK {
  transparent = 'barvaMaterialu.transparent', //Transparentní
  barevPruhled = 'barvaMaterialu.barevPruhled', //Průhledné barevné
  bareNepruhled = 'barvaMaterialu.bareNepruhled', //Neprůhledné barevné
}

export enum AFCenikObalLitterObalK {
  neni = 'litterObal.neni', //Není
  nadobyNaNapoje = 'litterObal.nadobyNaNapoje', //Nádoby na nápoje
  sackyNaPotraviny = 'litterObal.sackyNaPotraviny', //Sáčky a balení na potraviny
  napojKelimkyPlast = 'litterObal.napojKelimkyPlast', //Nápojové kelímky z plastu
  napojKelimkyCastPlast = 'litterObal.napojKelimkyCastPlast', //Nápojové kelímky částečně z plastu
  nadobyNaPotravinyPlast = 'litterObal.nadobyNaPotravinyPlast', //Nádoby na potraviny z plastu
  nadobyNaPotravinyCastPlast = 'litterObal.nadobyNaPotravinyCastPlast', //Nádoby na potraviny částečně z plastu
  plastTasky15 = 'litterObal.plastTasky15', //Plastové odnosné tašky: 0-15 mikronů
  plastTasky50 = 'litterObal.plastTasky50', //Plastové odnosné tašky: 15-50 mikronů
}


export class AFCenikObal extends AFEntity {

    // ID (db: IdEkoKom) - ID)
    id?: number

    // Poslední změna (db: lastUpdate) - Poslední změna)
    lastUpdate?: Date

    // Název (db: Nazev) - Název)
    nazev?: string

    // Název EN (db: NazevA) - Název EN)
    nazevA?: string

    // Název DE (db: NazevB) - Název DE)
    nazevB?: string

    // Název FR (db: NazevC) - Název FR)
    nazevC?: string

    // Poznámka (db: Poznam) - Poznámka)
    poznam?: string

    // Popis (db: Popis) - Popis)
    popis?: string

    // Platí od (db: PlatiOd) - Platí od)
    platiOd?: number

    // Platí do (db: PlatiDo) - Platí do)
    platiDo?: number

    // Hmotnost (db: Hmotnost) - Hmotnost)
    hmotnost?: Big

    // MJ hmotnosti (db: MjHmotK) - MJ hmotnosti)
    mjHmotK?: any

    // Typ obalu (db: TypObaluK) - Typ obalu)
    typObaluK?: any

    // Typ vzniku (db: TypVznikuK) - Typ vzniku)
    typVznikuK?: any

    // Typ použití (db: TypPouzitiK) - Typ použití)
    typPouzitiK?: any

    // Materiál (db: MaterialK) - Materiál)
    materialK?: any

    // Surovina (db: SurovinaK) - Surovina)
    surovinaK?: any

    // Barva (db: BarvaMaterialuK) - Barva)
    barvaMaterialuK?: any

    // Obsahuje nápoje (db: ObsahujeNapoje) - Obsahuje nápoje)
    obsahujeNapoje?: boolean

    // Typ litteringového obalu (db: LitterObalK) - Typ)
    litterObalK?: any

    // Hmotnost plastu (db: LitterObalHmotnostPlast) - Hmotnost plastu)
    litterObalHmotnostPlast?: Big

    // Ceník (db: IdCenik) - Ceník)
    cenik?: AFCenik


    // Uživatelské vazby (type: VAZBA) - uzivatelske-vazby)
    uzivatelskeVazby?: Promise<AFUzivatelskaVazba[]>

}