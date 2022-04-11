import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreationspageComponent } from './creationspage.component';

describe('CreationspageComponent', () => {
  let component: CreationspageComponent;
  let fixture: ComponentFixture<CreationspageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreationspageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreationspageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
