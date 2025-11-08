import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { Subscription } from 'rxjs';
import { IconComponent } from '../../../shared/icon/icon.component';
import { CurrencyFormatPipe } from '../../../core/pipes/currency-format.pipe';
import { ARTICLES, SUPPLIERS } from '../../../core/mock/approvisionnement.mock';


@Component({
  selector: 'app-add-approvisionnement',
  imports: [CommonModule, ReactiveFormsModule, RouterLink, IconComponent, CurrencyFormatPipe],
  templateUrl: './add-approvisionnement.component.html',
  styleUrl: './add-approvisionnement.component.css'
})
export class AddApprovisionnementComponent implements OnInit, OnDestroy {
  form!: FormGroup;
  suppliers = SUPPLIERS;
  articles = ARTICLES;
  private itemSubscriptions: Subscription[] = [];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      date: [{ value: '20/07/2025', disabled: false }],
      supplierId: ['', Validators.required],
      reference: ['', Validators.required],
      observations: [''],
      items: this.fb.array([]),
    });
    this.addArticle();
  }

  get items(): FormArray {
    return this.form.get('items') as FormArray;
  }

  addArticle(): void {
    const articleForm = this.fb.group({
      articleId: ['', Validators.required],
      quantity: [1, [Validators.required, Validators.min(1)]],
      unitPrice: [0, [Validators.required, Validators.min(0)]],
      total: [{ value: 0, disabled: true }],
    });

    const quantityControl = articleForm.get('quantity');
    const priceControl = articleForm.get('unitPrice');
    const totalControl = articleForm.get('total');

    if (quantityControl && priceControl && totalControl) {
      const quantityChanges = quantityControl.valueChanges.subscribe(qty => {
        const price = priceControl.value;
        totalControl.setValue((qty || 0) * (price || 0));
      });

      const priceChanges = priceControl.valueChanges.subscribe(price => {
        const qty = quantityControl.value;
        totalControl.setValue((qty || 0) * (price || 0));
      });

      this.itemSubscriptions.push(quantityChanges, priceChanges);
    }

    this.items.push(articleForm);
  }
  
  onSubmit(): void {
    if (this.form.valid) {
      console.log('Form Submitted', this.form.getRawValue());
      // Here you would typically navigate back to the list
    }
  }

  ngOnDestroy(): void {
    this.itemSubscriptions.forEach(sub => sub.unsubscribe());
  }
}
