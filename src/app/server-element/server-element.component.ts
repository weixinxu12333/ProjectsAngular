import {
  Component, Input, OnInit, ViewEncapsulation, SimpleChanges, OnChanges, DoCheck, AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  ViewChild,
  ElementRef,
  ContentChild
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ServerElementComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked,AfterViewInit, 
AfterViewChecked, OnDestroy {
  @Input('srvElement') element: {
    type: string,
    name: string,
    content: string
  };

  @Input() name: string;
  @ViewChild('heading', {static:true}) header: ElementRef;
  @ContentChild('contentParagraph',{static: true}) paragraph:ElementRef;

  constructor() {
    console.log('constructor called');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngonchanges called');
    console.log(changes);
  }

  ngOnInit(): void {
    console.log('ngionnit called');
    console.log('text content: ' + this.header.nativeElement.textContent);
    console.log('text content of paragraph' + this.paragraph.nativeElement.textContent);
  }

  ngDoCheck() {
    console.log('ngdocheck called');
  }

  ngAfterContentInit() {
    console.log('ngafetercontent called');
    console.log('text content of paragraph' + this.paragraph.nativeElement.textContent);
  }

  ngAfterContentChecked() {
    console.log('ngaftercontentchecked called');
  }

  ngAfterViewInit() {
    console.log('ng afeter view init called');
    console.log('text content: ' + this.header.nativeElement.textContent);
  }

  ngAfterViewChecked() {
    console.log('ng afeter view checked called');
  }

  ngOnDestroy(){
    console.log('ng on destroy called');
    
  }
}
