import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import {NoopAnimationsModule} from "@angular/platform-browser/animations";
import {LayoutModule} from "@angular/cdk/layout";
import {NavigationBarComponent} from "./navigation-bar/navigation-bar.component";
import {MatToolbarModule} from '@angular/material';
import {MatSidenav, MatSidenavContainer, MatSidenavContent, MatSidenavModule} from "@angular/material/sidenav";
import {MatListModule, MatNavList} from "@angular/material/list";
import {MatIcon} from "@angular/material/icon";


describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        NoopAnimationsModule,
        LayoutModule,
        MatToolbarModule,
        MatSidenavModule,
        MatListModule
      ],
      declarations: [
        AppComponent,
        NavigationBarComponent,
        MatSidenav,
        MatSidenavContainer,
        MatSidenavContent,
        MatIcon,
        MatNavList
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'epitome'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('epitome');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to epitome!');
  });
});
