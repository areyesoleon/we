import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  private _menu: any;
  constructor() { }

  ngOnInit() {
  }

  @Input() set menu(value) {
    this._menu = value;
  }

  get menu(){
    return this._menu;
  }

}
