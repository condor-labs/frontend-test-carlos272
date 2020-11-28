
import { Weather } from '../enums/Weather.enum';
import { ClassIcon } from '../enums/Icons.enum';


export class ValidationIconClass {

  constructor() { }

  validationIcon(headquartersPrincipal): void {
    switch (headquartersPrincipal.weather[0].icon) {
      case Weather.cloud:
        headquartersPrincipal.iconFontawesome = ClassIcon.cloudIcon;
        break;
      case Weather.snow:
        headquartersPrincipal.iconFontawesome = ClassIcon.snowIcon;
        break;
      case Weather.rain:
        headquartersPrincipal.iconFontawesome = ClassIcon.rainIcon;
        break;
      case Weather.haze:
        headquartersPrincipal.iconFontawesome = ClassIcon.hazeIcon;

        break;
      case Weather.hot:
        headquartersPrincipal.iconFontawesome = ClassIcon.hotIcon;

        break;
      case Weather.daySunny:
        headquartersPrincipal.iconFontawesome = ClassIcon.daySunnyIcon;

        break;
      case Weather.fog:
        headquartersPrincipal.iconFontawesome = ClassIcon.fogIcon;

        break;
      case Weather.cloudy:
        headquartersPrincipal.iconFontawesome = ClassIcon.cloudyIcon;

        break;
      case Weather.sleet:
        headquartersPrincipal.iconFontawesome = ClassIcon.sleetIcon;

        break;
      case Weather.hail:
        headquartersPrincipal.iconFontawesome = ClassIcon.hailIcon;

        break;
      case Weather.thunderstorm:
        headquartersPrincipal.iconFontawesome = ClassIcon.thunderstormIcon;

        break;
      case Weather.windy:
        headquartersPrincipal.iconFontawesome = ClassIcon.windyIcon;
        break;
      default:
        break;
    }
  }
}