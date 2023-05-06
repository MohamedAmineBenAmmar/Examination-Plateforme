import { View } from "dhx-optimus";

export default class Results extends View {
	init() {
		const grid = new dhx.Grid(null, {
			columns: [
				{ id: "exam", header: [{ text: "Exam" }], gravity: 2 },
				{ id: "level", header: [{ text: "Difficulty level" }], align: "left" },
				{
					id: "date",
					header: [{ text: "Due date" }],
					align: "left",
					type: "date",
					dateFormat: "%d/%m/%Y",
				},
				{ id: "result", header: [{ text: "Result", align: "center" }], align: "center" },
			],
			autoWidth: true,
			data: this.params.results,
		});

		const layout = new dhx.Layout(null, {
			rows: [
				{
					id: "grid",
					padding: 20,
				},
			],
		});

		layout.getCell("grid").attach(grid);

		return layout;
	}
}
