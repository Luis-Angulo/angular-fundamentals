import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CollapsibleWellComponent } from './collapsible-well/collapsible-well.component';
import { DurationPipe } from './duration.pipe';
import { SimpleModalComponent } from './simple-modal/simple-modal.component';
import { ModalTriggerDirective } from './modal-trigger.directive';

@NgModule({
  declarations: [CollapsibleWellComponent, DurationPipe, SimpleModalComponent, ModalTriggerDirective],
  imports: [CommonModule],
  exports: [CollapsibleWellComponent, SimpleModalComponent, DurationPipe, ModalTriggerDirective],
})
export class SharedModule {}
