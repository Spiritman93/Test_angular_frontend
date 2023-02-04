import {Component, OnInit} from "@angular/core";
import {RestConnectorService} from "../rest-connector/rest-connector.service";
import {FormBuilder} from "@angular/forms";


@Component({
  selector: 'test-find-component',
  templateUrl: 'testfind.component.html'
})

export class TetsfindComponent implements OnInit {
  //inf1: Object[];
  inf1: any
  constructor(private restConnectorService: RestConnectorService, private formPost: FormBuilder) {
  }

  addForm = this.formPost.group({
    lawName: '',
    lawType: '',
    lawNumber: ''
  });

  ngOnInit(): void {
    this.restConnectorService.getAll().subscribe((data:any) => {
      console.log(data);
      this.inf1 = data;
    })
  }

  postData() {
    this.inf1=this.addForm.value;
    this.restConnectorService.postLaw(this.inf1);
    console.log("postRest" + JSON.stringify(this.addForm))
  }

}
