import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';


@Injectable()
export class LoggerService {
  enabled = true;
  noop = () => { };

  constructor() {
    // You can do a check on your environment or some other flag to
    // enable/disable logging
    if (environment.production) { this.enabled = false; }
  }

  get debug() {
    if (this.enabled) { return console.debug.bind(console); }
    return this.noop;
  }

  get error() {
    if (this.enabled) { return console.error.bind(console); }
    return this.noop;
  }

  get log() {
    if (this.enabled) { return console.log.bind(console); }
    return this.noop;
  }

  get info() {
    if (this.enabled) { return console.info.bind(console); }
    return this.noop;
  }

  get warn() {
    if (this.enabled) { return console.warn.bind(console); }
    return this.noop;
  }

}
