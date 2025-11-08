// src/app/features/approvisionnement/approvisionnement.component.ts
import { Component, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from '../../shared/icon/icon.component';
import { SummryCardComponent } from './components/summry-card/summry-card.component';
import { CurrencyFormatPipe } from '../../core/pipes/currency-format.pipe';
import { SupplyService } from '../../core/service/approvisionnement.service';
import { Supply, SupplyStatus } from '../../core/models/aprovisionnement.model';

@Component({
  selector: 'app-approvisionnement',
  imports: [CommonModule, IconComponent, SummryCardComponent, CurrencyFormatPipe],
  templateUrl: './approvisionnement.component.html',
  styleUrls: ['./approvisionnement.component.css']
})
export class ApprovisionnementComponent {
  private supplyService = inject(SupplyService);

  readonly supplies = this.supplyService.getSupplies();
  readonly suppliers = this.supplyService.getSuppliers();
  readonly summary = this.supplyService.summary;
  readonly SupplyStatus = SupplyStatus;

  getSupplierName(id: string): string {
    return this.supplyService.getSupplierName(id);
  }

  getTotalAmount(supply: Supply): number {
    return this.supplyService.getTotalAmount(supply);
  }
}
