export const delay = time =>
	new Promise(resolve => {
		setTimeout(resolve, time * 1000);
	});
