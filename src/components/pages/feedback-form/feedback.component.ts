
import { Component
    // , ElementRef
} from "@angular/core";

import { Router } from "@angular/router";

@Component({
    selector: "app-feedback",
    templateUrl: "./feedback.template.html"
})
export class FeedbackForm {

    // @ElementRef<Element>() formElement: Element;

    constructor(
        private router: Router
    ){

    }

    updateCompanyName(){
        // if (this.formElement.nativeElement.CompanyName.value === "example") {
        //     this.clearForm();
        // }
    }

    clearForm(){
        // this.formElement.nativeElement.Name.value = "";
        // this.formElement.nativeElement.CompanyName.value = "";
        // this.formElement.nativeElement.JobTitle.value = "";
        // this.formElement.nativeElement.YearsInRole.value = "";
        // this.formElement.nativeElement.FeedBack.value = "";
    }

    submitForm(e): void {
        e.preventDefault();
        this.router.navigate(["/thank-you"]);
    }
}
