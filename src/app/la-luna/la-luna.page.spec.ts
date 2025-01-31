import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaLunaPage } from './la-luna.page';

describe('LaLunaPage', () => {
  let component: LaLunaPage;
  let fixture: ComponentFixture<LaLunaPage>;

  beforeEach(async () => {
    fixture = TestBed.createComponent(LaLunaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
