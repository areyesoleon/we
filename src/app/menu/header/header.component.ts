import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() nameCompany:string;
  private _show: any;
  constructor() { }

  ngOnInit() {
    this.nameCompany = this.nameCompany || 'Name of Company';
  }

  changeShowMenu(){
    this._show.show = !this._show.show;
  }

  @Input() set menu(value){
    this._show = value;
  }

}
