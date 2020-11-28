import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  private URL_Test: string;
  constructor() { }
  getUrlAdmin(): string {
    return this.URL_Test;
  }
  setUrlAdmin(url: string) {
    this.URL_Test = url;
  }

}
