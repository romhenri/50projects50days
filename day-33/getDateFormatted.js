export function getDateFormatted() {
	var date = new Date();
	var day = String(date.getDate()).padStart(2, '0');
	var month = String(date.getMonth() + 1).padStart(2, '0');
	var year = date.getFullYear();
	var dateFormatted = day + '/' + month + '/' + year;
	
	return dateFormatted
}