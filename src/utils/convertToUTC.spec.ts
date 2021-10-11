import {convertToUTC} from "./convertToUTC";

test("convert GMT-4:30 to UTC time", () => {
	const actualValue: any = convertToUTC(6, 23, 35, 270);
	const expectedValue: any = {
		dayOfWeek: 0,
		hour: 4,
		minute: 5
		};
	expect(actualValue).toStrictEqual(expectedValue);
})
test("convert GMT-5 to UTC time", () => {
	const actualValue: any = convertToUTC(6, 23, 35, 300);
	const expectedValue: any = {
		dayOfWeek: 0,
		hour: 4,
		minute: 35
	};
	expect(actualValue).toStrictEqual(expectedValue);
})
test("convert GMT 0 to UTC time", () => {
	const actualValue: any = convertToUTC(6, 23, 35, 0);
	const expectedValue: any = {
		dayOfWeek: 6,
		hour: 23,
		minute: 35
	};
	expect(actualValue).toStrictEqual(expectedValue);
})
test("convert GMT+1 to UTC time", () => {
	const actualValue: any = convertToUTC(6, 23, 35, -60);
	const expectedValue: any = {
		dayOfWeek: 6,
		hour: 22,
		minute: 35
	};
	expect(actualValue).toStrictEqual(expectedValue);
})
test("convert GMT+2 to UTC time", () => {
	const actualValue: any = convertToUTC(0, 1, 35, -120);
	const expectedValue: any = {
		dayOfWeek: 6,
		hour: 23,
		minute: 35
	};
	expect(actualValue).toStrictEqual(expectedValue);
})
test("convert GMT+4:30 to UTC time", () => {
	const actualValue: any = convertToUTC(1, 4, 30, -270);
	const expectedValue: any = {
		dayOfWeek: 1,
		hour: 0,
		minute: 0
	};
	expect(actualValue).toStrictEqual(expectedValue);
})
