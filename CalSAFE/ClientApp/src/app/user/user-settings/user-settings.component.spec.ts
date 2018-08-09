/// <reference path="../../../../node_modules/@types/jasmine/index.d.ts" />
import { TestBed, async, ComponentFixture, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { BrowserModule, By } from "@angular/platform-browser";
import { UserSettingsComponent } from './user-settings.component';

let component: UserSettingsComponent;
let fixture: ComponentFixture<UserSettingsComponent>;

describe('user-settings component', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ UserSettingsComponent ],
            imports: [ BrowserModule ],
            providers: [
                { provide: ComponentFixtureAutoDetect, useValue: true }
            ]
        });
        fixture = TestBed.createComponent(UserSettingsComponent);
        component = fixture.componentInstance;
    }));

    it('should do something', async(() => {
        expect(true).toEqual(true);
    }));
});
