import {Directive, ElementRef, Renderer,HostListener } from '@angular/core';

@Directive({ selector: '[myBig]' })

export class HiddenDirective {
    constructor(private elementRef: ElementRef, private renderer: Renderer) {
        renderer.setElementStyle(elementRef.nativeElement, 'fontSize' , '20px');
    }
    @HostListener('mouseover') onMouseOver() {
        this.elementRef.nativeElement.style.fontSize = '50px';
    }
    @HostListener('mouseout') onmouseleave() {
        this.elementRef.nativeElement.style.fontSize = '20px';
    }
}