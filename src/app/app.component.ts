import { Component, ViewChild, ElementRef  } from '@angular/core';
import { HelloService } from './hello.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app';
  name:any;
  @ViewChild('inputData') inputData:ElementRef;

  constructor(public hel:HelloService){

  }

  test(){
    this.hel.helloDemo({
      name:this.inputData.nativeElement.value
    }).subscribe((res: any) => {
       console.log(res);
       this.name=res;
       console.log(this.name)
    }, (err: any) => {
       console.log(err);
    })
  }

}

