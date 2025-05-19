import { Directive, ElementRef, HostListener, output } from '@angular/core';

@Directive({
  selector: '[clickedOutside]',
})
export class ClickOutsideDirective {
  clickedOutside = output<boolean>();

  constructor(private _elementRef: ElementRef) {}

  @HostListener('document:click', ['$event.target']) public onClick(
    targetElement: HTMLElement
  ) {
    const clickedInside =
      this._elementRef.nativeElement.contains(targetElement);
    if (!clickedInside) {
      this.clickedOutside.emit(true);
    }
  }
}
