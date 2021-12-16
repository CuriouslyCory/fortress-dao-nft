import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { CharacterDisplayComponent } from './components/character-display/character-display.component';
import { MainComponent } from './components/pages/main/main.component';
import { PageNotFoundComponent } from './components/pages/page-not-found/page-not-found.component';
import { GenderSelectorComponent } from './components/gender-selector/gender-selector.component';
import { TraitChooserComponent } from './components/trait-chooser/trait-chooser.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CharacterDisplayComponent,
    MainComponent,
    PageNotFoundComponent,
    GenderSelectorComponent,
    TraitChooserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
