/// <reference path="../../../../node_modules/@types/jasmine/index.d.ts" />
import { TestBed, async, ComponentFixture, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { BrowserModule, By } from "@angular/platform-browser";
import { EvacuationsWidgetComponent } from './evacuations-widget.component';

let component: EvacuationsWidgetComponent;
let fixture: ComponentFixture<EvacuationsWidgetComponent>;

describe('evacuations-widget component', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ EvacuationsWidgetComponent ],
            imports: [ BrowserModule ],
            providers: [
                { provide: ComponentFixtureAutoDetect, useValue: true }
            ]
        });
        fixture = TestBed.createComponent(EvacuationsWidgetComponent);
        component = fixture.componentInstance;
    }));

    it('should do something', async(() => {
        expect(true).toEqual(true);
    }));
});
