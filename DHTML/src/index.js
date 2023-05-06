import "./assets/scss/index.scss";

import { App, TopView } from "dhx-optimus";
import Store from "dhx-optimus-store";

import { getUrlMode } from "./utils/url";
import { initialExams, initialResults } from "./utils/data";

import TopLayout from "./views/TopLayout";
import ConfigWindow from "./views/ConfigWindow";
import UrlManager from "./components/UrlManager";
import { getUniqueArr } from "./utils/helpers";
import { toISODateString } from "./utils/date";

const initialState = {
	mode: getUrlMode(window.location) || "exams",
};

export class ExamSystemApp extends App {
	init() {
		this.store = new Store(initialState);
		this.params.store = this.store;
		this.state = this.store.getState();
		this.exams = new dhx.TreeGridCollection({
			init: item => {
				if (item.subject) {
					item.parent = item.subject;
				} else {
					item.id = item.exam;
				}
				return item;
			},
		});
		this.exams.parse(initialExams);
		this.results = new dhx.DataCollection();
		this.results.parse(initialResults);
		this.subscribe();
		dhx.scrollViewConfig.enable = true;

		this.show(null, TopLayout, { exams: this.exams, results: this.results });
		this.use(UrlManager);
	}

	subscribe() {
		this.on("view:modeChanged", id => {
			this.state.mode = id || "exams";
		});

		this.on("data:examFilterApply", formData => {
			const filterValues = JSON.parse(JSON.stringify(formData));
			filterValues.status =
				filterValues.status.active && filterValues.status.hidden
					? false
					: filterValues.status.active
					? "active"
					: filterValues.status.hidden
					? "hidden"
					: false;
			this.exams.filter();
			if (!Object.values(filterValues).some(i => i)) {
				return;
			}
			for (const key in filterValues) {
				if (filterValues[key]) {
					this.exams.filter({
						by: key,
						match: filterValues[key],
					});
				}
			}
		});

		this.on("view:viewExam", id => {
			this.show(TopView, ConfigWindow, {
				action: "view",
				item: this.exams.getItem(id),
			});
		});

		this.on("view:addExam", () => {
			this.show(TopView, ConfigWindow, {
				action: "add",
				subjects: getUniqueArr(this.exams.map(i => i.subject)).map(i => {
					return { id: i, value: i };
				}),
			});
		});

		this.on("view:editExam", id => {
			this.show(TopView, ConfigWindow, {
				action: "edit",
				item: this.exams.getItem(id),
			});
		});

		this.on("view:removeExam", id => {
			const item = this.exams.getItem(id);
			if (item) {
				dhx.confirm({
					header: "DHTMLX Confirm Box",
					text: `Are you sure you want to delete the "${item.exam}" exam?`,
				}).then(res => {
					if (res) {
						const itemParent = item.parent;
						this.exams.remove(id);
						if (!this.exams.haveItems(itemParent)) {
							this.exams.remove(itemParent);
						}
					}
				});
			}
		});

		this.on("data:addExam", item => {
			const uniqueSubjects = getUniqueArr(this.exams.map(i => i.subject));
			if (!uniqueSubjects.includes(item.subject)) {
				this.exams.add({ exam: item.subject });
			}
			this.exams.add({ ...item });
			this.exams.sort();
		});

		this.on("data:editExam", item => {
			const itemParent = item.parent;

			const uniqueSubjects = getUniqueArr(this.exams.map(i => i.subject));
			if (!uniqueSubjects.includes(item.subject)) {
				this.exams.add({ exam: item.subject });
			}

			this.exams.update(item.id, { ...item });
			this.exams.sort();

			if (!this.exams.haveItems(itemParent)) {
				this.exams.remove(itemParent);
			}
		});

		this.on("data:addResult", (item, results) => {
			let result = 0;
			for (const key in results) {
				if (key.includes("question")) {
					const questionIndex = key.split("-")[1];
					const question = item.formData[questionIndex];
					if (question.rightAnswers.length > 1) {
						let counter = 0;
						for (const answer in results[key]) {
							const countForOne = 1 / question.rightAnswers.length;
							if (results[key][answer] && question.rightAnswers.includes(Number(answer))) {
								counter += countForOne;
							} else if (results[key][answer]) {
								counter -= countForOne / 2;
							}
						}
						if (question.rightAnswers.length === Object.keys(results[key]).length) {
							counter = 0;
						}
						result += counter;
					} else {
						Object.entries(question.answers).forEach(answer => {
							if (
								results[key] === answer[1] &&
								question.rightAnswers.includes(Number(answer[0]))
							) {
								result += 1;
							}
						});
					}
				}
			}
			result = (result / item.formData.length) * 100 + "%";

			this.results.add({
				exam: item.exam,
				level: item.level,
				date: toISODateString(new Date()),
				result,
			});
		});

		this.exams.events.on("change", id => {
			if (id) {
				this.exams.filter(i => i);
				this.fire("data:change", []);
			}
		});
	}
}
