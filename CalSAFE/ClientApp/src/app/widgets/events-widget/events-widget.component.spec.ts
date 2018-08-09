/// <reference path="../../../../node_modules/@types/jasmine/index.d.ts" />
import { TestBed, async, ComponentFixture, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { BrowserModule, By } from "@angular/platform-browser";
import { EventsWidgetComponent } from './events-widget.component';

let component: EventsWidgetComponent;
let fixture: ComponentFixture<EventsWidgetComponent>;

describe('events-widget component', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ EventsWidgetComponent ],
            imports: [ BrowserModule ],
            providers: [
                { provide: ComponentFixtureAutoDetect, useValue: true }
            ]
        });
        fixture = TestBed.createComponent(EventsWidgetComponent);
        component = fixture.componentInstance;
    }));

    it('should do something', async(() => {
        expect(true).toEqual(true);
    }));
});
