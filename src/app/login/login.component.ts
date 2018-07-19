import { Component, ViewContainerRef, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {LoginService} from './login.service';

import {
	FormBuilder,
	FormControl,
	FormGroup,
	Validators
} from '@angular/forms';
@Component({
    templateUrl: './login.component.html',
    styleUrls: ['./login.css']
})
export class LoginComponent {
    loginForm: FormGroup;
    isSubmitted: boolean = false;
    isSubmitting: boolean = false;
    constructor(private formBuilder: FormBuilder,
        private router: Router,
        private loginService: LoginService) { }

    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            email: ['', [Validators.required]],
            password: ['', [Validators.required]]
        });
    }
    submitForm(){
        this.isSubmitted = true;
        // if (this.loginForm.valid) {
			this.isSubmitting = true;
			let reqData = {"orgKey": 158800};
            this.loginService.login(reqData, (data)=>{
				console.log(data.category)
				this.isSubmitted = false;
				this.isSubmitting = false
				this.router.navigate(['/dashboard']);
			}, (err)=>{
				this.isSubmitting = false
                    this.isSubmitted = false;
                    console.log(err);
			})
        // }
    }
}
// export class LoginComponent {
// 	loginFields: Array<any> = [];
// 	loginAlertModal: boolean;
// 	errorMsg: any;
// 	datePikerIds: Array<any> = [];
// 	public loginForm: FormGroup;
// 	forgetPasswordForm: FormGroup;
// 	public submitted: boolean = false;
// 	forgetSubmitted:boolean;
// 	isLoading:boolean;
// 	emailId:any;
// 	loadingText:string = 'Logging In...';
// 	version:string;
// 	//  @ViewChild('mydatepicker') dob: ElementRef;
// 	constructor(private formBuilder: FormBuilder, private loginService: LoginService) {}

// 	ngOnChanges() {
// 	}
// 	ngOnInit() {
// 		this.login();
// 	}
// 	login(){
// 		let reqData = {"orgKey": 158800};
// 		this.loginService.login(reqData, (data)=>{
// 			console.log(data)
// 		}, (err)=>{
// 			console.log(err)
// 		})
// 	}
// 	// createForm() {
// 	// 	let formData: any = {};
// 	// 	for (let loginField of this.loginFields) {
// 	// 		// name field set  as a form control name
// 	// 		let field: any = loginField;
// 	// 		// postalCode is a specific filed which not dyanmic configurable like others
// 	// 		if(field.name == 'postalCode'){
// 	// 			for(let obj of field.postalCode){
// 	// 				formData[obj.name] = this.formControlConfiguration(obj);
// 	// 			}
// 	// 		}
// 	// 		formData[field.name] = this.formControlConfiguration(field);
// 	// 	}
// 	// 	this.loginForm = this.formBuilder.group(formData);
// 	// }

// 	// formControlConfiguration(controlConfig: any) {
// 	// 	let formControlArr: Array<any> = [''];
// 	// 	let formControlValidatorsArr = [];
// 	// 	for (let controlValidator in controlConfig.validators) {
// 	// 		this.addValidator(formControlValidatorsArr, controlValidator, controlConfig.validators[controlValidator]);
// 	// 	}
// 	// 	formControlArr.push(formControlValidatorsArr);
// 	// 	return formControlArr;
// 	// }

// 	// addValidator(validatorArr: any, validatorType: any, validatorObj: any) {
// 	// 	switch (validatorType) {
// 	// 		case 'required':
// 	// 			validatorArr.push(<any>Validators.required);
// 	// 			break;
// 	// 		case 'pattern':
// 	// 			let regExp = new RegExp(validatorObj.regex);
// 	// 			validatorArr.push(<any>Validators.pattern(regExp));
// 	// 			break;
// 	// 	}
// 	// }

// 	// setFocusToTextBox(id: any) {
// 	// 	this.datePikerIds[id]=!this.datePikerIds[id];
// 	// 	if(this.datePikerIds[id])
// 	// 	document.getElementById(id).focus();
// 	// }

	
// }