import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-component',
  templateUrl: './card-component.component.html',
  styleUrls: ['./card-component.component.scss']
})
export class CardComponentComponent implements OnInit {
  @Input() model:any;
//   model = {
//     title: "ABC Hospital",
//     subtitle: "ABC Hospital",
//     slots: [],
//     vaccine: "ABC",
//     fee: 0,
//     date: "date",
//     min_age_limit: 45,
//     available_capacity: 85,
//     fee_type: "Free",
//     name: "NAME",
//     state_name: "KTAKA",
//     district_name:"BLORE",
//     center_id:	418555,
// block_name	:"East",
// pincode:	560032,
// from	:"09:00:00",
// to	:"18:00:00",
// lat	:13,
// long	:77,
// }

  ngOnInit(): void {
  }

}
