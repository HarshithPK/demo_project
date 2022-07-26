import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AreaInChargeComponent } from "./area-in-charge/area-in-charge.component";
import { BlankComponent } from "./blank/blank.component";
import { DivisionalHeadComponent } from "./divisional-head/divisional-head.component";
import { FactoryManagerComponent } from "./factory-manager/factory-manager.component";
import { MaintenanceComponent } from "./maintenance/maintenance.component";
import { SafetyOfficerComponent } from "./safety-officer/safety-officer.component";
import { SecurityComponent } from "./security/security.component";
import { WorkInitiatorComponent } from "./work-initiator/work-initiator.component";
import { WorkReceiverComponent } from "./work-receiver/work-receiver.component";

const routes: Routes = [
    {
        path: "blank",
        component: BlankComponent,
    },
    {
        path: "work-initiator",
        component: WorkInitiatorComponent,
    },
    {
        path: "work-receiver",
        component: WorkReceiverComponent,
    },
    {
        path: "area-in-charge",
        component: AreaInChargeComponent,
    },
    {
        path: "maintenance",
        component: MaintenanceComponent,
    },
    {
        path: "security",
        component: SecurityComponent,
    },
    {
        path: "safety-officer",
        component: SafetyOfficerComponent,
    },
    {
        path: "factory-manager",
        component: FactoryManagerComponent,
    },
    {
        path: "divisional-head",
        component: DivisionalHeadComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ExtraPagesRoutingModule {}
