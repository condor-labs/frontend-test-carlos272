import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminService } from '../admin.service';
import { WeatherForecastPrincipalComponent } from './weather-forecast-principal.component';

class MockUserService {
  isLoggedIn = true;
  user = { name: 'Test User'};
}

describe('WeatherForecastPrincipalComponentComponent', () => {
  let component: WeatherForecastPrincipalComponent;
  let fixture: ComponentFixture<WeatherForecastPrincipalComponent>;
  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeatherForecastPrincipalComponent ],
      providers: [
        WeatherForecastPrincipalComponent,
        { provide: AdminService, useClass: MockUserService }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherForecastPrincipalComponent);
    component = fixture.componentInstance;
    //component = TestBed.inject
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('should create two children', () => {
  //   const compiled = fixture.nativeElement;
  //   expect(compiled.querySelector('div').children.length).toBe(testArray.length);
  // })

});