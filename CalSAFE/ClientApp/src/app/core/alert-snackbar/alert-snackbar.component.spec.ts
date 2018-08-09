/// <reference path="../../../../node_modules/@types/jasmine/index.d.ts" />
import { TestBed, async, ComponentFixture, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { BrowserModule, By } from "@angular/platform-browser";
import { AlertSnackbarComponent } from './alert-snackbar.component';

let component: AlertSnackbarComponent;
let fixture: ComponentFixture<AlertSnackbarComponent>;

describe('alert-snackbar component', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ AlertSnackbarComponent ],
            imports: [ BrowserModule ],
            providers: [
                { provide: ComponentFixtureAutoDetect, useValue: true }
            ]
        });
        fixture = TestBed.createComponent(AlertSnackbarComponent);
        component = fixture.componentInstance;
    }));

    it('should do something', async(() => {
        expect(true).toEqual(true);
    }));
});
