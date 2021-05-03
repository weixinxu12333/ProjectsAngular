import { Directive, ElementRef, OnInit } from "@angular/core";

@Directive({
    selector: '[appBasiHighlight]'
})
export class BasicHightlightDirective implements OnInit{
    constructor(private elementRef: ElementRef){
        
    }

    ngOnInit(): void {
        this.elementRef.nativeElement.style.backgroundColor = 'green';
    }

    
}