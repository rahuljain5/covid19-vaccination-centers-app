import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon'
import {MatButtonModule} from '@angular/material/button'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppService } from './app.service';
import { HttpClientModule } from '@angular/common/http';
import { MatDatepickerModule } from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatNativeDateModule, MatRippleModule} from '@angular/material/core';
import { DatePickerComponent } from './datepicker-component/date-picker.component';
import { FormsModule } from '@angular/forms';
import { CardComponentComponent } from './card-component/card-component.component';
import {MatCardModule} from '@angular/material/card'; 
import {MatExpansionModule} from '@angular/material/expansion'; 
import {MatListModule} from '@angular/material/list'; 
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatButtonToggleModule} from '@angular/material/button-toggle'; 
import {MatSelectModule} from '@angular/material/select'; 
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner'; 
import {ScrollingModule} from '@angular/cdk/scrolling'; 
import { FindDistrictSessionsComponent } from './find-district-sessions/find-district-sessions.component'; 

@NgModule({
  declarations: [
    AppComponent,
    DatePickerComponent,
    CardComponentComponent,
    FindDistrictSessionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    HttpClientModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule,
    FormsModule,
    MatCardModule,
    MatExpansionModule,
    MatListModule,
    MatSnackBarModule,
    MatSlideToggleModule,
    MatSelectModule,
    MatButtonToggleModule,
    MatProgressSpinnerModule,
    ScrollingModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
