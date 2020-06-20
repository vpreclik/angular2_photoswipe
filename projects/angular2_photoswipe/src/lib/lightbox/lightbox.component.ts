import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { NgpService } from '../ngp.service';

@Component({
  selector: 'ngp-lightbox',
  templateUrl: './lightbox.component.html',
  styleUrls: ['./lightbox.component.scss']
})
export class LightboxComponent implements AfterViewInit {

  @ViewChild('ngpLightbox') el: ElementRef;

  constructor(private ngp: NgpService) {}

  ngAfterViewInit() {
    this.ngp.LightboxElement = this.el;
  }

}
