import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkiPageComponent } from './ski-page.component';

describe('SkiPageComponent', () => {
  let component: SkiPageComponent;
  let fixture: ComponentFixture<SkiPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SkiPageComponent]
    });
    fixture = TestBed.createComponent(SkiPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
