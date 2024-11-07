import { Component, ViewEncapsulation } from '@angular/core';
import { ViewProvider } from '../classes/view-provider';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [ChildComponent],
  templateUrl: './test.component.html',
  styleUrl: './test.component.scss',
  viewProviders:[ViewProvider],
  // encapsulation:ViewEncapsulation.None

  // encapsulation: ViewEncapsulation.ShadowDom
})
export class TestComponent {
  cdata:any
  constructor(private vp: ViewProvider){
    vp.show()
  }

  getChildData(data:any){
    console.log('parent data',data)
    this.cdata = data;
  }

}
