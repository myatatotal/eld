import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsOthersComponent } from './cards-others.component';

describe('CardsOthersComponent', () => {
  let component: CardsOthersComponent;
  let fixture: ComponentFixture<CardsOthersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardsOthersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardsOthersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
