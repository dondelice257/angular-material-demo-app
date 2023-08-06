import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-material',
  templateUrl: './material.component.html',
  styleUrls: ['./material.component.css']
})
export class MaterialComponent implements OnInit {

  myControl = new FormControl('');
  options: string[] = ['One', 'Two', 'Three', 'four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'ten'];

  constructor() { }

  ngOnInit() {
  }
  hidden = true;

  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
  }

}
