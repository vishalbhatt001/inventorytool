import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { ServicedetailComponent } from './servicedetail/servicedetail.component';
import { Ng2DropdownModule } from 'ng2-material-dropdown';
import {  
  MatButtonModule,  
  MatMenuModule,  
  MatToolbarModule,  
  MatIconModule,  
  MatCardModule,  
  MatFormFieldModule,  
  MatInputModule,  
  MatDatepickerModule,  
  MatDatepicker,  
  MatNativeDateModule,  
  MatRadioModule,  
  MatSelectModule,  
  MatOptionModule,  
  MatTableModule,
  MatSlideToggleModule,ErrorStateMatcher,ShowOnDirtyErrorStateMatcher  
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogComponent } from './dialog/dialog.component';
import { ProjectViewComponent } from './project-view/project-view.component';    
const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'service_detail', component: ServicedetailComponent },
  { path: '',   redirectTo: '/login', pathMatch: 'full' },
  
];
@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    LoginComponent,
    ServicedetailComponent,
    DialogComponent,
    ProjectViewComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    Ng2DropdownModule,
    MatButtonModule,  
    MatMenuModule,
    MatTableModule,  
    MatToolbarModule,  
    MatIconModule,  
    MatCardModule,  
    BrowserAnimationsModule,  
    MatFormFieldModule,  
    MatInputModule,  
    MatDatepickerModule,  
    MatNativeDateModule,  
    MatRadioModule,  
    MatSelectModule,  
    MatOptionModule,  
    MatSlideToggleModule  ,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
    
  ],
  exports: [  
    MatButtonModule,  
    MatMenuModule,  
    MatToolbarModule,  
    MatIconModule,  
    MatCardModule,  
    BrowserAnimationsModule,  
    MatFormFieldModule,  
    MatInputModule,  
    MatDatepickerModule,  
    MatNativeDateModule,  
    MatRadioModule,  
    MatSelectModule,  
    MatOptionModule,  
    MatSlideToggleModule,MatTableModule  
  ],  
  providers: [{provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher}  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
