import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ex42',
  templateUrl: './ex42.component.html',
  styleUrls: ['./ex42.component.css']
})
export class Ex42Component implements OnInit {
  showSecret = false;
  log = [];

  constructor() { }

  ngOnInit(): void {
  }

  onToogleDetails(){
    this.showSecret = !this.showSecret;
    // this.log.push(this.log.length +1);
    this.log.push(new Date());
  }
}
