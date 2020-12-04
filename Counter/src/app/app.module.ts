import { BrowserModule } from '@angular/platform-browser';
import { Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { CounterComponent } from './counter/counter.component';




@NgModule({
  declarations: [
    CounterComponent,
  ],
  imports: [
    BrowserModule,


  ],
  providers: [],
  entryComponents: [CounterComponent]
})
export class AppModule {
  constructor(injector: Injector) {
    const counter = createCustomElement(CounterComponent, { injector });
    customElements.define('custom-counter', counter);
  }

  ngDoBootstrap() {

  }
}

