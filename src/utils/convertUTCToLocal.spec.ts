import {convertUTCToLocal} from "./convertUTCToLocal";

test("convert UTC time to GMT-4:30", () => {
	const actualValue: any = convertUTCToLocal(1, 3, 20, 270);
	const expectedValue: any = {
		dayOfWeek: 0,
		hour: 22,
		minute: 50
	};
	expect(actualValue).toStrictEqual(expectedValue);
})
test("convert UTC time to GMT-5", () => {
	const actualValue: any = convertUTCToLocal(6, 23, 35, 300);
	const expectedValue: any = {
		dayOfWeek: 6,
		hour: 18,
		minute: 35
	};
	expect(actualValue).toStrictEqual(expectedValue);
})
test("convert UTC time to GMT-5 2:35/0 => 21:35/6", () => {
	const actualValue: any = convertUTCToLocal(0, 2, 35, 300);
	const expectedValue: any = {
		dayOfWeek: 6,
		hour: 21,
		minute: 35
	};
	expect(actualValue).toStrictEqual(expectedValue);
})
test("convert UTC time to GMT+2 23:20/6 => 1:20/0", () => {
	const actualValue: any = convertUTCToLocal(6, 23, 20, -120);
	const expectedValue: any = {
		dayOfWeek: 0,
		hour: 1,
		minute: 20
	};
	expect(actualValue).toStrictEqual(expectedValue);
})
test("convert UTC time to GMT+2 23:20 => 1:20", () => {
	const actualValue: any = convertUTCToLocal(null, 23, 20, -120);
	const expectedValue: any = {
		dayOfWeek: null,
		hour: 1,
		minute: 20
	};
	expect(actualValue).toStrictEqual(expectedValue);
})
test("convert UTC time to GMT-4:30 3:20 => 22:50", () => {
	const actualValue: any = convertUTCToLocal(null, 3, 20, 270);
	const expectedValue: any = {
		dayOfWeek: null,
		hour: 22,
		minute: 50
	};
	expect(actualValue).toStrictEqual(expectedValue);
})

