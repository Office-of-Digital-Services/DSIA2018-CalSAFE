/// <reference path="../../../../node_modules/@types/jasmine/index.d.ts" />
import { TestBed, async, ComponentFixture, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { BrowserModule, By } from "@angular/platform-browser";
import { EventResourcesComponent } from './event-resources.component';

let component: EventResourcesComponent;
let fixture: ComponentFixture<EventResourcesComponent>;

describe('event-resources component', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ EventResourcesComponent ],
            imports: [ BrowserModule ],
            providers: [
                { provide: ComponentFixtureAutoDetect, useValue: true }
            ]
        });
        fixture = TestBed.createComponent(EventResourcesComponent);
        component = fixture.componentInstance;
    }));

    it('should do something', async(() => {
        expect(true).toEqual(true);
    }));
});
