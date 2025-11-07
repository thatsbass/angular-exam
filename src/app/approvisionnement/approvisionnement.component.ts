import { Component, signal } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { Approvisionnement, MOCK_DATA, MOCK_STATS, Stats } from '../models/approvisionnement.model';

@Component({
  selector: 'app-approvisionnement',
  standalone: true,
  imports: [CommonModule, CurrencyPipe],
  templateUrl: './approvisionnement.component.html',
  styleUrls: ['./approvisionnement.component.css']
})
export class ApprovisionnementComponent {
  stats = signal<Stats>(MOCK_STATS);
  approvisionnements = signal<Approvisionnement[]>(MOCK_DATA);

  totalAmount(approvisionnement: Approvisionnement) {
    return approvisionnement.articles.reduce(
      (total, article) => total + article.prixUnitaire * article.quantite,
      0
    );
  }

  getStatusColor(statut: string) {
    switch (statut) {
      case 'Reçu':
        return 'bg-green-600 text-white';
      case 'En attente':
        return 'bg-yellow-500 text-white';
      default:
        return 'bg-gray-600 text-white';
    }
  }
}
