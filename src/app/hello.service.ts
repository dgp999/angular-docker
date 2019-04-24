import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable()
export class HelloService {

  url="https://1wngb2tsbb.execute-api.us-east-1.amazonaws.com/dev";
  constructor(
    public http:HttpClient) { }

  
  helloDemo(demoData) {
    console.log(demoData);
    return this.http.post(this.url, demoData);
  }
}
