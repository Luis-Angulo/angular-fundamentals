import {
  Component,
  OnInit,
  Input,
  ViewChild,
  ElementRef,
  Inject,
} from '@angular/core';
import { JQ_TOKEN } from '../jquery.service';

@Component({
  selector: 'app-simple-modal',
  templateUrl: './simple-modal.component.html',
  styleUrls: ['./simple-modal.component.css'],
})
export class SimpleModalComponent implements OnInit {
  @Input() title: string;
  @Input() elementId: string;
  // requires an Angular2 local ref variable
  // this is provided in the template via reference variable
  // works analogous to injecting an element ref in the constructor
  @ViewChild('modalcontainer') containerElement: ElementRef;

  constructor(@Inject(JQ_TOKEN) private $: any) {}

  ngOnInit(): void {}

  closeModal(): void {
    this.$(this.containerElement.nativeElement).modal('hide');
  }
}
