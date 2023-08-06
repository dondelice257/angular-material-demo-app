import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatAutocompleteModule} from '@angular/material/autocomplete'; 
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MaterialComponent } from './material.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations:[MaterialComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MatSlideToggleModule,
    MatAutocompleteModule,
    MatInputModule,
    MatFormFieldModule,

    
  ],
  exports:[MaterialComponent]

})
export class MaterialModule { }
