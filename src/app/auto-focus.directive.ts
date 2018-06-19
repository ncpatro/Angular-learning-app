import { Directive, ElementRef, Renderer2, Input } from '@angular/core';

@Directive({
  selector: '[autofocus]'
})
export class AutoFocusDirective {
  @Input() autofocus: string;

  constructor(private renderer: Renderer2, private elementRef: ElementRef) { }

  ngAfterViewInit() {
    var focusInput = this.elementRef.nativeElement.querySelector('input');
    setTimeout(() => {
      this.renderer.setAttribute(focusInput, 'type', this.autofocus);
    }, 300);
  }

}
