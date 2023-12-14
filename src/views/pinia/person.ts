
export interface Person {
  name: string;
  addresses?: Address[];
}

export interface Address {
  street: string;
  city: string;
  country: string;
}