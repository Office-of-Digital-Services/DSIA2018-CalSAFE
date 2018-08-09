/// <reference path="../../../node_modules/@types/jasmine/index.d.ts" />
import { TestBed, async, ComponentFixture, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { BrowserModule, By } from "@angular/platform-browser";
import { SidenavComponent } from './sidenav.component';

let component: SidenavComponent;
let fixture: ComponentFixture<SidenavComponent>;

describe('sidenav component', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ SidenavComponent ],
            imports: [ BrowserModule ],
            providers: [
                { provide: ComponentFixtureAutoDetect, useValue: true }
            ]
        });
        fixture = TestBed.createComponent(SidenavComponent);
        component = fixture.componentInstance;
    }));

    it('should do something', async(() => {
        expect(true).toEqual(true);
    }));
});
