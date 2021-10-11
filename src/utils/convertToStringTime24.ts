export const convertToStringTime24 = (hour: number, minute: number) => {
	let newHour = hour.toString()
	let newMinute = minute.toString()
	if (hour >= 0 && hour < 10) {
		newHour = "0" + hour;
	}
	if (minute >= 0 && minute < 10) {
		newMinute = "0" + minute;
	}
	return `${newHour}:${newMinute}`
}
