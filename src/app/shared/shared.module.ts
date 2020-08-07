import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CollapsibleWellComponent } from './collapsible-well/collapsible-well.component';
import { DurationPipe } from './duration.pipe';

@NgModule({
  declarations: [CollapsibleWellComponent, DurationPipe],
  imports: [CommonModule],
  exports: [CollapsibleWellComponent, DurationPipe],
})
export class SharedModule {}
