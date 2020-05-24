import { UserAddress } from './user-address';
import { UserCompany } from './user-company';

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
  address: UserAddress;
  company: UserCompany;
}
