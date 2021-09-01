import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InterestsComponent } from './components/interests/interests.component';
import { RidesComponent } from './components/rides/rides.component';
import { MaterialComponentsModule } from './components/material-components/material-components.module';
import { MatSpinnerOverlayComponent } from './components/mat-spinner-overlay/mat-spinner-overlay.component';
import { LoginComponent } from './components/login/login.component';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { HeaderComponent } from './components/header/header.component';
import { MenuComponent } from './components/menu/menu.component';
import { MyRidesComponent } from './components/my-rides/my-rides.component';
import { MyInterestsComponent } from './components/my-interests/my-interests.component';

@NgModule({
  declarations: [
    AppComponent,
    InterestsComponent,
    RidesComponent,
    MatSpinnerOverlayComponent,
    LoginComponent,
    NotificationsComponent,
    HeaderComponent,
    MenuComponent,
    MyRidesComponent,
    MyInterestsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MaterialComponentsModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
