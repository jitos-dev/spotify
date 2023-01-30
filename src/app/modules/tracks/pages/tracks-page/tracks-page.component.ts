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
    const obserser1$ = this.trackService.getAllTracks$()
      .subscribe(response => {
        this.mockTrackList = response.data
      });

    this.listObservers$ = [obserser1$]
  }

  ngOnInit() {
    //se puede hacer de las dos formas y es lo mismo
    //const { data }: any = (dataRaw as any).default
    //const data: any = dataRaw.data
    //this.mockTrackList = dataRaw.data
  }

  ngOnDestroy(): void {
    this.listObservers$.forEach(subscription => subscription.unsubscribe())
  }

}
