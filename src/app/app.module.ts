import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { routes } from './app.routes';
import { NgxEchartsModule } from 'ngx-echarts';
import * as echarts from 'echarts/core';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule, 
    RouterModule.forRoot(routes),
    NgxEchartsModule.forRoot({ echarts: () => import('echarts'), })
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}   