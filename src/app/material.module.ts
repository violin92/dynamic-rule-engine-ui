import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import {MatList, MatListItem, MatListModule} from '@angular/material/list';
import { MatTooltipModule } from '@angular/material/tooltip';
import {MatFormFieldModule} from "@angular/material/form-field";
import { FormsModule } from '@angular/forms';
import {MatInputModule} from "@angular/material/input";
import {MatTableModule} from "@angular/material/table"; // Import FormsModule

@NgModule({
    imports: [
        MatButtonModule,
        MatToolbarModule,
        MatIconModule,
        MatListModule,
        MatTooltipModule,
        MatFormFieldModule,
        FormsModule,
        MatInputModule,
        MatListItem // Include other necessary Angular Material modules
    ],
    exports: [
        MatButtonModule,
        MatToolbarModule,
        MatIconModule,
        MatListModule,
        MatTooltipModule,
        MatFormFieldModule,
        FormsModule,
        MatInputModule,
        MatListItem,
        MatTableModule
    ]
})
export class MaterialModule { }
