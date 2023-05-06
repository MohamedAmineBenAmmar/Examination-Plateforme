import { View } from "dhx-optimus";

const emptyQuestion = {
	question: "",
	answers: { 0: "", 1: "", 2: "", 3: "" },
	rightAnswers: [],
};

export default class ConfigWindow extends View {
	init() {
		this.action = this.params.action;
		this.item =
			this.action === "add"
				? { formData: [JSON.parse(JSON.stringify(emptyQuestion))] }
				: this.params.item && JSON.parse(JSON.stringify(this.params.item));

		this.initWindow();
		this.initForm();

		this.window.show();
		return this.window;
	}

	initWindow() {
		if (this.window) {
			this.window.destructor();
		}
		const config = { width: 940, height: 680, footer: true, modal: true };
		switch (this.action) {
			case "view":
				config.title = `View an exam`;
				break;
			case "add":
				config.title = "Add a new exam";
				break;
			case "edit":
				config.title = `Editing: ${this.item.exam}`;
				break;
			default:
				break;
		}

		this.window = new dhx.Window(config);
		this.window.footer.data.add({
			type: "spacer",
		});
		this.window.footer.data.add({
			id: "cancel",
			type: "button",
			value: "Cancel",
			view: "link",
			circle: true,
		});

		if (this.action !== "view") {
			this.window.header.data.add(
				{
					id: "import",
					type: "button",
					value: "Import JSON",
					view: "link",
					circle: true,
				},
				2
			);
			this.window.header.data.add(
				{
					id: "export",
					type: "button",
					value: "Export JSON",
					view: "link",
					circle: true,
				},
				3
			);

			this.window.footer.data.add({
				id: "save",
				type: "button",
				value: "Save",
				circle: true,
			});
		} else {
			this.window.footer.data.add({
				id: "send",
				type: "button",
				value: "Send answers",
				circle: true,
			});
		}

		this.window.header.events.on("click", id => {
			switch (id) {
				case "import":
					const input = document.createElement("input");
					input.setAttribute("type", "file");
					input.style.display = "none";
					input.onchange = () => {
						const files = input.files;
						if (files.length <= 0) {
							return false;
						}

						const fr = new FileReader();
						fr.onload = e => {
							this.item = JSON.parse(e.target.result);
							this.initForm();
						};

						fr.readAsText(files.item(0));
					};

					document.body.appendChild(input);
					input.click();
					document.body.removeChild(input);
					break;
				case "export":
					const filename = `${this.item.exam}.json`;
					const element = document.createElement("a");
					const clearItem = {};
					for (const key in this.item) {
						if (!key.includes("$")) {
							clearItem[key] = this.item[key];
						}
					}
					element.setAttribute(
						"href",
						"data:text/json;charset=utf-8," +
							encodeURIComponent(JSON.stringify(clearItem, null, 4))
					);
					element.setAttribute("download", filename);
					element.style.display = "none";
					document.body.appendChild(element);
					element.click();
					document.body.removeChild(element);
					break;
			}
		});

		this.window.footer.events.on("click", id => {
			switch (id) {
				case "save":
					if (!this.form.validate()) {
						return;
					}
					this.updateData(this.form.getValue());
					this.fire(this.action === "edit" ? "data:editExam" : "data:addExam", [this.item]);
					break;
				case "send":
					this.buttonClick = true;
					if (!this.form.validate()) {
						return;
					}
					this.fire("data:addResult", [this.item, this.form.getValue()]);
					break;
			}
			this.window.hide();
		});
	}

