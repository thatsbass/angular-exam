export interface Article {
  id: number;
  libelle: string;
  quantite: number;
  prixUnitaire: number;
}

export interface Fournisseur {
  id: number;
  nom: string;
}

export enum StatutApprovisionnement {
  RECU = 'Reçu',
  EN_ATTENTE = 'En attente',
  CANCELLED = 'Annulé'
}

export interface Approvisionnement {
  id: number;
  date: Date | string;
  fournisseur: Fournisseur;
  reference: string;
  articles: Article[];
  observation?: string;
  statut: StatutApprovisionnement;
}

export const MOCK_DATA: Approvisionnement[] = [
  {
    id: 1,
    date: '15/04/2023',
    fournisseur: { id: 1, nom: 'Textiles Dakar SARL' },
    reference: 'APP-2023-001',
    articles: [
      { id: 1, libelle: 'Tissu', quantite: 10, prixUnitaire: 1000 }
    ],
    observation: 'Approvisionnement standard',
    statut: StatutApprovisionnement.RECU
  },
  {
    id: 2,
    date: '10/04/2023',
    fournisseur: { id: 2, nom: 'Mercerie Centrale' },
    reference: 'APP-2023-002',
    articles: [
      { id: 1, libelle: 'Tissu', quantite: 10, prixUnitaire: 1000 }
    ],
    observation: 'Approvisionnement standard',
    statut: StatutApprovisionnement.EN_ATTENTE
  }
];

export interface Stats {
  totalApprovisionnements: number;
  nombreApprovisionnements: number;
  fournisseurPrincipal: {
    nom: string;
    montant: number;
    pourcentage: string;
  };
}

export const MOCK_STATS: Stats = {
  totalApprovisionnements: 2_720_000,
  nombreApprovisionnements: 5,
  fournisseurPrincipal: {
    nom: 'Textiles Dakar',
    montant: 1_430_000,
    pourcentage: '52.5%'
  }
};
