export interface Form {
	error: null | string;
}

export interface FormControl<T> {
	value: T;
	error: null | string;
	dirty: boolean;
}

export const formDependencies = (form: {}, field: keyof FormControl<any> = "value"): any[] => {
	const entries: [string, FormControl<any>][] = Object.entries<FormControl<any>>(form);
	const nonErrorEntries: [string, FormControl<any>][] = entries.filter((entry) => {
		return entry[0] !== "error";
	})
	const values: any[] = nonErrorEntries.map((entry) => {
		return entry[1][field];
	});

	return values;
}
