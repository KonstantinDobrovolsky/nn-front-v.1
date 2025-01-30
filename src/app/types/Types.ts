export interface RatingListItemProps {
    position: string,
    fio: string,
    ratingValue: string,
    ratingDynamics: string,
    club: string,
    isRatingValid: boolean
}

export interface FighterDto {
    id: number,
    fio: string,
    club: string,
    saberRating?: number,
    saberPosition?: number,
    longswordRating?: number,
    longswordPosition?: number,
    fights: string[]
}

export interface Fight {
    fio1: string,
    fio2: string,
    score: string
}