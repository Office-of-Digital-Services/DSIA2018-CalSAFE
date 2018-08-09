export class Resource {
  id: number;
  title: string;
  phoneNo: string;
  address: Address;
  website: string;
}

export class Address {
  addressLine1: string;
  addressLine2: string;
  city: string;
  state: string;
  postalCode: string;
}
