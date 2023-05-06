export function getUniqueArr(arr) {
	return Array.from(new Set(arr)).filter(el => el !== undefined);
}

export function locateNodeByClassName(target, className) {
	if (target instanceof Event) {
		target = target.target;
	}
	while (target) {
		if (className) {
			if (target.classList && target.classList.contains(className)) {
				return target;
			}
		} else if (target.getAttribute && target.getAttribute("dhx_id")) {
			return target;
		}
		target = target.parentNode;
	}
}
