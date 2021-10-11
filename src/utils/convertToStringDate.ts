import {convertToStringTime12} from "./convertToStringTime12";

const getDay = (day: number, language: string) => {
	const weekdayEn = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
	const weekdayEs = ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"]
	if (language === "en") {
		return weekdayEn[day]
	} else {
		return weekdayEs[day]
	}
}

export const convertToStringDate = (dayOfWeek: number|null, hour: number, minute: number, language: string) => {
		const time = convertToStringTime12(hour, minute)
		if (dayOfWeek !== null){
			const resultDay = getDay(dayOfWeek, language)
			if (language === "en") {
				return `Every ${resultDay} at ${time}`
			} else {
				return `Cada ${resultDay} a las ${time}`
			}
		}else{
			if (language === "en") {
				return `Daily at ${time}`
			} else {
				return `Todos los días a las ${time}`
			}
		}
}
