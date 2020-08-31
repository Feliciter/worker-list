import { Router, ActivatedRoute } from "@angular/router";
import { Component, OnInit, NgZone } from "@angular/core";
import { first } from "rxjs/operators";
import { EmployeesService } from "../_services";

@Component({ templateUrl: "list-employees.component.html" })
export class ListEmployeesComponent implements OnInit {
  searchText;
  employees = null;

  constructor(
    private employeesService: EmployeesService,
    private router: Router,
    private ngZone: NgZone,
    private actRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.employeesService
      .getAllempl()
      .pipe(first())
      .subscribe((employees) => (this.employees = employees));
  }

  deleteEmployee(id: string): void {
    if (window.confirm("Are you sure")) {
      this.employeesService.deleteEmpl(id).subscribe(() => {
        this.ngZone.run(() => this.router.navigateByUrl("/employees"));
        window.location.reload();
      });
    }
  }
}
