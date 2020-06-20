import { Injectable, ElementRef } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NgpService {

  LightboxElement: ElementRef;

  constructor() { }

  public toString = () : string => {
    return `NpgSVN (${this.LightboxElement})`;
}
}
