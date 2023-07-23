import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
  @Input() myValue='Mudassir'

  constructor() { 
    console.log('constructor called');
    
  }

  ngOnChanges(){
    console.log('ngOnChanges called',this.myValue);
    
  }
  ngOnInit(): void {
    console.log('ngOnInit called');
    
  }
  ngDoCheck(){
console.log('ngDoCheck called');

  }
  ngAfterContentInit(){
    console.log('ngAfterContentInit called');
    
  }
  ngAfterViewInit(){
    console.log('ngAfterViewInit called');
    
  }
  ngAfterViewChecked(){
    console.log('ngAfterViewChecked called');
    
  }
  ngOnDestroy(){
    console.log('ngOnDestroy called');
    
  }

}
