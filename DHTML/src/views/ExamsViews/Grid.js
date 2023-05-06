import { View } from "dhx-optimus";
import { locateNodeByClassName } from "../../utils/helpers";

export default class Grid extends View {
	init() {
		const dataset = this.params.exams;

		const grid = new dhx.TreeGrid(null, {
			css: "dhx_demo-exam-grid",
			columns: [
				{ id: "exam", header: [{ text: "Exam" }], minWidth: 260 },
				{
					id: "view",
					header: [{ text: "View exam", align: "center" }],
					htmlEnable: true,
					sortable: false,
					template: (_, cell) =>
						cell.parent !== dataset.getRoot()
							? `<div class="dhx_demo-exam-grid__view">
							<button class="dhx_button dhx_button--color_primary dhx_button--size_small dhx_button--view_flat dhx_button--circle">View exam</button>
						</div>`
							: false,
					minWidth: 120,
				},
				{ id: "level", header: [{ text: "Difficulty level" }], align: "left" },
				{
					id: "date",
					header: [{ text: "Due date", align: "left" }],
					align: "left",
					type: "date",
					dateFormat: "%d/%m/%Y",
					minWidth: 120,
				},
				{
					id: "status",
					header: [{ text: "Status", align: "center" }],
					htmlEnable: true,
					template: i =>
						i
							? `<div class="dhx_demo-exam-grid__status"><div class="dhx_demo-${i}">${i}</div></div>`
							: false,
					minWidth: 120,
				},
				{
					id: "time",
					header: [{ text: "Average test time", align: "center" }],
					align: "center",
					sortable: false,
					template: i => (i ? `${i} min` : false),
					minWidth: 120,
				},
				{
					id: "controls",
					header: [{ text: "Exam controls", align: "center" }],
					sortable: false,
					htmlEnable: true,
					align: "center",
					template: (_, cell) =>
						cell.parent !== dataset.getRoot()
							? `<div class="dhx_demo-exam-grid__controls">
									<button class="dhx_button edit">
										<i class="mdi mdi-pencil dhx_demo-exam-grid__controls__icon"></i>
									</button>
									<button class="dhx_button remove">
										<i class="mdi mdi-delete dhx_demo-exam-grid__controls__icon"></i>
									</button>
								</div>`
							: false,
					minWidth: 120,
				},
			],
			autoWidth: true,
			data: dataset,
		});

		grid.events.on("cellClick", (row, col, e) => {
			if (locateNodeByClassName(e.target, "dhx_button")) {
				if (col.id === "view") {
					this.fire("view:viewExam", [row.id]);
				} else if (col.id === "controls") {
					if (locateNodeByClassName(e.target, "edit")) {
						this.fire("view:editExam", [row.id]);
					} else if (locateNodeByClassName(e.target, "remove")) {
						this.fire("view:removeExam", [row.id]);
					}
				}
			}
		});

		return grid;
	}
}
