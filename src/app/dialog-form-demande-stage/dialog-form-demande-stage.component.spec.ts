import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogFormDemandeStageComponent } from './dialog-form-demande-stage.component';

describe('DialogFormDemandeStageComponent', () => {
  let component: DialogFormDemandeStageComponent;
  let fixture: ComponentFixture<DialogFormDemandeStageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogFormDemandeStageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogFormDemandeStageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
