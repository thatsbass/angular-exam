import { Component, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from '../icon/icon.component';
import { Summary, Supplier, Supply, SupplyStatus } from '../models/model';
import { SUPPLIERS, SUPPLIES } from '../models/mock';
import { SummryCardComponent } from './components/summry-card/summry-card.component';

@Component({
  selector: 'app-approvisionnement',
  standalone: true,
  imports: [CommonModule, IconComponent, SummryCardComponent],
  templateUrl: './approvisionnement.component.html',
  styleUrls: ['./approvisionnement.component.css']
})
export class ApprovisionnementComponent {
  readonly supplies = signal<Supply[]>(SUPPLIES);
  readonly suppliers = signal<Supplier[]>(SUPPLIERS);
  readonly SupplyStatus = SupplyStatus;
  
  summary = computed(() => ({
    totalApprovisionnements: this.supplies().reduce((sum, supply) => sum + this.getTotalAmount(supply), 0),
    principalSupplier: this.suppliers().find(s => s.id === '1'),
    supliesLength: this.supplies().length,
  }));

    getTotalAmount(supply: Supply): number {
        return supply.items.reduce((acc, item) => acc + item.quantity * item.unitPrice, 0);
    }
    
    formatCurrency(amount: number): string {
        return new Intl.NumberFormat('fr-FR').format(amount) + ' FCFA';
    }

    getSupplierName(supplierId: string): string {
      return this.suppliers().find(s => s.id === supplierId)?.name || 'Inconnu';
    }
}
