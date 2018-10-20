import { Injectable } from '@angular/core';

@Injectable()
export class ValidatorsService {

  constructor() { }

  static emailValidators(control: any) {
    // tslint:disable-next-line:max-line-length
    if (control.value && control.value.match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)) {
      return null;
    } else {
      return { 'Invalid email Address': true };
    }
  }
}
