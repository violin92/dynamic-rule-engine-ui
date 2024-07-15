import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetrieveRulesComponent } from './retrieve-rules.component';

describe('RetrieveAllRulesComponent', () => {
  let component: RetrieveRulesComponent;
  let fixture: ComponentFixture<RetrieveRulesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RetrieveRulesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RetrieveRulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
