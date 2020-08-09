import { Directive, OnInit, ElementRef, Inject, Input } from '@angular/core';
import { JQ_TOKEN } from './jquery.service';

@Directive({
  selector: '[appModalTrigger]',
})
export class ModalTriggerDirective implements OnInit {
  private el: HTMLElement;
  // The string works as an alias for the variable name coming in
  // since the variable for this directive has no name, it is the name of
  // the directive itself.
  @Input('appModalTrigger') modalId: string;

  constructor(ref: ElementRef, @Inject(JQ_TOKEN) private $: any) {
    this.el = ref.nativeElement;
  }

  ngOnInit(): void {
    // jquery bridge
    this.el.addEventListener('click', (e) => {
      this.$(`#${this.modalId}`).modal({});
    });
  }
}
