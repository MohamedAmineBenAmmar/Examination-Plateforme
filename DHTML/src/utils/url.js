export function getUrlMode(location) {
	return location.hash.substring(1).split("&")[0];
}
