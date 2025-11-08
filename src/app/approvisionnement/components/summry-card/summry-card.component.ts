import { Component, computed, input } from '@angular/core';
import { Summary } from '../../../models/model';

@Component({
  selector: 'app-summry-card',
  templateUrl: './summry-card.component.html',
})
export class SummryCardComponent {
   summaryData = input<Summary>(
    {
      totalApprovisionnements: 0,
      principalSupplier: undefined,
      supliesLength: 0,
    }
   ) 

   summary = computed(() => this.summaryData());
   
    formatCurrency(amount: number): string {
        return new Intl.NumberFormat('fr-FR').format(amount) + ' FCFA';
    }

}
