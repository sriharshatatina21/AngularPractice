import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'smartpipe',
  standalone: false,
})
export class SmartpipePipe implements PipeTransform {
  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }
}
