import { IUser } from './user.model';

export const sampleWithRequiredData: IUser = {
  id: 'f12b71a0-2d2a-4940-a842-dcb925047e53',
  login: 'ZlJfsD',
};

export const sampleWithPartialData: IUser = {
  id: '2f0b2ef4-7793-4056-ac86-37638c02aa39',
  login: 'w@FO1\\oOnz\\mJ\\)ShV5\\@4oNTd\\^t',
};

export const sampleWithFullData: IUser = {
  id: 'fa6781b3-4134-412f-a9a4-55e90c3abfc5',
  login: '==@gmPf\\BpKH\\U6',
};
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
