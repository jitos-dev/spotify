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

    const obserser1$ = this.trackService.getAllTracks$()
      .subscribe(response => {
        this.mockTrackList = response
      });

    //this.listObservers$ = [obserser1$]
  }

  ngOnDestroy(): void {
    /*Como el Observable es de tipo HttpClient no hace falta que nos desubscribamos porque
    angular ya sabe que cuando se destruya el componente tiene que desubscribirse*/
    //this.listObservers$.forEach(subscription => subscription.unsubscribe())
  }

}
