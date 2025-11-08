
export enum SupplyStatus {
  Received = 'Reçu',
  Pending = 'En attente',
}

export interface Supplier {
  id: string;
  name: string;
}

export interface Article {
  id: string;
  name: string;
}

export interface SupplyItem {
  articleId: string;
  quantity: number;
  unitPrice: number;
}

export interface Supply {
  id: string;
  reference: string;
  date: string;
  supplierId: string;
  items: SupplyItem[];
  status: SupplyStatus;
  observations?: string;
}


export interface Summary {
  totalApprovisionnements: number;
  principalSupplier: Supplier | undefined;
  supliesLength: number;
}
export type Page = 'list' | 'form';
