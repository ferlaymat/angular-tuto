import { Directive, ElementRef, inject } from '@angular/core';

//An attribute directive allows to modify an element existing in DOM by its name, class or attribut
@Directive({
  selector: '[appHighlightAttributeDirective]',
})
export class HighlightAttributeDirective {
  private elt: ElementRef<HTMLElement> = inject(ElementRef<HTMLElement>);
  constructor() {
    this.elt.nativeElement.style.backgroundColor = 'yellow';
  }
}
