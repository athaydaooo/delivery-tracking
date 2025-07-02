export type DeliveryAddress = {
  number: number;
  complement?: string;
  reference?: string;
  street: string;
  district: string;
  city: string;
  state: string;
  postal_code: string;
  country: string;
};
