import { Pipe, PipeTransform  } from '@angular/core';

@Pipe({
    name: 'AgePipe'
})

export class AgePipe implements PipeTransform {
    transform(value, args?) {
        let [minAge] = args;
        return value.filter(person => {
            return person.age >= minAge ;
        });
    }
}

