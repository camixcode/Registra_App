import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'registrar'
})
export class RegistrarPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
