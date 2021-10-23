import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScalioComponent } from './scalio.component';

describe('ScalioComponent', () => {
  let component: ScalioComponent;
  let fixture: ComponentFixture<ScalioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScalioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScalioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
