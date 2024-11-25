import { IAuthority, NewAuthority } from './authority.model';

export const sampleWithRequiredData: IAuthority = {
  name: '9d1c2c6f-92e4-4155-aa78-080d5c3debdd',
};

export const sampleWithPartialData: IAuthority = {
  name: '5be15c3a-ca60-44ec-856f-e34bea3838db',
};

export const sampleWithFullData: IAuthority = {
  name: '1f24ef73-c8a9-4fbe-8848-acfb9d70fe1b',
};

export const sampleWithNewData: NewAuthority = {
  name: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
