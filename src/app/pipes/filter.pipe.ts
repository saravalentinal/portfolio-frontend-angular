import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterByCategoryId'
})
export class FilterByCategoryIdPipe implements PipeTransform {
  transform(items: any[], categoryId: number): any[] {
    if (!items) {
      return [];
    }
    if (!categoryId) {
      return items;
    }
    return items.filter(item => item.categorie.id === categoryId);
  }
}
