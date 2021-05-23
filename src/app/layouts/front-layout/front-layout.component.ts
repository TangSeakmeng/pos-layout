import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-front-layout',
  templateUrl: './front-layout.component.html',
  styleUrls: ['./front-layout.component.scss']
})
export class FrontLayoutComponent implements OnInit {

  isDialogShow: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  showDialog() {
    this.isDialogShow = !this.isDialogShow;
  }

}
