import { Component, computed, input } from '@angular/core';
import { Summary } from '../../../../core/models/aprovisionnement.model';
import { CurrencyFormatPipe } from '../../../../core/pipes/currency-format.pipe';

@Component({
  selector: 'app-summry-card',
  imports: [CurrencyFormatPipe],
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
}
