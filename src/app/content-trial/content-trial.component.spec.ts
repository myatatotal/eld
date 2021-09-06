import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentTrialComponent } from './content-trial.component';

describe('ContentTrialComponent', () => {
  let component: ContentTrialComponent;
  let fixture: ComponentFixture<ContentTrialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentTrialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentTrialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
