import {formatBytes} from "./format";

test("that a number less than 1024 is formatted as Bytes", () => {
	const expectedValue: String = "876.00 Bytes";
	const actualValue: String = formatBytes(876);
	expect(actualValue).toBe(expectedValue);
})
