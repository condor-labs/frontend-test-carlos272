import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminModuleComponent } from './admin-module.component';
import { WeatherForecastPrincipalComponent } from '../admin-module/weather-forecast-principal/weather-forecast-principal.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'

describe('CitiesWorldComponent', () => {
    let component: AdminModuleComponent;
    let fixture: ComponentFixture<AdminModuleComponent>;

    let adminModuleComponent;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                AdminModuleComponent,
                WeatherForecastPrincipalComponent
            ],
            providers: [
                AdminModuleComponent,
                WeatherForecastPrincipalComponent
            ],
            imports: [
                HttpClientTestingModule
            ]
        })
            .compileComponents();
        console.log('beforeEach')
        adminModuleComponent = TestBed.get(AdminModuleComponent)
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AdminModuleComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('El valor de myVar debe ser Hola Mundo', () => {
        const valor = adminModuleComponent.myVar
        expect(valor).toEqual('Hola Mundo')
    })
});