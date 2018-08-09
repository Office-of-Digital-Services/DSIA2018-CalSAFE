/// <reference path="../../../../node_modules/@types/jasmine/index.d.ts" />
import { TestBed, async, ComponentFixture, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { BrowserModule, By } from "@angular/platform-browser";
import { ReportSnackbarComponent } from './report-snackbar.component';

let component: ReportSnackbarComponent;
let fixture: ComponentFixture<ReportSnackbarComponent>;

describe('report-snackbar component', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ ReportSnackbarComponent ],
            imports: [ BrowserModule ],
            providers: [
                { provide: ComponentFixtureAutoDetect, useValue: true }
            ]
        });
        fixture = TestBed.createComponent(ReportSnackbarComponent);
        component = fixture.componentInstance;
    }));

    it('should do something', async(() => {
        expect(true).toEqual(true);
    }));
});
