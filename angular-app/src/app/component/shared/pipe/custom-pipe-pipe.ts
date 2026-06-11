import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customPipe',
  //needed to be usabled through the whole app
  standalone: true,
})
export class CustomPipePipe implements PipeTransform {
  transform(value: string | number | null | undefined): string | null {
    if (value) {
      return value + ' customized';
    }
    return null;
  }
}
