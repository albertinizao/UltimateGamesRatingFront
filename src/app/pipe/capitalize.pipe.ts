import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'capitalizeFirst'})
export class CapitalizePipe implements PipeTransform {
  transform(value: string, args: string[]): any {
    if (!value) return value;
    return value.charAt(0).toUpperCase() + value.substr(1);
  }
}
