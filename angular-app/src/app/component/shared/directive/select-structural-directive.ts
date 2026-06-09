import { Directive, inject, input, TemplateRef, ViewContainerRef } from '@angular/core';
import { DataSource } from '../model/Types';

//A structural directive allows to add dynamically an element in the DOM.
@Directive({
  selector: '[appSelect]',
})
export class SelectStructuralDirective {
  private templateRef = inject(TemplateRef);
  private viewContainerRef = inject(ViewContainerRef);

  selectFrom = input<DataSource<unknown> | null>(
    null,
    //little hack to allow to use directives outside a ng-template name is selector+input_name
    {
      alias: 'appSelectSelectFrom',
    },
  );

  async ngOnInit() {
    const data = await this.selectFrom()?.load();
    if (data !== null && data !== undefined) {
      this.viewContainerRef.createEmbeddedView(this.templateRef, {
        // Create the embedded view with a context object that contains
        // the data via the key `$implicit`.
        $implicit: data,
      });
    }
  }
}
