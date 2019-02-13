import { NgModule } from '@angular/core';
import { ProfileModule } from "./profile/profile.module";
import { ProfileEditModule } from "./profile-edit/profile-edit.module";
import { EditAddressModule } from "./edit-address/edit-address.module";
import { ManageAddressModule } from "./manage-address/manage-address.module";
import { ManagePatientModule } from "./manage-patient/manage-patient.module";
import { PatientAddModule } from "./add-patient/add-patient.module";
import { ProfileAddressAddModule } from "./profile-address-add/profile-address-add.module";
import { ProfileViewModule } from "./profile-view/profile-view.module";

@NgModule({
    declarations: [
    ],
    imports: [
   ProfileModule,ProfileEditModule,EditAddressModule,ManageAddressModule,ManagePatientModule,PatientAddModule,ProfileAddressAddModule,ProfileViewModule
    ],
})

export class ProfileSettingModule { }