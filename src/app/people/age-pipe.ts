import { Pipe, PipeTransform } from '@angular/core';
import { Person } from '../classes/person';

@Pipe({
  name: 'age',
  standalone: false,
})
export class AgePipe implements PipeTransform {
  transform(value: Person): number {
    const currentDate = new Date(Date.now());
    console.log('calculateAge pipe')
    return currentDate.getFullYear() - value.dateOfBirth.getFullYear();
  }
}
