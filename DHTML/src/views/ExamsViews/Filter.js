import { View } from "dhx-optimus";
import { getUniqueArr } from "../../utils/helpers";

export default class Filter extends View {
	init() {
		const form = (this.form = new dhx.Form(null, {
			css: "dhx_demo-exam-filter",
			cols: [
				{
					name: "exam",
					type: "combo",
					label: "Exam",
					labelPosition: "top",
					placeholder: "All exams",
					padding: "0 12px 0 0",
					width: 270,
				},
				{
					name: "subject",
					type: "combo",
					label: "Subject",
					labelPosition: "top",
					placeholder: "All subjects",
					padding: "0 12px 0 0",
					width: 270,
				},
				{
					name: "level",
					type: "combo",
					label: "Difficulty level",
					labelPosition: "top",
					placeholder: "All levels",
					padding: "0 12px 0 0",
					width: 270,
				},
				{
					name: "status",
					type: "checkboxGroup",
					label: "Status",
					css: "dhx_demo-filter-form__checkboxGroup",
					padding: "0 12px 0 0",
					width: 200,
					options: {
						cols: [
							{
								id: "active",
								type: "checkbox",
								text: "Active",
							},
							{
								id: "hidden",
								type: "checkbox",
								text: "Hidden",
							},
						],
					},
				},
				{
					name: "apply",
					type: "button",
					text: "Apply filter",
					size: "medium",
					padding: "25px 0 0 0",
					width: 142,
					full: true,
					circle: true,
				},
			],
		}));

		form.events.on("click", id => {
			if (id === "apply") {
				this.fire("data:examFilterApply", [form.getValue()]);
			}
		});

		this.params.exams.filter();
		this.examFilterDataParse();

		this.on("data:change", () => {
			this.form.clear();
		});

		return form;
	}

	examFilterDataParse() {
		const exams = this.params.exams;

		const examNames = exams
			.map(i => {
				return !exams.haveItems(i.id) ? { id: i.exam, value: i.exam } : null;
			})
			.filter(i => i !== null);
		this.form.getItem("exam").getWidget().data.parse(examNames);

		const subjects = getUniqueArr(exams.map(i => i.subject)).map(i => {
			return { id: i, value: i };
		});
		this.form.getItem("subject").getWidget().data.parse(subjects);

		const levels = getUniqueArr(exams.map(i => i.level)).map(i => {
			return { id: i, value: i };
		});
		this.form.getItem("level").getWidget().data.parse(levels);
	}
}
