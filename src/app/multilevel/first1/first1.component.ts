import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { FormArray, FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { environment } from "src/environments/environment";

@Component({
    selector: "app-first1",
    templateUrl: "./first1.component.html",
    styleUrls: ["./first1.component.scss"],
})
export class First1Component implements OnInit {
    isLinear = true;

    defaultOpenValue = new Date(0, 0, 0, 0, 0, 0);

    start_time: Date | null = null;
    end_time: Date | null = null;

    workpermitTypes: string[] = [
        "General",
        "Hot Work",
        "Confined Space",
        "Other",
    ];

    hazardsArray = [
        { value: "Corrosive Chemical", isSelected: false },
        { value: "Fumes / Dust", isSelected: false },
        { value: "Traffic", isSelected: false },
        { value: "Lone Work", isSelected: false },
        { value: "Flammables", isSelected: false },
        { value: "High / Low Pressure", isSelected: false },
        { value: "Confined Space", isSelected: false },
        { value: "Buried Cables", isSelected: false },
        { value: "Explosive", isSelected: false },
        { value: "High / Low Temp", isSelected: false },
        { value: "Lack of Oxygen", isSelected: false },
        { value: "Buried Pipeline", isSelected: false },
        { value: "Compressed Gas", isSelected: false },
        { value: "Live Electrical", isSelected: false },
        { value: "Use of Ladder", isSelected: false },
        { value: "Hot Materials", isSelected: false },
        { value: "Overhead Danger", isSelected: false },
        { value: "Use of Scaffold", isSelected: false },
        { value: "Slippery Floor", isSelected: false },
        { value: "Steam", isSelected: false },
        { value: "Moving Machine", isSelected: false },
        { value: "Unsafe Access", isSelected: false },
        { value: "Radiation", isSelected: false },
        { value: "Naked Flame", isSelected: false },
        { value: "Auto-Start Equipment", isSelected: false },
        { value: "Fragile Roof", isSelected: false },
        { value: "Ergonomic", isSelected: false },
        { value: "Others(specify below)", isSelected: false },
    ];

    ppesArray = [
        { value: "Hard Hat", isSelected: false },
        { value: "Nose Mask", isSelected: false },
        { value: "Ear Muff", isSelected: false },
        { value: "Goggles", isSelected: false },
        { value: "Hand Gloves", isSelected: false },
        { value: "Face Shield", isSelected: false },
        { value: "Safety Harness", isSelected: false },
        { value: "Full Body Suit", isSelected: false },
        { value: "Safety Shoes", isSelected: false },
    ];

    generalWorkPrecautionsArray = [
        { value: "Job Site Checked", isSelected: false },
        {
            value: "Area Cordoned & Caution Boards Displayed",
            isSelected: false,
        },
        { value: "Caution Boards Displayed", isSelected: false },
        { value: "ELCB for Portable Tools", isSelected: false },
        { value: "PPE Provided", isSelected: false },
        { value: "Lifting Tools Certified", isSelected: false },
        { value: "Supervision Provided", isSelected: false },
        { value: "Method Statement", isSelected: false },
        { value: "Others", isSelected: false },
    ];

    hotWorkArray = [
        { value: "Combustibles Removed", isSelected: false },
        { value: "Sparks Isolated", isSelected: false },
        { value: "Explosion Test Done", isSelected: false },
        { value: "Fire Extinguisher Provided", isSelected: false },
        { value: "Fire Fighters Alerted", isSelected: false },
        { value: "Welding Sets Earthed", isSelected: false },
        { value: "Welding Cable in Good Condition", isSelected: false },
        { value: "Adequate Ventilation for Fumes", isSelected: false },
        { value: "Others", isSelected: false },
    ];

    heightOrFragileRoofArray = [
        { value: "Ladder Checked", isSelected: false },
        { value: "Scaffold Locked", isSelected: false },
        { value: "Safety Belt Provided", isSelected: false },
        { value: "Anchor for Belt", isSelected: false },
        { value: "Safety Net Installed", isSelected: false },
        { value: "Access Route Cleared", isSelected: false },
        { value: "Barricaded Below", isSelected: false },
        { value: "Worker Cleared for Work at height", isSelected: false },
        { value: "Others", isSelected: false },
    ];

    confinedSpaceArray = [
        { value: "Oxygen Level Checked", isSelected: false },
        { value: "Sufficient Light Provided", isSelected: false },
        { value: "Ventilation Provided", isSelected: false },
        { value: "Communication Route Ensured", isSelected: false },
        { value: "Entry Supervisor Available", isSelected: false },
        { value: "Attendent Available", isSelected: false },
        { value: "Emergency Rescue Planned", isSelected: false },
        {
            value: "Combustible & Explosive Materials Removed",
            isSelected: false,
        },
        { value: "Others", isSelected: false },
    ];

    generalForm: FormGroup;
    harzardsIdentifiedForm: FormGroup;
    ppesUsedForm: FormGroup;
    precautionsChecklistForm: FormGroup;
    methodOfStatementForm: FormGroup;
    methodOfStatementFormData: FormData;

    breadscrums = [
        {
            title: "Raise Work Permit",
            items: [],
            active: "Raise Work Permit",
        },
    ];

    constructor(
        private fb: FormBuilder,
        private http: HttpClient,
        private router: Router
    ) {}

    ngOnInit(): void {
        this.generalForm = this.fb.group({
            type_of_work_permit: ["", [Validators.required]],
            work_planned: this.fb.group({
                date: ["", [Validators.required]],
                start_time: [""],
                end_time: ["5:30 PM", [Validators.required]],
            }),
            work_issuer: this.fb.group({
                issuer_name: ["", [Validators.required]],
                issuer_dept: ["", [Validators.required]],
                work_supervisor_name: ["", [Validators.required]],
                contact_number: ["", [Validators.required]],
            }),
            area_of_work: ["", [Validators.required]],
            equipment_used: ["", [Validators.required]],
            receiver_contractor_details: this.fb.group({
                organization_name: ["", [Validators.required]],
                no_of_workders: ["", [Validators.required]],
                supervisor_name: ["", [Validators.required]],
                contact_number: ["", [Validators.required]],
            }),
            // method_of_statement: this.fb.group({
            //     sub_work: [""],
            //     equipment_used: [""],
            //     worker_skill: [""],
            //     equipment_certificate: [""],
            //     hazard_and_risk: [""],
            //     prevention_of_risk: [""],
            // }),
        });

        this.harzardsIdentifiedForm = this.fb.group({
            hazardsIdentified: this.fb.array([]),
        });

        this.ppesUsedForm = this.fb.group({
            ppesUsed: this.fb.array([]),
        });

        this.precautionsChecklistForm = this.fb.group({
            general_work: this.fb.array([]),
            hot_work: this.fb.array([]),
            height_roof: this.fb.array([]),
            confined_space: this.fb.array([]),
        });
    }

    get hazards(): FormArray {
        return this.harzardsIdentifiedForm.get(
            "hazardsIdentified"
        ) as FormArray;
    }

    newHazard(): FormGroup {
        return this.fb.group({
            hazard: [""],
        });
    }

    addhazard() {
        this.hazards.push(this.newHazard());
    }

    removeHazard(index: number) {
        this.hazards.removeAt(index);
    }

    selectedHazardsArray = [];
    selectHazard(index: number) {
        console.log(this.hazardsArray[index].value);
        this.hazardsArray[index].isSelected =
            !this.hazardsArray[index].isSelected;
        console.log(this.hazardsArray[index]);

        if (this.hazardsArray[index].isSelected) {
            this.selectedHazardsArray.push(this.hazardsArray[index].value);
            this.harzardsIdentifiedForm.value.hazardsIdentified =
                this.selectedHazardsArray.slice();
        } else {
            this.selectedHazardsArray.splice(
                this.selectedHazardsArray.indexOf(
                    this.hazardsArray[index].value
                ),
                1
            );
            this.harzardsIdentifiedForm.value.hazardsIdentified =
                this.selectedHazardsArray.slice();
        }
    }

    get ppes(): FormArray {
        return this.ppesUsedForm.get("ppesUsed") as FormArray;
    }

    newPPE(): FormGroup {
        return this.fb.group({
            ppe: [""],
        });
    }

    addPPE() {
        this.ppes.push(this.newPPE());
    }

    removePPE(index: number) {
        this.ppes.removeAt(index);
    }

    selectedPPEArray = [];
    selectPPE(index: number) {
        console.log(this.ppesArray[index].value);
        this.ppesArray[index].isSelected = !this.ppesArray[index].isSelected;
        console.log(this.ppesArray[index]);

        if (this.ppesArray[index].isSelected) {
            this.selectedPPEArray.push(this.ppesArray[index].value);
            this.ppesUsedForm.value.ppesUsed = this.selectedPPEArray.slice();
        } else {
            this.selectedPPEArray.splice(
                this.selectedPPEArray.indexOf(this.ppesArray[index].value),
                1
            );
            this.ppesUsedForm.value.ppesUsed = this.selectedPPEArray.slice();
        }
    }

    selectedGeneralWorkArray = [];
    selectGeneralWorkPrecaution(index: number) {
        console.log(this.generalWorkPrecautionsArray[index].value);
        this.generalWorkPrecautionsArray[index].isSelected =
            !this.generalWorkPrecautionsArray[index].isSelected;
        console.log(this.generalWorkPrecautionsArray[index]);

        if (this.generalWorkPrecautionsArray[index].isSelected) {
            this.selectedGeneralWorkArray.push(
                this.generalWorkPrecautionsArray[index].value
            );
            this.precautionsChecklistForm.value.general_work =
                this.selectedGeneralWorkArray.slice();
        } else {
            this.selectedGeneralWorkArray.splice(
                this.selectedGeneralWorkArray.indexOf(
                    this.generalWorkPrecautionsArray[index].value
                ),
                1
            );
            this.precautionsChecklistForm.value.general_work =
                this.selectedGeneralWorkArray.slice();
        }
    }

    selectedHotWorkArray = [];
    selectHotWorkPrecaution(index: number) {
        console.log(this.hotWorkArray[index].value);
        this.hotWorkArray[index].isSelected =
            !this.hotWorkArray[index].isSelected;
        console.log(this.hotWorkArray[index]);

        if (this.hotWorkArray[index].isSelected) {
            this.selectedHotWorkArray.push(this.hotWorkArray[index].value);
            this.precautionsChecklistForm.value.hot_work =
                this.selectedHotWorkArray.slice();
        } else {
            this.selectedHotWorkArray.splice(
                this.selectedHotWorkArray.indexOf(
                    this.hotWorkArray[index].value
                ),
                1
            );
            this.precautionsChecklistForm.value.hot_work =
                this.selectedHotWorkArray.slice();
        }
    }

    selectedHeightRoofArray = [];
    selectHeightOrFragileRoofPrecaution(index: number) {
        console.log(this.heightOrFragileRoofArray[index].value);
        this.heightOrFragileRoofArray[index].isSelected =
            !this.heightOrFragileRoofArray[index].isSelected;
        console.log(this.heightOrFragileRoofArray[index]);

        if (this.heightOrFragileRoofArray[index].isSelected) {
            this.selectedHeightRoofArray.push(
                this.heightOrFragileRoofArray[index].value
            );
            this.precautionsChecklistForm.value.height_roof =
                this.selectedHeightRoofArray.slice();
        } else {
            this.selectedHeightRoofArray.splice(
                this.selectedHeightRoofArray.indexOf(
                    this.heightOrFragileRoofArray[index].value
                ),
                1
            );
            this.precautionsChecklistForm.value.height_roof =
                this.selectedHeightRoofArray.slice();
        }
    }

    selectedConfinedSpaceArray = [];
    selectConfinedSpacePrecaution(index: number) {
        console.log(this.confinedSpaceArray[index].value);
        this.confinedSpaceArray[index].isSelected =
            !this.confinedSpaceArray[index].isSelected;
        console.log(this.confinedSpaceArray[index]);

        if (this.confinedSpaceArray[index].isSelected) {
            this.selectedConfinedSpaceArray.push(
                this.confinedSpaceArray[index].value
            );
            this.precautionsChecklistForm.value.confined_space =
                this.selectedConfinedSpaceArray.slice();
        } else {
            this.selectedConfinedSpaceArray.splice(
                this.selectedConfinedSpaceArray.indexOf(
                    this.confinedSpaceArray[index].value
                ),
                1
            );
            this.precautionsChecklistForm.value.confined_space =
                this.selectedConfinedSpaceArray.slice();
        }
    }

    uploadFile(event, type: string) {
        console.log(event, type);
        const file = (event.target as HTMLInputElement).files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                (
                    this.generalForm.controls[
                        "method_of_statement"
                    ] as FormGroup
                ).controls[type].patchValue([file]);
                (this.generalForm.controls["method_of_statement"] as FormGroup)
                    .get(type)
                    .updateValueAndValidity();

                console.log(this.generalForm.value);
            };
            reader.readAsDataURL(file);
        }
    }

    methodFormData = new FormData();
    saveGeneralForm() {
        /*
        if (this.generalForm.valid) {
            console.log("Form is valid");
            console.log(this.generalForm.value);

            this.
        }

        console.log(this.generalForm.controls["method_of_statement"].value);

        Object.keys(
            this.generalForm.controls["method_of_statement"].value
        ).forEach((key) => {
            let fieldName = key;
            let fileName =
                this.generalForm.controls["method_of_statement"].value[key];
            fileName =
                key +
                "." +
                this.generalForm.controls["method_of_statement"].value[
                    key
                ][0].name.split(".")[1];
            this.methodFormData.append(
                key,
                this.generalForm.controls["method_of_statement"].value[key][0],
                fileName
            );

            console.log(
                "Key: " +
                    key +
                    " Value: " +
                    this.generalForm.controls["method_of_statement"].value[key]
            );
        });
        */

        let hours = this.start_time.getHours();
        let minutes = this.start_time.getMinutes();
        let meridian = "AM";

        if (hours > 12) {
            hours = hours - 12;
            meridian = "PM";
        }

        let today = new Date();
        let _today = today.toISOString();

        let date = this.generalForm.value.work_planned.date;
        const yyyy = date.getFullYear();
        let mm = date.getMonth() + 1; // Months start at 0!
        let dd = date.getDate();

        const formattedToday = dd + "/" + mm + "/" + yyyy;

        console.log(hours, minutes, meridian);

        let startTime = hours + ":" + minutes + " " + meridian;

        let data = {
            general: {
                type_of_work_permit: this.generalForm.value.type_of_work_permit,
                work_planned: {
                    date: formattedToday,
                    start_time: startTime,
                    end_time: this.generalForm.value.work_planned.end_time,
                },
                work_issuer: {
                    issuer_name: this.generalForm.value.work_issuer.issuer_name,
                    issuer_dept: this.generalForm.value.work_issuer.issuer_dept,
                    work_supervisor_name:
                        this.generalForm.value.work_issuer.work_supervisor_name,
                    contact_number:
                        this.generalForm.value.work_issuer.contact_number,
                },
                area_of_work: this.generalForm.value.area_of_work,
                equipment_used: this.generalForm.value.equipment_used,
                receiver_contractor_details: {
                    organization_name:
                        this.generalForm.value.receiver_contractor_details
                            .organization_name,
                    no_of_workders:
                        this.generalForm.value.receiver_contractor_details
                            .no_of_workders,
                    supervisor_name:
                        this.generalForm.value.receiver_contractor_details
                            .supervisor_name,
                    contact_number:
                        this.generalForm.value.receiver_contractor_details
                            .contact_number,
                },
            },
            hazard_identified: this.selectedHazardsArray,
            PPEs_to_be_used: this.selectedPPEArray,
            precautions_checklist: {
                general_work: this.selectedGeneralWorkArray,
                hot_work: this.selectedHotWorkArray,
                height_roof: this.selectedHeightRoofArray,
                confined_space: this.selectedConfinedSpaceArray,
            },
            created_on: _today,
        };

        console.log(data);

        const url = `${environment.baseURL}/api/fill-form`;

        this.http.post(url, data).subscribe((res) => {
            console.log("Permit Applied: ", res);
            this.clearForms();
        });
    }

    clearForms() {
        this.generalForm = this.fb.group({
            type_of_work_permit: ["", [Validators.required]],
            work_planned: this.fb.group({
                date: ["", [Validators.required]],
                start_time: [""],
                end_time: ["5:30 PM", [Validators.required]],
            }),
            work_issuer: this.fb.group({
                issuer_name: ["", [Validators.required]],
                issuer_dept: ["", [Validators.required]],
                work_supervisor_name: ["", [Validators.required]],
                contact_number: ["", [Validators.required]],
            }),
            area_of_work: ["", [Validators.required]],
            equipment_used: ["", [Validators.required]],
            receiver_contractor_details: this.fb.group({
                organization_name: ["", [Validators.required]],
                no_of_workders: ["", [Validators.required]],
                supervisor_name: ["", [Validators.required]],
                contact_number: ["", [Validators.required]],
            }),
        });

        this.harzardsIdentifiedForm = this.fb.group({
            hazardsIdentified: this.fb.array([]),
        });

        this.ppesUsedForm = this.fb.group({
            ppesUsed: this.fb.array([]),
        });

        this.precautionsChecklistForm = this.fb.group({
            general_work: this.fb.array([]),
            hot_work: this.fb.array([]),
            height_roof: this.fb.array([]),
            confined_space: this.fb.array([]),
        });

        this.selectedHazardsArray = [];
        this.selectedPPEArray = [];
        this.selectedGeneralWorkArray = [];
        this.selectedHotWorkArray = [];
        this.selectedHeightRoofArray = [];
        this.selectedConfinedSpaceArray = [];

        this.router.navigate(["/multilevel/first3"]);
    }

    viewFormData(fd) {
        for (var pair of fd.entries()) {
            console.log(pair[0] + " - " + pair[1]);
        }
    }
}
