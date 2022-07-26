import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { MultilevelRoutingModule } from "./multilevel-routing.module";
import { Second1Component } from "./secondlevel/second1/second1.component";
import { Second2Component } from "./secondlevel/second2/second2.component";
import { First1Component } from "./first1/first1.component";
import { First2Component } from "./first2/first2.component";
import { First3Component } from "./first3/first3.component";
import { ComponentsModule } from "../shared/components/components.module";
import { MatStepperModule } from "@angular/material/stepper";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { MatSelectModule } from "@angular/material/select";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { NzTimePickerModule } from "ng-zorro-antd/time-picker";
import { NzCollapseModule } from "ng-zorro-antd/collapse";

@NgModule({
    declarations: [
        Second1Component,
        Second2Component,
        First1Component,
        First2Component,
        First3Component,
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        MultilevelRoutingModule,
        ComponentsModule,
        MatStepperModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatSelectModule,
        MatDatepickerModule,
        NzTimePickerModule,
        NzCollapseModule,
    ],
})
export class MultilevelModule {}
