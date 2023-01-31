import { Component, OnInit, OnDestroy } from '@angular/core';
import { TrackService } from '../../services/track.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-tracks-page',
  templateUrl: './tracks-page.component.html',
  styleUrls: ['./tracks-page.component.css']
})
export class TracksPageComponent implements OnInit, OnDestroy {

  mockTrackList = []
  listObservers$: Array<Subscription> = []

  constructor(private trackService: TrackService) {

  }

  ngOnInit() {
    //se puede hacer de las dos formas y es lo mismo
    //const { data }: any = (dataRaw as any).default
    //const data: any = dataRaw.data
    //this.mockTrackList = dataRaw.data

    this.loadAllData();
  }

  ngOnDestroy(): void {
    /*Como el Observable es de tipo HttpClient no hace falta que nos desubscribamos porque
    angular ya sabe que cuando se destruya el componente tiene que desubscribirse*/
    //this.listObservers$.forEach(subscription => subscription.unsubscribe())
  }

  private loadAllData2(): void {
    const obserser1$ = this.trackService.getAllTracks$()
      .subscribe(response => {
        this.mockTrackList = response
      }, err => {
        console.log('Error charge the data------>', err);
      });

    //this.listObservers$ = [obserser1$]
  }

  /*Esta es otra forma de cargar las canciones pero con una función asíncrona y las tratamos como
  una promesa y de forma asyncrona. Ya depende de lo que queramos y lo que necesitemos*/
  private async loadAllData(): Promise<any> {
    const obserser1$ = await this.trackService.getAllTracks$().toPromise()
      .then(res => { this.mockTrackList = res })
    //.catch(err => { console.log('Error charge the data in page------>', err) }) Ahora los errores los controlamos en el servicio
    //this.listObservers$ = [obserser1$]
  }
}
