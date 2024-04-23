import { NgModule, Self } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyComponent } from './lazy/lazy.component';
import { LoggerService } from '../logger.service';



@NgModule({
  declarations: [
    LazyComponent
  ],
  imports: [
    CommonModule
  ]
})
export class LazyLoadModule { 
  // constructor( private logger: LoggerService){
  //   this.logger.log('Lazy module')
  // }
}
