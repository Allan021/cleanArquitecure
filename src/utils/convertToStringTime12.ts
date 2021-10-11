export const convertToStringTime12 = (hour: number, minute: number) => {
	let newHour = hour
	let meridiem = "AM"
	let newMinute = minute.toString()
	if (hour > 12) {
		newHour = hour - 12
		meridiem = "PM"
	} else if (hour === 0) {
		newHour = 12
	}
	if (minute >= 0 && minute < 10) {
		newMinute = "0" + minute;
	}
	return `${newHour}:${newMinute} ${meridiem}`
}
