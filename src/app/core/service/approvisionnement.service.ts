import { Injectable, computed, signal } from '@angular/core';
import { Supplier, Supply } from '../models/aprovisionnement.model';
import { SUPPLIERS, SUPPLIES } from '../mock/approvisionnement.mock';

@Injectable({ providedIn: 'root' })
export class SupplyService {
  private readonly supplies = signal<Supply[]>(SUPPLIES);
  private readonly suppliers = signal<Supplier[]>(SUPPLIERS);

  readonly summary = computed(() => ({
    totalApprovisionnements: this.supplies().reduce(
      (sum, s) => sum + this.getTotalAmount(s),
      0
    ),
    principalSupplier: this.suppliers().find(s => s.id === '1'),
    supliesLength: this.supplies().length,
  }));

  getSupplies() {
    return this.supplies.asReadonly();
  }

  getSuppliers() {
    return this.suppliers.asReadonly();
  }

  getTotalAmount(supply: Supply): number {
    return supply.items.reduce((acc, i) => acc + i.quantity * i.unitPrice, 0);
  }

  getSupplierName(id: string): string {
    return this.suppliers().find(s => s.id === id)?.name || 'Inconnu';
  }
}
