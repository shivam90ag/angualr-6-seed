import { Injectable } from '@angular/core';



declare var jQuery: any;

@Injectable()
export class UtilityService {
	constructor() { }

	showModal(modalId: string) {
		return jQuery(modalId).modal('show');
	}
	hideModal(modalId: string) {
		return jQuery(modalId).modal('hide');
	}
	removeCssClass(elementSelector: any, className: string) {
		jQuery(elementSelector).removeClass(className);
	}
	removeTemplate(templateSelector: string) {
		return jQuery(templateSelector).remove();
	}
	// showDatePicker(selector: string, datetimePickerOptions?: any, onSelectCallBack?: any) {
	// 	// let options:any ={
	// 	// 	useStrict:true,
	// 	// 	format: environment.defaultDateFormat,
	// 	// 	minDate:moment("01/01/1980", environment.defaultDateFormat),
	// 	// 	maxDate: new Date(),
	// 	// 	useCurrent:false
	// 	// }

	// 	datetimePickerOptions = datetimePickerOptions || {};
	// 	let options: any = Object.assign({}, datetimePickerOptions);
	// 	options.useStrict = true;
	// 	options.useCurrent = false;
	// 	options.format = datetimePickerOptions.format ? datetimePickerOptions.format : environment.defaultDateFormat;
	// 	options.minDate = datetimePickerOptions.minDate ?new Date(datetimePickerOptions.minDate) : null;
	// 	options.maxDate = datetimePickerOptions.maxDate ? new Date(datetimePickerOptions.maxDate) : null;
	// 	options.defaultDate = datetimePickerOptions.defaultDate ? new Date(datetimePickerOptions.defaultDate): new Date();
	// 	if(!options.maxDate){
	// 		delete options.maxDate;
	// 	}
	// 	if(!options.minDate){
	// 		delete options.minDate;
	// 	}
	// 	jQuery(selector).datetimepicker(options);
	// 	if (!jQuery(selector).data("DateTimePicker")) {
	// 		jQuery(selector).datetimepicker(options);
	// 	}
	// 	if (jQuery(selector).data("DateTimePicker")) {
	// 		jQuery(selector).data("DateTimePicker").clear();
	// 		jQuery(selector).on('dp.change', (event) => {
	// 			onSelectCallBack(event.target.value);

	// 		});
	// 		jQuery(selector).on('dp.hide', () => {
	// 			jQuery(selector).off('dp.change');
	// 		});

	// 		jQuery(selector).data("DateTimePicker").options(options);
	// 		jQuery(selector).data("DateTimePicker").show();
	// 	}
	// 	// jQuery(selector).on("dp.change", updateDateCB);
	// }

	b64toBlob(b64Data: any, contentType?: string, sliceSize?: number) {
		contentType = contentType || '';
		sliceSize = sliceSize || 512;
		const byteCharacters = atob(b64Data);
		const byteArrays: any[] = [];

		for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
			const slice = byteCharacters.slice(offset, offset + sliceSize);

			const byteNumbers: Array<any> = new Array(slice.length);
			for (let i = 0; i < slice.length; i++) {
				byteNumbers[i] = slice.charCodeAt(i);
			}

			const byteArray = new Uint8Array(byteNumbers);

			byteArrays.push(byteArray);
		}

		const blob = new Blob(byteArrays, { type: contentType });
		return blob;
	}
}