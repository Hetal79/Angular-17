import { Component,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss',
  // inputs:['pdata'],
  outputs:['event']
})
export class ChildComponent {
  pdata:any
  // event:new EventEmitter();
  event:any
  constructor(){
    this.event = new EventEmitter()
  }
  ngOnInit(){
   
    console.log('pdata',this.pdata)
  }
  sendData(value:any){
    console.log('child value',value),
    this.event.emit(value);
  }
}
