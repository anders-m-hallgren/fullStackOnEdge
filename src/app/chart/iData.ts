export interface Series {
    name: string
    value: number
}
export interface Data {
    name: string
    series: Series[]
}