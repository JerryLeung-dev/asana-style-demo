import { Directive, TemplateRef } from '@angular/core';

export interface SelectedOptionTemplateContext {
  selectedItem: string
}
@Directive({
  selector: '[appSelectedOptionTemplate]'
})
export class SelectedOptionTemplateDirective {

  constructor(public templateRef: TemplateRef<unknown>) { }
/**
   * Asserts the correct type of the context for the template that {@link SelectedOptionTemplateDirective} will render.
   *
   * The presence of this method is a signal to the Ivy template type-check compiler that the
   * {@link SelectedOptionTemplateDirective} structural directive renders its template with a specific context type.
   */
 static ngTemplateContextGuard(
  _dir: SelectedOptionTemplateDirective,
  ctx: unknown
): ctx is SelectedOptionTemplateContext {
  return true;
}
}
