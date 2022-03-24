import { Component, OnInit, Output,EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  @Output() cambio = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  noti(g){
    this.cambio.emit(g);
  };

}
