import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Law} from "../Model/Law";



@Injectable({
  providedIn: 'root'
})

export class RestConnectorService {

  constructor(private httpClient: HttpClient) {
  }

  public getAll() {
    return this.httpClient.get("http://localhost:8081/findAllLaws")
  }

  /*public getRestTest() {
    return this.httpClient.get("http://localhost:8081/testlawpage")
  }
*/

  public postLaw(componentLaw: Law){
    return this.httpClient.post('http://localhost:8081/testpost', componentLaw)
  }



}
