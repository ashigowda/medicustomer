import { NgModule } from '@angular/core';
import { dosagereminderListModule } from "./dosagereminder-list/dosagereminder-list.module";
import { dosagereminderEditModule } from "./dosagereminder-edit/dosagereminder-edit.module";
import { dosagereminderAddModule } from "./dosagereminder-add/dosagereminder-add.module";
import { dosagereminderDetailsModule } from "./desagereminder-details/dosagereminder-details.module";

@NgModule({
  declarations: [
 
  ],
  imports: [
      dosagereminderListModule,
      dosagereminderEditModule,
      dosagereminderAddModule,
      dosagereminderDetailsModule
  
  ],
})

export class remindersModule {}