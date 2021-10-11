
export const convertToUTC = (dayOfWeek: number | null, hour: number, minute: number, offsetMinutes: number) =>{
	const modTimeZone = offsetMinutes % 60
	let newDay = null
	let newMinute = minute + modTimeZone
	let hourOffset = 0
	let dayOffset = 0
	if (newMinute > 59){
		newMinute = newMinute - 60
		hourOffset = 1
	}else if (newMinute < 0){
		newMinute = 60 + newMinute
		hourOffset = -1
	}
	let newHour = hour + hourOffset + ((offsetMinutes-modTimeZone)/60)
	if (newHour > 23){
		newHour = newHour - 24
		dayOffset = 1
	}
	else if(newHour < 0){
		newHour = 24 + newHour
		dayOffset = -1
	}
	if (dayOffset !==0 && dayOfWeek){
		newDay = dayOfWeek + dayOffset
		if (newDay > 6){
			newDay = 0
		}else if(newDay < 0){
			newDay = 6
		}
	}
	return {
		dayOfWeek: newDay,
		hour: newHour,
		minute: newMinute,
	}
}



