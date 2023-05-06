import { View } from "dhx-optimus";

export default class Sidebar extends View {
	init() {
		const sidebar = new dhx.Sidebar(null, {
			css: "dhx_demo-sidebar",
			data: [
				{
					id: "logo",
					type: "customHTML",
					css: "dhx_demo-sidebar__logo",
					// html: "<img src='./assets/img/logo.svg' alt='dhtmlxLogo'>",
					// html: "<img src='./assets/img/logo.png' alt='dhtmlxLogo'>",
				},
				{
					id: "exams",
					value: "All exams",
					icon: "mdi mdi-star-circle",
				},
				{
					id: "results",
					value: "Results",
					icon: "mdi mdi-medal",
				},
				{
					id: "certificates",
					value: "Certificates",
					icon: "mdi mdi-stamper",
				},
				{
					id: "reports",
					value: "Reports",
					icon: "mdi mdi-chart-areaspline",
				},
				{
					id: "settings",
					value: "Settings",
					icon: "mdi mdi-tune",
				},
				{
					type: "spacer",
				},
			],
		});

		this.observe(
			s => s.mode,
			id => {
				const currentActive = sidebar.data.find(i => i.active);
				if (currentActive) {
					sidebar.data.update(currentActive.id, { active: false });
				}
				sidebar.data.update(id, { active: true });
			}
		);

		sidebar.events.on("click", id => {
			const currentActive = sidebar.data.find(i => i.active);
			if (currentActive && currentActive.id === id) {
				return;
			}
			this.fire("view:modeChanged", [id]);
		});

		return sidebar;
	}
}
