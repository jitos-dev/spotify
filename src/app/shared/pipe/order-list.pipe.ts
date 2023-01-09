import { Pipe, PipeTransform } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';

@Pipe({
  name: 'orderList'
})

export class OrderListPipe implements PipeTransform {

  transform(items: Array<TrackModel>, orderby: string | null = null, sort: string = 'asc'): Array<TrackModel> {

    try {

      if (orderby === null) {
        return items;
      }

      //Si no es null los ordenamos en función del parámetro que nos pasen
      const tempList = items.sort(function (a, b) {

        if (a[orderby] > b[orderby]) {
          return 1;
        }
        if (a[orderby] < b[orderby]) {
          return -1;
        }
        // a must be equal to b
        return 0;
      });

      return (sort === 'asc') ? tempList : tempList.reverse();

    } catch (e) {
      console.log('Algo paso en sort', e);
      return items;
    }

  }

}
