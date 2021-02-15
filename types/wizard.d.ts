import { Address } from './address'

export type WizardContext = {
  from: Address;
  to: Address;
  weight: number | null;
  shippingOption: ShoppingOption | null;
}
