import * as _ from 'lodash';

export class Org {
  _id: String;
  description: String;
  name: String;
  updatedBy: String;
  dateAdded: String;
  country: String;
  postal: String;
  province: String;
  city: String;
  address1: String;
  address2: String;
  companyType: String;
  parentCompany: any;
  companyLegal: String;
  company: String;
  checkbox: boolean;

  constructor(obj?: any) {
    this._id = obj && obj._id || null;
    this.description = obj && obj.description || undefined;
    this.name = obj && obj.name || undefined;
    this.updatedBy = obj && obj.updatedBy || undefined;
    this.dateAdded = obj && obj.dateAdded || undefined;
    this.country = obj && obj.country || undefined;
    this.postal = obj && obj.postal || undefined;
    this.province = obj && obj.province || undefined;
    this.city = obj && obj.city || undefined;
    this.address1 = obj && obj.address1 || undefined;
    this.address2 = obj && obj.address2 || undefined;
    this.companyType = obj && obj.companyType || undefined;
    this.parentCompany = obj && obj.parentCompany || undefined;
    this.companyLegal = obj && obj.companyLegal || undefined;
    this.company = obj && obj.company || undefined;
    this.checkbox = obj && obj.checkbox || undefined;
  }
}
