import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef} from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output('') serverCreated = new EventEmitter<{ serverName: string, serverContent: string }>();
  @Output('bpCreated') blueprintCreated = new EventEmitter<{ serverName: string, serverContent: string }>();
  // newServerName = '';
  // newServerContent = '';
  @ViewChild('serverContentInput') serverContentInput: ElementRef;

  onAddServer(nameInput: HTMLInputElement) {
    this.serverCreated.emit({
      // serverName: this.newServerName,
      // serverContent: this.newServerContent

      serverName: nameInput.value,
      serverContent: this.serverContentInput.nativeElement.value
    });
  }

  onAddBlueprint(nameInput: HTMLInputElement) {
    this.serverCreated.emit({
      // serverName: this.newServerName,
      // serverContent: this.newServerContent

      serverName: nameInput.value,
      serverContent: this.serverContentInput.nativeElement.value
    });
  }

  constructor() { 
    
  }

  ngOnInit(){

  }
}
