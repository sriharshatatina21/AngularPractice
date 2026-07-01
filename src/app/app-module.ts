import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Practice } from './Practice/practice';
import { UserModule } from './user/user-module';

@NgModule({
  declarations: [App, Practice],
  imports: [
    BrowserModule, 
    AppRoutingModule,
    
  ],
  exports:[
    UserModule 
  ],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
