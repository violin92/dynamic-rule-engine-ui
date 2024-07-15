import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetrieveRuleByIdComponent } from './retrieve-rule-by-id.component';

describe('RetrieveRuleByIdComponent', () => {
  let component: RetrieveRuleByIdComponent;
  let fixture: ComponentFixture<RetrieveRuleByIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RetrieveRuleByIdComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RetrieveRuleByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
