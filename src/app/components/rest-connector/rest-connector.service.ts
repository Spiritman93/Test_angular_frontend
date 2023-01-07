import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Law} from "../Model/Law";



@Injectable({
  providedIn: 'root'
})

export class RestConnectorService {

  constructor(private httpClient: HttpClient) {
  }

  public getRest() {
    return this.httpClient.get("http://localhost:8081/testfind")
  }

  public getRestTest() {
    return this.httpClient.get("http://localhost:8081/testlawpage")
  }

  public postRest(componentLaw: Law){
    return this.httpClient.post('http://localhost:8081/testpost', componentLaw)
  }



}
