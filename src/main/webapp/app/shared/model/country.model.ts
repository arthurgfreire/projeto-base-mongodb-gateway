export interface ICountry {
  id?: string;
  countryName?: string;
  regionId?: string;
}

export class Country implements ICountry {
  constructor(public id?: string, public countryName?: string, public regionId?: string) {}
}
