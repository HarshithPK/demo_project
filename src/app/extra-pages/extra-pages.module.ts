import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ExtraPagesRoutingModule } from "./extra-pages-routing.module";
import { BlankComponent } from "./blank/blank.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ComponentsModule } from "../shared/components/components.module";
import { WorkInitiatorComponent } from "./work-initiator/work-initiator.component";
import { WorkReceiverComponent } from "./work-receiver/work-receiver.component";
import { AreaInChargeComponent } from "./area-in-charge/area-in-charge.component";
import { MaintenanceComponent } from "./maintenance/maintenance.component";
import { SecurityComponent } from "./security/security.component";
import { SafetyOfficerComponent } from "./safety-officer/safety-officer.component";
import { FactoryManagerComponent } from "./factory-manager/factory-manager.component";
import { DivisionalHeadComponent } from "./divisional-head/divisional-head.component";
import { NzCollapseModule } from "ng-zorro-antd/collapse";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";

@NgModule({
    declarations: [
        BlankComponent,
        WorkInitiatorComponent,
        WorkReceiverComponent,
        AreaInChargeComponent,
        MaintenanceComponent,
        SecurityComponent,
        SafetyOfficerComponent,
        FactoryManagerComponent,
        DivisionalHeadComponent,
    ],
    imports: [
        CommonModule,
        ExtraPagesRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        ComponentsModule,
        NzCollapseModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
    ],
})
export class ExtraPagesModule {}
