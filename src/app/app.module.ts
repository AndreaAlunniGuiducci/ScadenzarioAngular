// import { AngularFireModule } from '@angular/fire/compat';
// import { AngularFireAuthModule } from '@angular/fire/compat/auth';
// import { AngularFireStorageModule } from '@angular/fire/compat/storage';
// import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
// import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
// import { environment } from '../environments/environment';
// import { Component, NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
// import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
// import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './app.component';
// import { InputComponent } from './home/input/input.component';
// import { CardItemComponent } from './home/card-item/card-item.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
// import { AuthService } from './shared/service/auth.service';
import { SignupComponent } from './signin/signin.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
];
// @NgModule({
//   declarations: [
//     AppComponent,
//     InputComponent,
//     CardItemComponent,
//     LoginComponent,
//     HomeComponent,
//     SignupComponent,
//   ],
//   imports: [
//     AngularFireModule.initializeApp(environment.firebase),
//     AngularFireAuthModule,
//     AngularFirestoreModule,
//     AngularFireStorageModule,
//     AngularFireDatabaseModule,
//     BrowserModule,
//     AppRoutingModule,
//     FormsModule,
//     RouterModule.forRoot(appRoutes),
//   ],
//   providers: [AuthService],
//   bootstrap: [AppComponent],
// })
export class AppModule {}
