import { ArtistModel } from './artist.model';

export interface TrackModel {
  _id: string | number
  name: string
  album: string
  cover: string
  //duration: number
  url: string | number
  //A esta propiedad de indicamos que es opcional con la interrogación
  artist?: ArtistModel

}