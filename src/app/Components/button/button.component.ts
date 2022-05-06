import { Component, Input, OnInit , Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  @Input() Text:string="";

  @Output() Clicked=new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  clicked(){

    this.Clicked.emit();
  }
}
