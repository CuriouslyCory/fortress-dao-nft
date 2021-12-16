import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TraitChooserComponent } from './trait-chooser.component';

describe('TraitChooserComponent', () => {
  let component: TraitChooserComponent;
  let fixture: ComponentFixture<TraitChooserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TraitChooserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TraitChooserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
