import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";


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

}
