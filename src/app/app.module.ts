import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { TryComponent } from './try/try.component';
import { SpeakerComponent } from './speaker/speaker.component';
import { FlashcardComponent } from './flashcard/flashcard.component';
import { MemesComponent } from './memes/memes.component';
import { GameComponent } from './game/game.component';
import { GalleryComponent } from './gallery/gallery.component';
import { SubscribeComponent } from './subscribe/subscribe.component';
import { FooterComponent } from './footer/footer.component';
import { NgwWowModule } from 'ngx-wow';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TryComponent,
    SpeakerComponent,
    FlashcardComponent,
    MemesComponent,
    GameComponent,
    GalleryComponent,
    SubscribeComponent,
    FooterComponent
  ],
  imports: [
    NgwWowModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
