import { Component, OnInit } from '@angular/core';
declare var $ :any;

@Component({
  selector: 'app-buycoins',
  templateUrl: './buycoins.component.html',
  styleUrls: ['./buycoins.component.css']
})
export class BuycoinsComponent implements OnInit {
  dtOptions: DataTables.Settings = {};

  constructor() { }

  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 2
    };
    $(document).ready(function () {
      $(".dataTables_wrapper").css('width','100%');
    });
  }

}
