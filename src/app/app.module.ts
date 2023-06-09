import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {AppComponent} from './app.component';
import {appRoutes} from './app.routes';
import {HeaderComponent} from './components/header/header.component';
import {MainComponent} from './pages/main/main.component';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
    declarations: [AppComponent, HeaderComponent, MainComponent],
    imports: [
        BrowserModule,
        HttpClientModule,
        RouterModule.forRoot(appRoutes, {initialNavigation: 'enabledBlocking'}),
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {
}
