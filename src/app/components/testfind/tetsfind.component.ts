import {Component, OnInit} from "@angular/core";
import {RestConnectorService} from "../rest-connector/rest-connector.service";


@Component({
  selector: 'test-find-component',
  templateUrl: 'testfind.component.html'
})

export class TetsfindComponent implements OnInit {
  //inf1: Object[];
  inf1: any
  constructor(private restConnectorService: RestConnectorService) {
  }

  ngOnInit(): void {
    this.restConnectorService.getRest().subscribe((data:any) => {
      console.log(data);
      this.inf1 = data;
    })
  }

  // submitForm



}
