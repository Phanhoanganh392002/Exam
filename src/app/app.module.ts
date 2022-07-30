import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";
import {RouterModule, Routes} from "@angular/router";
import { AppComponent } from './app.component';
import {ExamComponent} from "./eaxm/exam.component";
const appRoutes: Routes = [
  {path: '', component: ExamComponent},
]


@NgModule({
  declarations: [
    AppComponent,
    ExamComponent
  ],
  imports: [
    BrowserModule,HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
