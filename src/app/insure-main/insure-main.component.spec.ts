import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsureMainComponent } from './insure-main.component';

describe('InsureMainComponent', () => {
  let component: InsureMainComponent;
  let fixture: ComponentFixture<InsureMainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InsureMainComponent]
    });
    fixture = TestBed.createComponent(InsureMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
