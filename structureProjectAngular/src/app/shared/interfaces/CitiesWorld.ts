
import { Sys } from '../interfaces/sys';
import { Wind } from '../interfaces/wind';
import { Weather } from '../interfaces/Weather';
export interface CitiesWorld {
  id: number;
  image: string;
  main: any;
  sys: Sys[];
  uri: string;
  weather: Weather[];
  wind: Wind[];
}

