import { Component } from "dhx-optimus";
import { createBrowserHistory } from "history";
import { getUrlMode } from "../utils/url";

const history = createBrowserHistory();

export default class UrlManager extends Component {
	init() {
		history.listen((location, action) => {
			if (action === "POP") {
				this.fire("view:modeChanged", [getUrlMode(location)]);
			}
		});

		this.observe(
			state => state.mode,
			mode => {
				if (getUrlMode(history.location) !== mode) {
					history.push(`#${mode}`);
				}
			}
		);
	}
}
