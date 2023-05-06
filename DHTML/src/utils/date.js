export const toISODateString = date =>
	`${date.getDate().toString().padStart(2, "0")}/${(date.getMonth() + 1)
		.toString()
		.padStart(2, "0")}/${date.getFullYear()}`;
