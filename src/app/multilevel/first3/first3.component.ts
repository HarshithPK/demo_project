import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";

@Component({
    selector: "app-first3",
    templateUrl: "./first3.component.html",
    styleUrls: ["./first3.component.scss"],
})
export class First3Component implements OnInit {
    forms;

    breadscrums = [
        {
            title: "Applied Forms",
            items: [],
            active: "Applied Forms",
        },
    ];

    constructor(private http: HttpClient) {}

    ngOnInit(): void {
        this.getAllForms();
    }

    getAllForms() {
        const url = `http://127.0.0.1:3000/api/getAll-forms`;
        this.http.get(url).subscribe((res: any) => {
            console.log("Forms: ", res);
            this.forms = res.forms;
            console.log(this.forms);
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