	initForm() {
		if (this.form) {
			this.form.destructor();
		}
		if (this.action === "edit" || this.action === "add") {
			this.form = new dhx.Form(null, {
				css: "dhx_demo-form",
				rows: [
					{
						css: "dhx_demo-form__row",
						cols: [
							{
								name: "subject",
								type: "input",
								label: "Subject",
								width: "calc(calc(100% - 40px) / 4 * 2)",
								value: this.item && this.item.subject,
								required: true,
							},
							{
								name: "level",
								type: "combo",
								label: "Difficulty level",
								width: "calc(calc(100% - 40px) / 4)",
								value: this.item && this.item.level,
								data: [
									{ id: "Intro", value: "Intro" },
									{ id: "Intermediate", value: "Intermediate" },
									{ id: "Advanced", value: "Advanced" },
								],
							},
							{
								name: "date",
								type: "datePicker",
								dateFormat: "%d/%m/%Y",
								label: "Due date",
								width: "calc(calc(100% - 40px) / 4)",
								value: this.item && this.item.date,
							},
						],
					},
					{
						css: "dhx_demo-form__row",
						cols: [
							{
								name: "exam",
								type: "input",
								label: "Exam",
								width: "calc(calc(100% - 40px) / 4 * 2)",
								value: this.item && this.item.exam,
								required: true,
							},
							{
								name: "status",
								type: "combo",
								label: "Status",
								width: "calc(calc(100% - 40px) / 4)",
								value: this.item && this.item.status,
								readOnly: true,
								data: [
									{ id: "hidden", value: "Hidden" },
									{ id: "active", value: "Active" },
								],
							},
							{
								name: "time",
								type: "input",
								label: "Average test time",
								width: "calc(calc(100% - 40px) / 4)",
								value: this.item && this.item.time,
							},
						],
					},
					...this.getQuestionsTemplate(this.item && this.item.formData),
				],
			});
		} else {
			this.form = new dhx.Form(null, {
				css: "dhx_demo-form",
				rows: [
					{
						type: "text",
						value: this.item.exam && this.item.exam,
						css: "dhx_demo-form__title",
					},
					...this.getQuestionsTemplate(this.item && this.item.formData),
				],
			});

			this.form.events.on("change", () => {
				this.buttonClick = false;
			});

			this.form.events.on("afterValidate", () => {
				if (!this.buttonClick) {
					this.form.clear("validation");
				}
			});
		}

		this.form.events.on("click", id => {
			if (id.includes("remove")) {
				if (id.includes("question")) {
					const ids = id.split("-");
					delete this.item.formData[ids[2]];
					this.item.formData = this.item.formData.filter(i => i);
				} else {
					const ids = id.split("-");
					const question = this.item.formData[ids[2]];
					delete question.answers[ids[3]];
					if (question.rightAnswers.includes(Number(ids[3]))) {
						question.rightAnswers = question.rightAnswers.filter(
							right => right !== Number(ids[3])
						);
					}
				}
			} else if (id.includes("add")) {
				if (id.includes("answer")) {
					const questionId = id.split("-")[2];
					const answers = this.item.formData[questionId].answers;
					const newIndex = Object.keys(answers).length + 1;
					answers[newIndex] = "";
				} else {
					this.item.formData.push(emptyQuestion);
				}
				this.updateData(this.form.getValue());
			}

			const formBody = this.form.getRootView().node.el;
			if (formBody) {
				this.scrollState = {
					x: formBody.scrollLeft,
					y: formBody.scrollTop,
				};
			}

			this.initForm();
		});

		dhx.awaitRedraw().then(() => {
			const formBody = this.form.getRootView().node.el;
			formBody.scrollLeft =
				typeof this.scrollState.x === "number" ? this.scrollState.x : formBody.scrollLeft;
			formBody.scrollTop =
				typeof this.scrollState.y === "number" ? this.scrollState.y : formBody.scrollTop;
		});

		this.window.attach(this.form);
	}

