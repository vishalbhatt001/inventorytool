import { Component, OnInit, Input, Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
  <h1>
  Welcome {{name}}
  </h1>
  <h2>
  {{name.toUpperCase()}}
  </h2>
  <h3>
  {{greetUser()}}
  </h3>
  <input [id] = "myId" type="text" value="Vikky">
  <input [disabled] = "isDisabled" id = "{{myId}}" type="text" value="Vikky">
  <h2 [class] ="successClass"> Vikky </h2>
  <h2 [class.text-danger] ="hasError"> Haldwani </h2>
  <input #myValue   type ="text">
  <button (click)="logMessage(myValue.value)">Log</button>
  <input [(ngModel)]="name" type ="text">
  {{name}}
  <h2 *ngIf="displayname; then thenBlock; else elseBlock">

  What are you doing
  </h2>
  <ng-template #thenBlock>
  <h2>
    then block
    </h2>
    </ng-template>
  <ng-template #elseBlock>
<h2>
  else block
  </h2>
  </ng-template>
  <div [ngSwitch] ="color">
  <div *ngSwitchCase="'red'">You pick red color</div>
  <div *ngSwitchCase="'green'">You pick green color</div>
  <div *ngSwitchCase="'yellow'">You pick yellow color</div>
  <div *ngSwitchDefault>Pick Again</div>
  </div>

  <div *ngFor="let color of colors ;index as i;even as e">
  <h2>
  {{i}}{{e}}{{color}}
  </h2>
  </div>
  <h2>{{"Hello" + name1}}</h2>
  <button (click)="fireEvent()">Send Event</button>
  `,
  styles: [`
  .text-success {
    color : green;
  }
  .text-danger {
    color : red;
  }
  .text-special {
    font-style : italic;
  }

  
  `]
})
export class TestComponent implements OnInit {

  public name = "Meetu"
  public myId = "testId"
  public isDisabled=false
  public successClass="text-special"
  displayname = true;
  public hasError=true
  public color = "black";
  public colors = ["red","green","yellow"];
  @Output()public childEvent = new EventEmitter();
  constructor() { }
  @Input('parentData') public name1;

  ngOnInit() {
  }

  greetUser()
  {
    return "Hello Hot" + this.name 
  }
  logMessage(value)
  {
    console.log(value);

  }

  fireEvent()
  {
    this.childEvent.emit('Hey Vishal you are great');
  }
}
