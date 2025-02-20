import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateRuleComponent } from './update-rule.component';

describe('UpdateRuleComponent', () => {
  let component: UpdateRuleComponent;
  let fixture: ComponentFixture<UpdateRuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateRuleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateRuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
