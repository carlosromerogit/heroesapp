import { Pipe, PipeTransform } from '@angular/core';
import { Hero } from '../interfaces/hero.interface';

@Pipe({
  name: 'image'
})
export class ImagePipe implements PipeTransform {

  transform(hero: Hero): string {

    if(hero.id?.includes('dc-') || hero.id?.includes('marvel-')){
      return `../../../../assets/${hero.id}.jpg`;

    }
    return '';
  }

}
