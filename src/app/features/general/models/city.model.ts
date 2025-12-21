export interface City {
    id: number,
    name: string,
    country: string,
    maxLevelOfCorp: number,
    weeklyTaxes: number,
    weeklyCompanyTaxes: number,
    rank: number,
    travelDuration: number |null,
    travelPrice: number |null,
    companyCount: number |null,
}
