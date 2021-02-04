import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainViewComponent } from './components/main-view/main-view.component';
import { CreateFormComponent } from './components/create-form/create-form.component';
import { WListComponent } from './components/w-list/w-list.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { WViewComponent } from './components/w-view/w-view.component';

import { EmpleadoService } from './services/empleado.service';

@NgModule({
  declarations: [
    AppComponent,
    MainViewComponent,
    CreateFormComponent,
    WListComponent,
    NavigationComponent,
    WViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    EmpleadoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
