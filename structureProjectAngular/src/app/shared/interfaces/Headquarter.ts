import { Sys } from '../interfaces/sys';
import { Wind } from '../interfaces/wind';
import { Weather } from '../interfaces/Weather';
export interface Headquarter {
  date: string;
  description: string;
  id: number;
  image: string;
  main: any;
  main_headquarter: boolean;
  name: string;
  sys: Sys[];
  weather: Weather[];
  wind: Wind;
  iconFontawesome?: string;
  tempCelcius?: number;
}
