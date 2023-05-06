import { View } from "dhx-optimus";
import Grid from "./ExamsViews/Grid";
import Filter from "./ExamsViews/Filter";

export default class Exams extends View {
	init() {
		return new dhx.Layout(null, {
			rows: [
				{
					id: "filter",
					height: "content",
					padding: "0 12px 0 12px",
					init: cell => this.show(cell, Filter, { exams: this.params.exams }),
				},
				{
					id: "grid",
					padding: "0 20px 20px 20px",
					init: cell => this.show(cell, Grid, { exams: this.params.exams }),
				},
			],
		});
	}
}
