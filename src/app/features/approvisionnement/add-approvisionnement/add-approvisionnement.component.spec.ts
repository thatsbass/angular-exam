import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddApprovisionnementComponent } from './add-approvisionnement.component';

describe('AddApprovisionnementComponent', () => {
  let component: AddApprovisionnementComponent;
  let fixture: ComponentFixture<AddApprovisionnementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddApprovisionnementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddApprovisionnementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
