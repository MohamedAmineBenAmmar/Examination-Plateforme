import { View } from "dhx-optimus";

import Sidebar from "./Sidebar";
import Toolbar from "./Toolbar";
import Exams from "./Exams";
import Empty from "./Empty";
import Results from "./Results";

export default class TopLayout extends View {
	init() {
		const layout = new dhx.Layout(null, {
			cols: [
				{
					id: "sidebar",
					width: "content",
					init: cell => this.show(cell, Sidebar),
				},
				{
					rows: [
						{
							id: "toolbar",
							height: "content",
							init: cell => this.show(cell, Toolbar),
						},
						{
							id: "container",
						},
					],
				},
			],
		});

		this.observe(
			s => s.mode,
			id => {
				switch (id) {
					case "exams":
						this.show(layout.getCell("container"), Exams, { exams: this.params.exams });
						break;
					case "results":
						this.show(layout.getCell("container"), Results, { results: this.params.results });
						break;
					default:
						this.show(layout.getCell("container"), Empty);
						break;
				}
			}
		);

		return layout;
	}
}
