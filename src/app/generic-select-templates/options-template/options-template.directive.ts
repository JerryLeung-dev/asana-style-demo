import { Directive, TemplateRef } from '@angular/core';
import { SelectListItem } from '../../../assets/ViewModel';

export interface OptionsTemplateContext {
  item: SelectListItem;
}

@Directive({
  selector: '[appOptionsTemplate]',
})
export class OptionsTemplateDirective {
  constructor(public templateRef: TemplateRef<unknown>) {}

  /**
   * Asserts the correct type of the context for the template that {@link OptionsTemplateDirective} will render.
   *
   * The presence of this method is a signal to the Ivy template type-check compiler that the
   * {@link OptionsTemplateDirective} structural directive renders its template with a specific context type.
   */
  static ngTemplateContextGuard(
    _dir: OptionsTemplateDirective,
    ctx: unknown
  ): ctx is OptionsTemplateContext {
    return true;
  }
}
