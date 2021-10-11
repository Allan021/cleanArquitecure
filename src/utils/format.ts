export const formatDate = (date: Date, locale: string = navigator.language, now: Date = new Date()): string => {
	const millisInASecond: number = 1000;
	const millisInAMinute: number = 60 * millisInASecond;
	const millisInAnHour: number = 60 * millisInAMinute;
	const millisInADay: number = 24 * millisInAnHour;
	const millisInAWeek: number = 7 * millisInADay;
	const millisInAMonth: number = 30 * millisInADay;
	const millisInAYear: number = 365 * millisInADay;
	const intervals = [
		{ge: millisInAYear, divisor: millisInAYear, unit: 'year'},
		{ge: millisInAMonth, divisor: millisInAMonth, unit: 'month'},
		{ge: millisInAWeek, divisor: millisInAWeek, unit: 'week'},
		{ge: millisInADay, divisor: millisInADay, unit: 'day'},
		{ge: millisInAnHour, divisor: millisInAnHour, unit: 'hour'},
		{ge: millisInAMinute, divisor: millisInAMinute, unit: 'minute'},
		{ge: 30 * millisInASecond, divisor: millisInASecond, unit: 'seconds'},
		{ge: 0, divisor: 1, text: 'just now'},
	];
	const nowTime: number = now.getTime();
	const dateTime: number = date.getTime();
	const diffTime: number = nowTime - dateTime;
	const absoluteDiffTime: number = Math.abs(diffTime);
	const formatter = new Intl.RelativeTimeFormat(locale, {});
	for (const interval of intervals) {
		if (absoluteDiffTime >= interval.ge) {
			const x = Math.round(Math.abs(absoluteDiffTime) / interval.divisor);
			const isFuture = diffTime < 0;
			// @ts-ignore
			return interval.text ? interval.text : formatter.format(isFuture ? x : -x, interval.unit);
		}
	}
	return "just_now";
}

export const formatPhoneNumber = (phoneNumber: string): string => {
	const chars: string[] = phoneNumber.split("");
	const numberLast4Digits: string = chars.splice(-4).join("");
	const numberFirst3Digits: string = chars.splice(-3).join("");
	const areaCode: string = chars.splice(-3).join("");
	const countryCode: string = chars.join("");
	return `${countryCode} (${areaCode}) ${numberFirst3Digits}-${numberLast4Digits}`;
}

export const formatBytes = (bytes: number): string => {
	const sizes = ["Bytes", "KB", "MB", "GB", "TB"];

	const i: number = Math.floor(Math.log(bytes) / Math.log(1024));
	const quantity: string = (bytes / 1024 ** i).toFixed(2);
	const unit: string = sizes[i];

	return `${quantity} ${unit}`;
};
