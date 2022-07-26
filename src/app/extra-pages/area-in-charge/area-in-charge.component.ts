import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { environment } from "src/environments/environment";

@Component({
    selector: "app-area-in-charge",
    templateUrl: "./area-in-charge.component.html",
    styleUrls: ["./area-in-charge.component.scss"],
})
export class AreaInChargeComponent implements OnInit {
    forms;
    name = "";

    breadscrums = [
        {
            title: "Area In Charge (HOD)",
            items: ["Departments"],
            active: "Area In Charge (HOD)",
        },
    ];

    constructor(private http: HttpClient) {}

    ngOnInit(): void {
        this.getAllFroms();
    }

    getAllFroms() {
        const url = `${environment.baseURL}/api/getAll-forms`;
        this.http.get(url).subscribe((res: any) => {
            console.log("Forms: ", res);
            this.forms = res.forms;
            console.log(this.forms);
        });
    }

    approveForm(index: number) {
        const formId = this.forms[index]._id;
        const url = `${environment.baseURL}/api/fill-form/${formId}`;

        let today = new Date();
        let _today = today.toISOString();

        let data = {
            approval: {
                authorization_of_area_inChange: {
                    name: this.name,
                    date: _today,
                    isApproved: true,
                },
            },
        };

        this.http.put(url, data).subscribe((res) => {
            console.log("Approved: ", res);
            this.getAllFroms();
            this.name = "";
        });
    }

    getDateAndTime(date: string) {
        const _date = new Date(date);

        let year = _date.getFullYear();
        let month = _date.getMonth() + 1;
        let day = _date.getDate();

        let hours = _date.getHours();
        let minutes = _date.getMinutes();
        let meridian = "AM";

        if (hours > 12) {
            hours = hours - 12;
            meridian = "PM";
        }

        let modedDate =
            day +
            "/" +
            month +
            "/" +
            year +
            " " +
            hours +
            ":" +
            minutes +
            " " +
            meridian;

        console.log(modedDate);

        return modedDate;
    }
}
