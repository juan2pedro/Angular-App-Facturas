import { Invoice } from "../models/invoice";

export const invoiceData: Invoice = {
  id: 1,
  name: 'Componentes de pc',
  client: {
    name: 'Andres',
    lastName: 'Does',
    addres: {
      country: 'United States',
      city: 'New York',
      street: '123 Main St',
      number: 123,
    },
  },
    company: {
      name: 'New Agency',
      fiscalNumber: 121212,
    },
    items: [
      {
        id: 1,
        product: 'CPU intel i9',
        price: 599,
        quantity: 1,
      },
      {
        id: 2,
        product: 'Teclado mecanico',
        price: 399,
        quantity: 1,
      },
      {
        id: 3,
        product: 'Monitor aus 144hz',
        price: 299,
        quantity: 3,
      },
    ],
  }
