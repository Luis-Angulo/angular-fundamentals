import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CollapsibleWellComponent } from './collapsible-well/collapsible-well.component';

@NgModule({
  declarations: [CollapsibleWellComponent],
  imports: [CommonModule],
  exports: [CollapsibleWellComponent],
})
export class SharedModule {}
