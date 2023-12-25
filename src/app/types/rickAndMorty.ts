export interface character {
    id: number,
    name: string,
    status: string,
    species: string,
    type: string,
    gender: string
}
export interface characterApiInfo {
    count: number,
    pages: number,
    next: string,
    prev: string
}
export interface characterApiResponse {
    info: characterApiInfo,
    results: character[]
}
