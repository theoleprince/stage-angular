import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.scss']
})
export class ColorComponent implements OnInit {
  color: string = "orange";
  colors: string = "yellow";

  constructor() { }

  ngOnInit(): void {
  }

  changeColor(input: any) {
    console.log(input.value);
    this.color = input.value;
    input.value = '';
  }

  data = [
    { name: "theo", prenom: "jean", date: "2020-12-12" },
    { name: "paul", prenom: "jean", date: "2020-12-12" },
    { name: "piere", prenom: "jean", date: "2020-12-12" },
    { name: "hermann", prenom: "jean", date: "2020-12-12" },
    { name: "junie", prenom: "jean", date: "2020-12-12" },
  ]

}
