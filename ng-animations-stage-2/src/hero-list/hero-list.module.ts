import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { HeroListComponent } from './hero-list.component';
import { HeroComponent } from './hero/hero.component';

@NgModule({
  imports: [CommonModule],
  providers: [],
  declarations: [HeroListComponent, HeroComponent],
  exports: [HeroListComponent, HeroComponent]
})
export class HeroListModule {}
