import { Component, OnInit,Output,EventEmitter,Input } from '@angular/core';
import { getLocaleFirstDayOfWeek } from '@angular/common';
import { EmployeelistService } from '../employeelist.service';


@Component({
  selector: 'app-test',
  template: ` <h1> this is the firest component</h1>
   <p>
   hello 
   {{name}} 
   {{2+2}} 
   {{"good"+"bad"}}
   </p>
    <h2 [style.color]="gcolor"> red</h2> 
    <button (click)='onClick()'>button1</button> 
    
    
    
    <button (click)='greetings="hello."'>button2</button> 
     {{greetings}}
     <input [(ngModel)]="namel" type="text"> {{namel}}
     <br>
     <button (click)='fireEvent()'> send2parent</button>
     <h2>"hello" {{namej}} </h2>

     <h2> service is checking==  {{servicecheck}} </h2>
     <h2>{{10000|currency:'INR'}}</h2>

     <h2>employee list</h2>
     
     <ul *ngFor= "let employeees of empll">
     <li>{{employeees.name}}</li>
     </ul>
     {{errormsg}}
     
     `,
  styles: []
})
export class TestComponent implements OnInit {

  public name="goodboy";
  public gcolor="red";
  public namel="";
  public greetings="jngu";
  public ulu="";

  public servicecheck="";
  public empll=[];
  public errormsg;

  @Input('parentData') public namej; 
  @Output() public childEvent =new EventEmitter();


  constructor(private emp:EmployeelistService) { }

  ngOnInit() {

    this.servicecheck=this.emp.getemployeep();
    this.emp.getad().subscribe(data=>this.empll=data,error=>this.errormsg=error);
  }
  public onClick()
  {
    document.write("key pressed");
    console.log("$event");
  }

  public fireEvent()
  {
    this.childEvent.emit("hello i am prakhar!");
    console.log('$event');
  }

}
