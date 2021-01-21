
import { Component, Input } from "@angular/core";

@Component({
    selector: "app-field",
    templateUrl: "./field.template.html"
})
export class Field {
    @Input() type: string;

    label: string;

    constructor(
    ){
    }
}
