import { Component, OnInit} from '@angular/core';


@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  fullName = "";
  address = "";
  phoneNumber = 0;
  position = 0;

  constructor() { }

  ngOnInit() {
  }

}
