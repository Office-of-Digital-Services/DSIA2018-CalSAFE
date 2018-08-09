/// <reference path="../../../node_modules/@types/jasmine/index.d.ts" />
import { TestBed, async, ComponentFixture, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { BrowserModule, By } from "@angular/platform-browser";
import { ResourcesComponent } from './resources.component';

let component: ResourcesComponent;
let fixture: ComponentFixture<ResourcesComponent>;

describe('resources component', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ ResourcesComponent ],
            imports: [ BrowserModule ],
            providers: [
                { provide: ComponentFixtureAutoDetect, useValue: true }
            ]
        });
        fixture = TestBed.createComponent(ResourcesComponent);
        component = fixture.componentInstance;
    }));

    it('should do something', async(() => {
        expect(true).toEqual(true);
    }));
});
