export interface ICompany {
  bs?: string
  catchPhrase?: string
  name?: string
}
export interface IAddress {
  city?: string
  geo?: {
    lat?: string
    lng?: string
  }
  street?: string
  suite?: string
  zipcode?: string
}
export interface IUser {
  website?: string
  username?: string
  phone?: string
  name?: string
  id?: number
  email?: string
  company?: ICompany
  address?: IAddress
}
