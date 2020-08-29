import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { first } from "rxjs/operators";

import {EmployeesService,AlertService } from "../_services";

@Component({ templateUrl: "add-edit-employees.component.html" })
export class AddEditEmployeesComponent implements OnInit {
  form: FormGroup;
  id: string;
  isAddMode: boolean;
  loading = false;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private employeesService: EmployeesService,
    private alertService: AlertService
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.params["id"];
    this.isAddMode = !this.id;

    // password not required in edit mode
    const passwordValidators = [Validators.minLength(6)];
    if (this.isAddMode) {
      passwordValidators.push(Validators.required);
    }

    this.form = this.formBuilder.group({
      title: ["", Validators.required],
      firstName: ["", Validators.required],
      middleName: ["", Validators.required],
      lastName: ["", Validators.required],
      phone: ["", Validators.required],
      position: ["", Validators.required],
      dob: ["", Validators.required],
      salary: ["", Validators.required],
      addinfo: ["", Validators.required],
    });

    if (!this.isAddMode) {
      this.employeesService
        .getById(this.id)
        .pipe(first())
        .subscribe((x) => {
          this.f.title.setValue(x.title);
          this.f.firstName.setValue(x.firstName);
          this.f.middleName.setValue(x.middleName);
          this.f.lastName.setValue(x.lastName);
          this.f.phone.setValue(x.phone);
          this.f.position.setValue(x.position);
          this.f.dob.setValue(x.dob);
          this.f.salary.setValue(x.salary);
          this.f.addinfo.setValue(x.addinfo);
          
        });
    }
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.form.controls;
  }

  onSubmit() {
    this.submitted = true;

    // reset alerts on submit
    this.alertService.clear();

    // stop here if form is invalid
    if (this.form.invalid) {
      return;
    }

    this.loading = true;
    if (this.isAddMode) {
      this.createEmployee();
    } else {
      this.updateEmployee();
    }
  }

  private createEmployee() {
    this.employeesService
       .register(this.form.value)
      .pipe(first())
      .subscribe(
        (data) => {
          this.alertService.success("employee added successfully", {
            keepAfterRouteChange: true,
          });
          this.router.navigate([".", { relativeTo: this.route }]);
        },
        (error) => {
          this.alertService.error(error);
          this.loading = false;
        }
      );
  }

  private updateEmployee() {
    this.employeesService
      .update(this.id, this.form.value)
      .pipe(first())
      .subscribe(
        (data) => {
          this.alertService.success("Update successful", {
            keepAfterRouteChange: true,
          });
          this.router.navigate(["..", { relativeTo: this.route }]);
        },
        (error) => {
          this.alertService.error(error);
          this.loading = false;
        }
      );
  }
}
