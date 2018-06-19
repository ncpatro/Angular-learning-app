import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'repoLanguage'
})
export class RepoLanguagePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (value) {
      return value;
    } else {
      return 'NA'
    }
  }

}
