import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  public categories:string[]=['business','entertainment','general','health','science','sports','technology'];
  public selectedCategory:string=this.categories[1];

  constructor() {}

  segmentChanged(category:any){

  }

}
