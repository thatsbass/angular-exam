
import { Supply, Supplier, Article, SupplyStatus } from './model';

export const SUPPLIERS: Supplier[] = [
  { id: '1', name: 'Textiles Dakar SARL' },
  { id: '2', name: 'Mercerie Centrale' },
  { id: '3', name: 'Tissus Premium' },
  { id: '4', name: 'Fournitures Globales SA' },
];

export const ARTICLES: Article[] = [
  { id: 'a1', name: 'Coton Imprimé Wax' },
  { id: 'a2', name: 'Fil à coudre polyester' },
  { id: 'a3', name: 'Boutons en nacre' },
  { id: 'a4', name: 'Fermeture éclair 20cm' },
  { id: 'a5', name: 'Tissu en lin uni' },
];

export const SUPPLIES: Supply[] = [
  {
    id: 's1',
    reference: 'APP-2023-001',
    date: '15/04/2023',
    supplierId: '1',
    items: [
      { articleId: 'a1', quantity: 50, unitPrice: 10000 },
      { articleId: 'a2', quantity: 200, unitPrice: 500 },
      { articleId: 'a5', quantity: 25, unitPrice: 6000 },
    ],
    status: SupplyStatus.Received,
  },
  {
    id: 's2',
    reference: 'APP-2023-002',
    date: '10/04/2023',
    supplierId: '2',
    items: [
      { articleId: 'a3', quantity: 1000, unitPrice: 120 },
      { articleId: 'a4', quantity: 500, unitPrice: 400 },
    ],
    status: SupplyStatus.Received,
  },
  {
    id: 's3',
    reference: 'APP-2023-003',
    date: '05/04/2023',
    supplierId: '3',
    items: [
      { articleId: 'a5', quantity: 50, unitPrice: 9000 },
    ],
    status: SupplyStatus.Pending,
  },
  {
    id: 's4',
    reference: 'APP-2023-004',
    date: '01/04/2023',
    supplierId: '1',
    items: [
      { articleId: 'a1', quantity: 100, unitPrice: 6800 },
    ],
    status: SupplyStatus.Received,
  },
  {
    id: 's5',
    reference: 'APP-2023-005',
    date: '25/03/2023',
    supplierId: '2',
    items: [
      { articleId: 'a2', quantity: 100, unitPrice: 500 },
      { articleId: 'a3', quantity: 2000, unitPrice: 110 },
      { articleId: 'a4', quantity: 1000, unitPrice: 250 },
    ],
    status: SupplyStatus.Received,
  },
];
