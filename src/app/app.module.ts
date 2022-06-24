import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MainComponent } from './components/pages/main/main.component';
import { CardComponent } from './components/organisms/card/card.component';
import { CardImgComponent } from './components/atoms/card-img/card-img.component';
import { CardHeadComponent } from './components/molecules/card-head/card-head.component';
import { CardBodyComponent } from './components/molecules/card-body/card-body.component';
import { CardFooterComponent } from './components/molecules/card-footer/card-footer.component';
import { CardIconComponent } from './components/atoms/card-icon/card-icon.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    CardComponent,
    CardImgComponent,
    CardHeadComponent,
    CardBodyComponent,
    CardFooterComponent,
    CardIconComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
