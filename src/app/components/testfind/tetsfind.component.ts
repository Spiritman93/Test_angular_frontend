import {Component, OnInit} from "@angular/core";
import {RestConnectorService} from "../rest-connector/rest-connector.service";
import {FormBuilder, FormGroup} from "@angular/forms";


@Component({
  selector: 'test-find-component',
  templateUrl: 'testfind.component.html'
})

export class TetsfindComponent implements OnInit {
  //inf1: Object[];
  inf1: any
  constructor(private restConnectorService: RestConnectorService, private formPost: FormBuilder) {
  }

  form = this.formPost.group({
    lawName: '',
    lawType: '',
    lawNumber: ''
  });

  ngOnInit(): void {
    this.restConnectorService.getRest().subscribe((data:any) => {
      console.log(data);
      this.inf1 = data;
    })
  }

  postData() {
    this.inf1=this.form.value;
    this.restConnectorService.postRest(this.inf1);
    console.log("postRest" + JSON.stringify(this.form))
  }

}
