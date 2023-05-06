import { View } from "dhx-optimus";

export default class Toolbar extends View {
	init() {
		const toolbar = new dhx.Toolbar(null, {
			css: "dhx_demo-toolbar",
			data: [
				{
					id: "addButton",
					type: "button",
					value: "Add exam",
					circle: true,
					icon: "dxi dxi-plus",
				},
				{
					type: "spacer",
				},
				{
					type: "imageButton",
					src: "./assets/img/avatar.png",
					count: 15,
				},
			],
		});

		toolbar.events.on("click", id => {
			if (id === "addButton") {
				this.fire("view:addExam", []);
			}
		});

		return toolbar;
	}
}
