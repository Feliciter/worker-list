(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{Q21o:function(e,t,i){"use strict";i.r(t),i.d(t,"EmployeesModule",(function(){return V}));var r=i("3Pt+"),n=i("ofXK"),o=i("tyNb"),s=i("fXoL");let b=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=s.Eb({type:e,selectors:[["ng-component"]],decls:3,vars:0,consts:[[1,"p-4"],[1,"container"]],template:function(e,t){1&e&&(s.Pb(0,"div",0),s.Pb(1,"div",1),s.Lb(2,"router-outlet"),s.Ob(),s.Ob())},directives:[o.g],encapsulation:2}),e})();var c=i("SxV6"),a=i("J9tS");let d=(()=>{class e{transform(e,t){return t?e.filter(e=>this.matchValue(e,t)):e}matchValue(e,t){return Object.keys(e).map(i=>new RegExp(t,"gi").test(e[i])).some(e=>e)}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275pipe=s.Jb({name:"filter",type:e,pure:!0}),e})();function l(e,t){1&e&&s.Lb(0,"span",11)}function m(e,t){1&e&&(s.Pb(0,"span"),s.Ac(1,"Delete"),s.Ob())}function f(e,t){if(1&e){const e=s.Qb();s.Pb(0,"tr"),s.Pb(1,"td"),s.Ac(2),s.Ob(),s.Pb(3,"td"),s.Ac(4),s.Ob(),s.Pb(5,"td"),s.Ac(6),s.Ob(),s.Pb(7,"td"),s.Ac(8),s.Ob(),s.Pb(9,"td"),s.Ac(10),s.Ob(),s.Pb(11,"td"),s.Ac(12),s.Ob(),s.Pb(13,"td"),s.Ac(14),s.dc(15,"date"),s.Ob(),s.Pb(16,"td"),s.Ac(17),s.Ob(),s.Pb(18,"td"),s.Ac(19),s.dc(20,"date"),s.Ob(),s.Pb(21,"td",7),s.Pb(22,"a",8),s.Ac(23,"Edit"),s.Ob(),s.Pb(24,"button",9),s.ac("click",(function(){s.rc(e);const i=t.$implicit;return s.cc().deleteEmployee(i._id)})),s.yc(25,l,1,0,"span",10),s.yc(26,m,2,0,"span",6),s.Ob(),s.Ob(),s.Ob()}if(2&e){const e=t.$implicit;s.xb(2),s.Bc(e.firstName),s.xb(2),s.Bc(e.middleName),s.xb(2),s.Bc(e.lastName),s.xb(2),s.Bc(e.gender),s.xb(2),s.Bc(e.phone),s.xb(2),s.Bc(e.position),s.xb(2),s.Bc(s.fc(15,12,e.dob,"yyyy-MM-dd")),s.xb(3),s.Bc(e.salary),s.xb(2),s.Bc(s.fc(20,15,e.createdDate,"yyyy-MM-dd")),s.xb(3),s.kc("routerLink","edit/",e._id,""),s.xb(3),s.ic("ngIf",e.isDeleting),s.xb(1),s.ic("ngIf",!e.isDeleting)}}function p(e,t){1&e&&(s.Pb(0,"tr"),s.Pb(1,"td",12),s.Lb(2,"span",13),s.Ob(),s.Ob())}let u=(()=>{class e{constructor(e){this.employeesService=e,this.employees=null}ngOnInit(){this.employeesService.getAllempl().pipe(Object(c.a)()).subscribe(e=>this.employees=e)}deleteEmployee(e){window.confirm("Are you sure")&&(this.employees.find(t=>t._id===e).isDeleting=!0,this.employeesService.deleteEmpl(e).pipe(Object(c.a)()).subscribe(()=>{this.employees=this.employees.filter(t=>t._id!==e)}))}}return e.\u0275fac=function(t){return new(t||e)(s.Kb(a.c))},e.\u0275cmp=s.Eb({type:e,selectors:[["ng-component"]],decls:32,vars:6,consts:[["routerLink","add",1,"btn","btn-sm","btn-success","mb-2"],[1,"search-wrapper","m-b-1","w-50"],["type","text","placeholder","Search employee...","aria-label","Search",1,"form-control","form-control-dark","w-150",3,"ngModel","ngModelChange"],[1,"table","table-striped"],[2,"width","10%"],[4,"ngFor","ngForOf"],[4,"ngIf"],[2,"white-space","nowrap"],[1,"btn","btn-sm","btn-primary","mr-1",3,"routerLink"],[1,"btn","btn-sm","btn-danger","btn-delete-user",3,"click"],["class","spinner-border spinner-border-sm",4,"ngIf"],[1,"spinner-border","spinner-border-sm"],["colspan","4",1,"text-center"],[1,"spinner-border","spinner-border-lg","align-center"]],template:function(e,t){1&e&&(s.Pb(0,"h1"),s.Ac(1,"Employees"),s.Ob(),s.Pb(2,"a",0),s.Ac(3,"Add Employee"),s.Ob(),s.Pb(4,"div",1),s.Pb(5,"input",2),s.ac("ngModelChange",(function(e){return t.searchText=e})),s.Ob(),s.Ob(),s.Pb(6,"table",3),s.Pb(7,"thead"),s.Pb(8,"tr"),s.Pb(9,"th",4),s.Ac(10,"First Name"),s.Ob(),s.Pb(11,"th",4),s.Ac(12,"Middle Name"),s.Ob(),s.Pb(13,"th",4),s.Ac(14,"Last Name"),s.Ob(),s.Pb(15,"th",4),s.Ac(16,"Gender"),s.Ob(),s.Pb(17,"th",4),s.Ac(18,"Phone"),s.Ob(),s.Pb(19,"th",4),s.Ac(20,"Position"),s.Ob(),s.Pb(21,"th",4),s.Ac(22,"Date of Birth"),s.Ob(),s.Pb(23,"th",4),s.Ac(24,"Salary"),s.Ob(),s.Pb(25,"th",4),s.Ac(26,"Created"),s.Ob(),s.Lb(27,"th",4),s.Ob(),s.Ob(),s.Pb(28,"tbody"),s.yc(29,f,27,18,"tr",5),s.dc(30,"filter"),s.yc(31,p,3,0,"tr",6),s.Ob(),s.Ob()),2&e&&(s.xb(5),s.ic("ngModel",t.searchText),s.xb(24),s.ic("ngForOf",s.fc(30,3,t.employees,t.searchText)),s.xb(2),s.ic("ngIf",!t.employees))},directives:[o.e,r.a,r.h,r.j,n.k,n.l],pipes:[d,n.d],encapsulation:2}),e})();function h(e,t){1&e&&(s.Pb(0,"h1"),s.Ac(1,"Add Employee"),s.Ob())}function y(e,t){1&e&&(s.Pb(0,"h1"),s.Ac(1,"Edit Employee"),s.Ob())}function O(e,t){1&e&&(s.Pb(0,"div"),s.Ac(1,"First Name is required"),s.Ob())}function P(e,t){if(1&e&&(s.Pb(0,"div",28),s.yc(1,O,2,0,"div",0),s.Ob()),2&e){const e=s.cc();s.xb(1),s.ic("ngIf",e.f.firstName.errors.required)}}function g(e,t){1&e&&(s.Pb(0,"div"),s.Ac(1,"Middle Name is required"),s.Ob())}function v(e,t){if(1&e&&(s.Pb(0,"div",28),s.yc(1,g,2,0,"div",0),s.Ob()),2&e){const e=s.cc();s.xb(1),s.ic("ngIf",e.f.middleName.errors.required)}}function A(e,t){1&e&&(s.Pb(0,"div"),s.Ac(1,"Last Name is required"),s.Ob())}function x(e,t){if(1&e&&(s.Pb(0,"div",28),s.yc(1,A,2,0,"div",0),s.Ob()),2&e){const e=s.cc();s.xb(1),s.ic("ngIf",e.f.lastName.errors.required)}}function N(e,t){1&e&&(s.Pb(0,"div"),s.Ac(1,"phone is required"),s.Ob())}function C(e,t){if(1&e&&(s.Pb(0,"div",28),s.yc(1,N,2,0,"div",0),s.Ob()),2&e){const e=s.cc();s.xb(1),s.ic("ngIf",e.f.phone.errors.required)}}function I(e,t){1&e&&(s.Pb(0,"div"),s.Ac(1,"position is required"),s.Ob())}function M(e,t){if(1&e&&(s.Pb(0,"div",28),s.yc(1,I,2,0,"div",0),s.Ob()),2&e){const e=s.cc();s.xb(1),s.ic("ngIf",e.f.position.errors.required)}}function S(e,t){1&e&&(s.Pb(0,"div"),s.Ac(1,"Date of birth is required"),s.Ob())}function w(e,t){if(1&e&&(s.Pb(0,"div",28),s.yc(1,S,2,0,"div",0),s.Ob()),2&e){const e=s.cc();s.xb(1),s.ic("ngIf",e.f.dob.errors.required)}}function L(e,t){1&e&&s.Lb(0,"span",29)}const E=function(e){return{"is-invalid":e}};let k=(()=>{class e{constructor(e,t,i,r,n){this.formBuilder=e,this.route=t,this.router=i,this.employeesService=r,this.alertService=n,this.loading=!1,this.submitted=!1}ngOnInit(){this.id=this.route.snapshot.params.id,this.isAddMode=!this.id,this.form=this.formBuilder.group({gender:[""],firstName:["",r.o.required],middleName:[""],lastName:["",r.o.required],phone:["",r.o.pattern("^[0-9]*$")],position:["",r.o.required],dob:[""],salary:[""]}),this.isAddMode||this.employeesService.getById(this.id).pipe(Object(c.a)()).subscribe(e=>{this.f.gender.setValue(e.gender),this.f.firstName.setValue(e.firstName),this.f.middleName.setValue(e.middleName),this.f.lastName.setValue(e.lastName),this.f.phone.setValue(e.phone),this.f.position.setValue(e.position),this.f.dob.setValue(e.dob),this.f.salary.setValue(e.salary)})}get f(){return this.form.controls}onSubmit(){this.submitted=!0,this.alertService.clear(),this.form.invalid||(this.loading=!0,this.isAddMode?this.createEmployee():this.updateEmployee())}createEmployee(){this.employeesService.registerempl(this.form.value).pipe(Object(c.a)()).subscribe(e=>{this.alertService.success("Employee added successfully",{keepAfterRouteChange:!0}),this.router.navigate([".",{relativeTo:this.route}])},e=>{this.alertService.error(e),this.loading=!1})}updateEmployee(){this.employeesService.update(this.id,this.form.value).pipe(Object(c.a)()).subscribe(e=>{this.alertService.success("Update successful",{keepAfterRouteChange:!0}),this.router.navigate(["..",{relativeTo:this.route}])},e=>{this.alertService.error(e),this.loading=!1})}}return e.\u0275fac=function(t){return new(t||e)(s.Kb(r.b),s.Kb(o.a),s.Kb(o.c),s.Kb(a.c),s.Kb(a.b))},e.\u0275cmp=s.Eb({type:e,selectors:[["ng-component"]],decls:64,vars:33,consts:[[4,"ngIf"],[1,"container-md","small"],[3,"formGroup","ngSubmit"],[1,"form-row"],[1,"form-group","col"],["for","FirstName"],["id","FirstName","type","text","formControlName","firstName",1,"form-control",3,"ngClass"],["class","invalid-feedback",4,"ngIf"],["for","MiddleName"],["id","MiddleName","type","text","formControlName","middleName",1,"form-control",3,"ngClass"],["for","lastName"],["id","lastName","type","text","formControlName","lastName",1,"form-control",3,"ngClass"],["id","male","type","radio","value","male","name","gender","formControlName","gender"],["for","male"],["id","female","type","radio","value","female","name","gender","formControlName","gender"],["for","female"],["for","phone"],["id","phone","type","number","formControlName","phone",1,"form-control",3,"ngClass"],["for","Position"],["id","Position","type","text","formControlName","position",1,"form-control",3,"ngClass"],["for","dob"],["id","dob","type","date","formControlName","dob",1,"form-control",3,"ngModel"],["for","salary"],["id","salary","type","number","min","0","formControlName","salary",1,"form-control",3,"ngClass"],[1,"form-group"],[1,"btn","btn-primary",3,"disabled"],["class","spinner-border spinner-border-sm mr-1",4,"ngIf"],["routerLink","/employees",1,"btn","btn-link"],[1,"invalid-feedback"],[1,"spinner-border","spinner-border-sm","mr-1"]],template:function(e,t){1&e&&(s.yc(0,h,2,0,"h1",0),s.yc(1,y,2,0,"h1",0),s.Pb(2,"div",1),s.Pb(3,"form",2),s.ac("ngSubmit",(function(){return t.onSubmit()})),s.Pb(4,"div",3),s.Pb(5,"div",4),s.Pb(6,"label",5),s.Ac(7,"First Name"),s.Ob(),s.Lb(8,"input",6),s.yc(9,P,2,1,"div",7),s.Ob(),s.Ob(),s.Pb(10,"div",3),s.Pb(11,"div",4),s.Pb(12,"label",8),s.Ac(13,"Middle Name"),s.Ob(),s.Lb(14,"input",9),s.yc(15,v,2,1,"div",7),s.Ob(),s.Ob(),s.Pb(16,"div",3),s.Pb(17,"div",4),s.Pb(18,"label",10),s.Ac(19,"Last Name"),s.Ob(),s.Lb(20,"input",11),s.yc(21,x,2,1,"div",7),s.Ob(),s.Ob(),s.Pb(22,"div",3),s.Pb(23,"div",4),s.Pb(24,"span"),s.Lb(25,"input",12),s.Pb(26,"label",13),s.Ac(27,"Male"),s.Ob(),s.Ob(),s.Pb(28,"span"),s.Ac(29," \xa0 "),s.Ob(),s.Pb(30,"span"),s.Lb(31,"input",14),s.Pb(32,"label",15),s.Ac(33,"Female"),s.Ob(),s.Ob(),s.Ob(),s.Ob(),s.Pb(34,"div",3),s.Pb(35,"div",4),s.Pb(36,"label",16),s.Ac(37,"Phone"),s.Ob(),s.Lb(38,"input",17),s.yc(39,C,2,1,"div",7),s.Ob(),s.Ob(),s.Pb(40,"div",3),s.Pb(41,"div",4),s.Pb(42,"label",18),s.Ac(43,"Position"),s.Ob(),s.Lb(44,"input",19),s.yc(45,M,2,1,"div",7),s.Ob(),s.Ob(),s.Pb(46,"div",3),s.Pb(47,"div",4),s.Pb(48,"label",20),s.Ac(49,"Date of birth"),s.Ob(),s.Lb(50,"input",21),s.dc(51,"date"),s.yc(52,w,2,1,"div",7),s.Ob(),s.Ob(),s.Pb(53,"div",3),s.Pb(54,"div",4),s.Pb(55,"label",22),s.Ac(56,"Salary ($)"),s.Ob(),s.Lb(57,"input",23),s.Ob(),s.Ob(),s.Pb(58,"div",24),s.Pb(59,"button",25),s.yc(60,L,1,0,"span",26),s.Ac(61," Save "),s.Ob(),s.Pb(62,"a",27),s.Ac(63,"Cancel"),s.Ob(),s.Ob(),s.Ob(),s.Ob()),2&e&&(s.ic("ngIf",t.isAddMode),s.xb(1),s.ic("ngIf",!t.isAddMode),s.xb(2),s.ic("formGroup",t.form),s.xb(5),s.ic("ngClass",s.mc(21,E,t.submitted&&t.f.firstName.errors)),s.xb(1),s.ic("ngIf",t.submitted&&t.f.firstName.errors),s.xb(5),s.ic("ngClass",s.mc(23,E,t.submitted&&t.f.middleName.errors)),s.xb(1),s.ic("ngIf",t.submitted&&t.f.middleName.errors),s.xb(5),s.ic("ngClass",s.mc(25,E,t.submitted&&t.f.lastName.errors)),s.xb(1),s.ic("ngIf",t.submitted&&t.f.lastName.errors),s.xb(17),s.ic("ngClass",s.mc(27,E,t.submitted&&t.f.phone.errors)),s.xb(1),s.ic("ngIf",t.submitted&&t.f.phone.errors),s.xb(5),s.ic("ngClass",s.mc(29,E,t.submitted&&t.f.position.errors)),s.xb(1),s.ic("ngIf",t.submitted&&t.f.position.errors),s.xb(5),s.ic("ngModel",s.fc(51,18,t.f.dob.value,"yyyy-MM-dd")),s.xb(2),s.ic("ngIf",t.submitted&&t.f.dob.errors),s.xb(5),s.ic("ngClass",s.mc(31,E,t.submitted&&t.f.salary.errors)),s.xb(2),s.ic("disabled",t.loading),s.xb(1),s.ic("ngIf",t.loading))},directives:[n.l,r.q,r.i,r.d,r.a,r.h,r.c,n.j,r.m,r.l,o.e],pipes:[n.d],encapsulation:2}),e})();const q=[{path:"",component:b,children:[{path:"",component:u},{path:"add",component:k},{path:"edit/:id",component:k}]}];let B=(()=>{class e{}return e.\u0275mod=s.Ib({type:e}),e.\u0275inj=s.Hb({factory:function(t){return new(t||e)},imports:[[o.f.forChild(q)],o.f]}),e})(),V=(()=>{class e{}return e.\u0275mod=s.Ib({type:e}),e.\u0275inj=s.Hb({factory:function(t){return new(t||e)},imports:[[n.b,r.n,B,r.e]]}),e})()}}]);