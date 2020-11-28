import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CitiesWorldComponent } from './cities-world.component';

describe('CitiesWorldComponent', () => {
  let component: CitiesWorldComponent;
  let fixture: ComponentFixture<CitiesWorldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CitiesWorldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CitiesWorldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

});