	getQuestionsTemplate(questions) {
		const result = [];
		if (this.action !== "view") {
			this.i = this.i++ || 1;

			if (questions && questions.length) {
				questions.forEach((question, questionIndex) => {
					const inputWidth = questions.length > 1 ? "calc(100% - 48px)" : "100%";
					const isButtonHidden = !(questions.length > 1);

					result.push({
						rows: [
							{
								cols: [
									{
										name: `question-${questionIndex}`,
										type: "input",
										label: `Question ${questionIndex + 1}`,
										width: inputWidth,
										value: `${question.question}`,
									},
									{
										name: `remove-question-${questionIndex}`,
										type: "button",
										color: "secondary",
										circle: true,
										view: "link",
										padding: "25px 8px",
										icon: "mdi mdi-trash-can-outline",
										hidden: isButtonHidden,
									},
								],
							},
							{
								rows: [
									...this.getAnswers(question, questionIndex),
									{
										cols: [
											{},
											{
												name: `add-answer-${questionIndex}`,
												type: "button",
												text: "Add new answer",
												circle: true,
												view: "link",
											},
										],
									},
								],
							},
						],
					});
				});
			} else {
				const inputWidth = !questions || !(questions.length > 1) ? "100%" : "calc(100% - 48px)";
				const isButtonHidden = !questions || !(questions.length > 1);

				result.push({
					rows: [
						{
							cols: [
								{
									name: `question-0`,
									type: "input",
									label: `Question 1`,
									width: inputWidth,
								},
								{
									name: `remove-question-0`,
									type: "button",
									color: "secondary",
									circle: true,
									view: "link",
									padding: "25px 8px",
									icon: "mdi mdi-trash-can-outline",
									hidden: isButtonHidden,
								},
							],
						},
						{
							rows: [
								...this.getAnswers(),
								{
									cols: [
										{},
										{
											name: "add-answer-0",
											type: "button",
											text: "Add new answer",
											circle: true,
											view: "link",
										},
									],
								},
							],
						},
					],
				});
			}

			result.push({
				css: "dhx_demo-form__add-question",
				cols: [
					{},
					{
						name: "add-question",
						type: "button",
						text: "Add new question",
						circle: true,
						view: "link",
					},
				],
			});
		} else {
			questions.forEach((question, questionIndex) => {
				const isRadio = question.rightAnswers.length === 1;
				const answerOptions = [];

				for (const key in question.answers) {
					answerOptions.push({
						id: `${key}`,
						type: isRadio ? "radioButton" : "checkbox",
						text: question.answers[key],
						value: question.answers[key],
					});
				}

				result.push({
					css: "dhx_demo-form__view-question",
					name: `question-${questionIndex}`,
					type: isRadio ? "radioGroup" : "checkboxGroup",
					required: true,
					label: question.question,
					options: { rows: answerOptions },
				});
			});
		}

		return result;
	}

	getAnswers(question, questionIndex) {
		if (!question && !questionIndex) {
			question = emptyQuestion;
			questionIndex = 0;
		}
		const result = [];
		for (const key in question.answers) {
			const inputWidth = !(Object.keys(question.answers).length > 1)
				? "calc(100% - 42px)"
				: "calc(100% - 48px - 42px)";
			const isButtonHidden = !(Object.keys(question.answers).length > 1);
			result.push({
				cols: [
					{
						name: `right-answer-${questionIndex}-${key}`,
						type: "checkbox",
						padding: "5px 0",
						checked: question.rightAnswers.includes(Number(key)),
					},
					{
						name: `answer-${questionIndex}-${key}`,
						type: "input",
						value: question.answers[key],
						width: inputWidth,
					},
					{
						name: `remove-answer-${questionIndex}-${key}`,
						type: "button",
						color: "secondary",
						circle: true,
						view: "link",
						padding: "0 8px",
						icon: "mdi mdi-trash-can-outline",
						hidden: isButtonHidden,
					},
				],
			});
		}
		return result;
	}

	updateData(formData) {
		for (const key in formData) {
			if (
				key === "subject" ||
				key === "level" ||
				key === "date" ||
				key === "exam" ||
				key === "status" ||
				key === "time"
			) {
				this.item[key] = formData[key];
			} else {
				if (key.includes("question")) {
					const questionIndex = key.split("-")[1];
					this.item.formData[questionIndex].question = formData[key];
				}
				if (key.includes("answer")) {
					if (key.includes("right")) {
						const questionIndex = key.split("-")[2];
						const rightAnswer = Number(key.split("-")[3]);
						let rightAnswers = this.item.formData[questionIndex].rightAnswers;

						if (formData[key]) {
							rightAnswers.push(rightAnswer);
						} else if (rightAnswers.includes(rightAnswer)) {
							rightAnswers = rightAnswers.filter(right => right !== rightAnswer);
						}
						this.item.formData[questionIndex].rightAnswers = [...new Set(rightAnswers)].sort();
					} else {
						const questionIndex = key.split("-")[1];
						const answerIndex = key.split("-")[2];
						this.item.formData[questionIndex].answers[answerIndex] = formData[key];
					}
				}
			}
		}
	}
}
