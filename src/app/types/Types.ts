export interface IFighterData {
    name: string,
    score?: number,
    setScore?: Function
}

export interface IFighter {
    fighter: IFighterData
}

export interface IFightersPair {
    firstFighter: IFighterData,
    secondFighter: IFighterData,
}

export interface IModal {
    message: string,
    visible: boolean,
    setVisible: Function,
    confirm: Function,
    decline: Function
}