import { NgModule } from '@angular/core';

import {
  MatAutocompleteModule,
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatCommonModule,
  MatDialogModule,
  MatFormFieldModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatMenuModule,
  MatProgressBarModule,
  MatSelectModule,
  MatSidenavModule,
  MatSnackBarModule,
  MatToolbarModule,
  MatChipsModule
} from '@angular/material';


@NgModule({
  imports: [
    MatCommonModule,
    MatAutocompleteModule, MatButtonModule, MatCardModule, MatCheckboxModule,
    MatCommonModule, MatDialogModule, MatFormFieldModule, MatGridListModule,
    MatIconModule, MatInputModule, MatMenuModule, MatProgressBarModule,
    MatSelectModule, MatSidenavModule, MatSnackBarModule, MatToolbarModule, MatChipsModule
  ],
  exports: [
    MatAutocompleteModule, MatButtonModule, MatCardModule, MatCheckboxModule,
    MatCommonModule, MatDialogModule, MatFormFieldModule, MatGridListModule,
    MatIconModule, MatInputModule, MatMenuModule, MatProgressBarModule,
    MatSelectModule, MatSidenavModule, MatSnackBarModule, MatToolbarModule, MatChipsModule
  ]
})
export class MaterialImportModule {
}
