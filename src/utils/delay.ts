const delay = async (delayMillis: number): Promise<void> => {
	await new Promise(res => {
		setTimeout(res, delayMillis);
	});
}

export default delay;
