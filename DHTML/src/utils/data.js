import { toISODateString } from "./date";

export const initialExams = [
	{
		exam: "Web Development",
	},
	{
		exam: "DHTMLX Suite for beginners",
		level: "Intro",
		date: toISODateString(new Date()),
		status: "active",
		subject: "Web Development",
		time: "10",
		formData: [
			{
				question: "How many UI components does DHTMLX Suite 7 comprise?",
				answers: { 0: "22", 1: "21", 2: "20", 3: "23" },
				rightAnswers: [3],
			},
			{
				question: "Which JavaScript components are included in DHTMLX Suite 7 library?",
				answers: { 0: "Grid", 1: "Calendar", 2: "Chart", 3: "Diagram" },
				rightAnswers: [0, 1, 2],
			},
			{
				question: "What is the design style of DHTMLX Suite 7 library?",
				answers: { 0: "Flat design", 1: "Material design", 2: "Skeuomorphic design" },
				rightAnswers: [1],
			},
			{
				question: "Does DHTMLX Grid support the export function to Excel?",
				answers: { 0: "No", 1: "Yes" },
				rightAnswers: [1],
			},
			{
				question: "Which chart types are presented among DHTMLX Charts?",
				answers: { 0: "Bar charts", 1: "Area charts", 2: "Org charts", 3: "Radar charts" },
				rightAnswers: [0, 1, 3],
			},
			{
				question:
					"Which JS component allows rendering a collection of objects with text, images, and other custom elements like in an online store or image gallery?",
				answers: { 0: "Calendar", 1: "TreeGrid", 2: "DataView", 3: "ColorPicker" },
				rightAnswers: [2],
			},
			{
				question: "Which JS components is DHTMLX DatePicker based on?",
				answers: { 0: "Window", 1: "Popup", 2: "Calendar", 3: "TimePicker" },
				rightAnswers: [1, 2],
			},
			{
				question: "Which JS component was used to create this questionnaire?",
				answers: { 0: "List", 1: "Toolbar", 2: "Form", 3: "Grid" },
				rightAnswers: [2],
			},
		],
	},
	{
		exam: "Programming with HTML & CSS",
		level: "Intro",
		date: toISODateString(new Date()),
		status: "active",
		subject: "Web Development",
		time: "15",
		formData: [
			{
				question: "What is the way to write a comment in HTML?",
				answers: {
					0: ";;Precede a comment with semicolons like this",
					1: "<!-- Enclose a comment like this -->",
					2: "//Precede a comment with slashes like this",
					3: "## Precede a comment with hashes like this",
				},
				rightAnswers: [1],
			},
			{
				question: "Quotes in HTML can be marked with the help of which tags?",
				answers: {
					0: "<blockquote>",
					1: "<q>",
					2: "<quote>",
					3: "<blockquote> for long quotes and <q> for smaller quotes",
				},
				rightAnswers: [3],
			},
			{
				question: "Which of these is NOT a formatting element in HTML?",
				answers: { 0: "<mark>", 1: "<link>", 2: "<del>", 3: "<small>" },
				rightAnswers: [1],
			},
			{
				question: "How can you write a comment that spans several lines in HTML?",
				answers: {
					0: "Enclose the multi-line block that you want to be commented by a single comment tag",
					1: "Join all the lines together into a single line and then enclose this entire line with the comment tags",
					2: "Enclose each line with the comment tag so that there is one tag for every line",
					3: "You cannot have a comment in HTML that is more than one line",
				},
				rightAnswers: [0],
			},
			{
				question: "Which tags in HTML allow you to indent content?",
				answers: { 0: "<indent>", 1: "<blockquote> and <q>", 2: "<backquote> and <q>", 3: "<i>" },
				rightAnswers: [1],
			},
			{
				question: "What would be a useful name to give to a password field?",
				answers: { 0: "name='1'", 1: "name='pass1'", 2: "name='aaaaaa'", 3: "name='Bob'" },
				rightAnswers: [1],
			},
			{
				question: "What is the correct way to create a text field to hold a password?",
				answers: {
					0: "<password name='pass'> </password>",
					1: "<input type='password' name='pass' />",
					2: "<input type='text' name='password' />",
					3: "<input type='text' type='password' />",
				},
				rightAnswers: [1],
			},
			{
				question: "What attribute to do you set to limit the number of letters in a text field?",
				answers: { 0: "maxsize", 1: "length", 2: "size", 3: "maxlength" },
				rightAnswers: [3],
			},
			{
				question: "You would like to highlight text on a web page. What tag would you use?",
				answers: { 0: "section", 1: "article", 2: "detail", 3: "mark" },
				rightAnswers: [3],
			},
			{
				question: "What tag would you use to make your web pages easier for searching and indexing?",
				answers: { 0: "details", 1: "wbr", 2: "time", 3: "mark" },
				rightAnswers: [2],
			},
		],
	},
	{
		exam: "JavaScript with jQuery",
		level: "Advanced",
		date: toISODateString(new Date()),
		status: "active",
		subject: "Web Development",
		time: "15",
		formData: [
			{
				question: "jQuery is a ____.",
				answers: {
					0: "JavaScript extension",
					1: "CSS framework",
					2: "JavaScript library",
					3: "JSON library",
				},
				rightAnswers: [2],
			},
			{
				question: "jQuery is written in ____.",
				answers: { 0: "Java", 1: "Python", 2: "JavaScript", 3: "C++" },
				rightAnswers: [2],
			},
			{
				question: "jQuery is intended for ____.",
				answers: {
					0: "Client-side scripting",
					1: "Server-side scripting",
					2: "Creating CSS styles",
					3: "Specifying markup",
				},
				rightAnswers: [0],
			},
			{
				question: "What features are included in jQuery?",
				answers: { 0: "Virtual DOM", 1: "Effects and animations", 2: "Ajax", 3: "JSON parsing" },
				rightAnswers: [1, 2, 3],
			},
			{
				question: "jQuery selectors are applied for selecting HTML elements based on their ____.",
				answers: {
					0: "Name",
					1: "Id ",
					2: "Classes",
					3: "Attributes and their values",
					4: "All answers are correct",
				},
				rightAnswers: [4],
			},
			{
				question: "What symbols are used to define a jQuery selector?",
				answers: { 0: "$()", 1: "#()", 2: "*()", 3: "&()" },
				rightAnswers: [0],
			},
			{
				question: "Does jQuery support CSS selector?",
				answers: { 0: "Yes", 1: "No" },
				rightAnswers: [0],
			},
			{
				question:
					"Which one of the following variants does not belong to jQuery methods for working with dimensions?",
				answers: { 0: "width()", 1: "height()", 2: "square()", 3: "outerHeight()" },
				rightAnswers: [2],
			},
			{
				question: "Which jQuery method returns all direct children of the selected element?",
				answers: { 0: "closest()", 1: "nextAll()", 2: "childen()", 3: "siblings()" },
				rightAnswers: [2],
			},
			{
				question:
					"What is a correct jQuery method for adding new content at the end of the selected elements?",
				answers: { 0: "after()", 1: "append()", 2: "prepend()", 3: "none of them" },
				rightAnswers: [1],
			},
		],
	},
	{
		exam: "Introduction to Node.js",
		level: "Intro",
		date: toISODateString(new Date()),
		status: "hidden",
		subject: "Web Development",
		time: "15",
		formData: [
			{
				question: "Node.js is a JavaScript ____.",
				answers: { 0: "Plugin", 1: "Library", 2: "Running environment", 3: "Framework" },
				rightAnswers: [2],
			},
			{
				question: "Node.js is based on ____ engine.",
				answers: { 0: "V8", 1: "Rhino", 2: "Nashorn", 3: "Chakra" },
				rightAnswers: [0],
			},
			{
				question: "Node.js utilizes asynchronous programming",
				answers: { 0: "Yes", 1: "No" },
				rightAnswers: [0],
			},
			{
				question: "What syntax is used in Node.js?",
				answers: { 0: "PHP", 1: "C++", 2: "Python", 3: "JavaScript" },
				rightAnswers: [3],
			},
			{
				question: "What system of modules is used in Node.js by default?",
				answers: { 0: "AMD", 1: "CommonJS", 2: "UMD" },
				rightAnswers: [1],
			},
			{
				question: "Express is a popular Node.js ____.",
				answers: { 0: "Framework", 1: "Extension", 2: "Library", 3: "IDE" },
				rightAnswers: [2],
			},
			{
				question: "What is the standard package manager for Node.js?",
				answers: { 0: "Yarn", 1: "Chocolatey", 2: "npm", 3: "NuGet" },
				rightAnswers: [2],
			},
			{
				question: "It is not possible to create your own Node.js modules.",
				answers: { 0: "Yes", 1: "No" },
				rightAnswers: [1],
			},
			{
				question: "Node.js can be used for____.",
				answers: {
					0: "Generating dynamic page content",
					1: "Collecting form data",
					2: "Interacting with your database",
					3: "All answers are correct",
				},
				rightAnswers: [3],
			},
			{
				question: "Node.js is a part of the MEAN technology stack ",
				answers: { 0: "Yes", 1: "No" },
				rightAnswers: [0],
			},
		],
	},
	{
		exam: "Bootstrap for beginners",
		level: "Intermediate",
		date: toISODateString(new Date()),
		status: "active",
		subject: "Web Development",
		time: "15",
		formData: [
			{
				question: "Bootstrap is a ____.",
				answers: {
					0: "JavaScript library",
					1: "CSS framework",
					2: "Back-end framework",
					3: "Programming language",
				},
				rightAnswers: [1],
			},
			{
				question: "What was the original name of Bootstrap?",
				answers: {
					0: "Facebook Blueprint",
					1: "Twitter Blueprint",
					2: "WhatsApp Blueprint",
					3: "Instagram Blueprint",
				},
				rightAnswers: [1],
			},
			{
				question: "Bootstrap is written in ____.",
				answers: { 0: "JavaScript", 1: "HTML", 2: "CSS", 3: "Sass", 4: "All answers are correct" },
				rightAnswers: [4],
			},
			{
				question: "Bootstrap features ____.",
				answers: {
					0: "Saas variables and mixins",
					1: "Responsive grid system",
					2: "Spreadsheet component",
					3: "Custom forms",
				},
				rightAnswers: [0, 1, 3],
			},
			{
				question: "It is possible to setup Boostrap via CDN (Content Delivery Network).",
				answers: { 0: "True", 1: "<False" },
				rightAnswers: [0],
			},
			{
				question: "What you cannot do with Bootstrap?",
				answers: {
					0: "Create responsive designs",
					1: "Run JavaScript on the server",
					2: "Generate different types of form layouts",
					3: "Add navigation and progress bars to a web page",
				},
				rightAnswers: [1],
			},
			{
				question: "Which design approach is pursued by Bootstrap?",
				answers: { 0: "Desktop first ", 1: "Mobile first" },
				rightAnswers: [1],
			},
			{
				question: "Does Bootstrap support JavaScript extensions?",
				answers: { 0: "Yes", 1: "No" },
				rightAnswers: [0],
			},
			{
				question: "What is a nonexistent Bootstrap grid option?",
				answers: { 0: "Small", 1: "Medium", 2: "Extra extra large", 3: "Overlarge" },
				rightAnswers: [3],
			},
			{
				question: "Bootstrap allows adding media objects ( images, videos) to a web page.",
				answers: { 0: "True", 1: "False" },
				rightAnswers: [0],
			},
		],
	},
	{
		exam: "Database Technologies",
	},
	{
		exam: "MySQL and SQL",
		level: "Intermediate",
		date: toISODateString(new Date()),
		status: "active",
		subject: "Database Technologies",
		time: "20",
		formData: [
			{
				question: "What does SQL stand for?",
				answers: {
					0: "Structured Query Language",
					1: "Structured Question Language",
					2: "Sales Qualified Language",
				},
				rightAnswers: [0],
			},
			{
				question: "Which SQL statement is used to extract the information from a database?",
				answers: { 0: "EXTRACT", 1: "SELECT", 2: "GET" },
				rightAnswers: [1],
			},
			{
				question: "Which SQL statement is used to update data in a database?",
				answers: { 0: "UPDATE", 1: "MODIFY", 2: "SAVE" },
				rightAnswers: [0],
			},
			{
				question: "Which SQL statement is used to add new data in a database?",
				answers: { 0: "ADD RESORD", 1: "INSERT NEW", 2: "INSERT INTO" },
				rightAnswers: [2],
			},
			{
				question: "What is a View in SQL?",
				answers: { 0: "Real table", 1: "Virtual Table", 2: "Result set" },
				rightAnswers: [1],
			},
			{
				question: "Which SQL statement is used to delete data from a database?",
				answers: { 0: "REMOVE", 1: "COLLAPSE", 2: "DELETE" },
				rightAnswers: [1],
			},
			{
				question: "What is a trigger in SQL?",
				answers: {
					0: "Sets of commands that get executed when an event occurs",
					1: "Group of views that are combined when an event occurs",
					2: "Group of tables that are combined when an event occurs",
				},
				rightAnswers: [0],
			},
			{
				question: "Which is not an event to fire trigger in SQL?",
				answers: { 0: "Before Insert", 1: "After Insert", 2: "On Click" },
				rightAnswers: [2],
			},
			{
				question: "The result of a SELECT statement can contain duplicate rows.",
				answers: { 0: "True", 1: "False" },
				rightAnswers: [0],
			},
			{
				question: "A NULL value is treated as a blank or 0.",
				answers: { 0: "True", 1: "False" },
				rightAnswers: [1],
			},
		],
	},
	{
		exam: "Oracle PL/SQL and SQL",
		level: "Advanced",
		date: toISODateString(new Date()),
		status: "hidden",
		subject: "Database Technologies",
		time: "11",
		formData: [
			{
				question: "Which of the following is true about the execution section of a PL/SQL block?",
				answers: {
					0: "It is enclosed between the keywords BEGIN and END",
					1: "It is a mandatory section",
					2: "It consists of the executable PL/SQL statements",
					3: "All of the above",
				},
				rightAnswers: [3],
			},
			{
				question: "The pre-defined exception NO_DATA_FOUND is raised when",
				answers: {
					0: "A null object is automatically assigned a value",
					1: "SELECT INTO statement returns no rows",
					2: "PL/SQL has an internal problem",
					3: "PL/SQL ran out of memory or memory was corrupted",
				},
				rightAnswers: [1],
			},
			{
				question:
					"You need to calculate the total of all salaries in the accounting department. Which group function should you use?",
				answers: { 0: "COUNT", 1: "TOTAL", 2: "SUM", 3: "MAX" },
				rightAnswers: [2],
			},
			{
				question: "Which of the following is not a PL/SQL unit?",
				answers: { 0: "Table", 1: "Type", 2: "Trigger", 3: "Package" },
				rightAnswers: [0],
			},
			{
				question:
					"Which clause would you use in a SELECT statement to limit the display to those employees whose salary is greater than 5000?",
				answers: {
					0: "HAVING SALARY > 5000",
					1: "WHERE SALARY > 5000",
					2: "GROUP BY SALARY > 5000",
					3: "ORDER BY SALARY > 5000.",
				},
				rightAnswers: [1],
			},
			{
				question: "Which of the following is not among the types of PL/SQL records?",
				answers: {
					0: "Table-based",
					1: "View-based",
					2: "Cursor-based records",
					3: "User-defined records",
				},
				rightAnswers: [1],
			},
			{
				question: "Which SQL statement is used to insert new data in a database?",
				answers: { 0: "INSERT INTO", 1: "INSERT NEW", 2: "ADD NEW", 3: "ADD RECORD" },
				rightAnswers: [0],
			},
			{
				question: "Which of the following is true about PL/SQL index-by tables?",
				answers: {
					0: "It is a set of key-value pairs",
					1: "Each key is unique and is used to locate the corresponding value",
					2: "The key can be either an integer or a string",
					3: "All of the above",
				},
				rightAnswers: [3],
			},
			{
				question: "Which of the following statements contains an error?",
				answers: {
					0: "SELECT empid WHERE empid = 56949 AND lastname = ‘SMITH’;",
					1: "SELECT * FROM emp WHERE empid = 493945;",
					2: "SELECT empid FROM emp WHERE empid= 493945;",
					3: "SELECT empid FROM emp;",
				},
				rightAnswers: [0],
			},
			{
				question: "How to check the version of Oracle?",
				answers: {
					0: "Select * from v_version;",
					1: "Select * from $version;",
					2: "Select * from v$version;",
					3: "Select * from users_version;",
				},
				rightAnswers: [2],
			},
		],
	},
	{
		exam: "Mobile Technologies",
	},
	{
		exam: "History of mobile devices",
		level: "Intro",
		date: toISODateString(new Date()),
		status: "hidden",
		subject: "Mobile Technologies",
		time: "10",
		formData: [
			{
				question:
					"Which telephone company introduced the first mobile telephone service (MTS), in 1946?",
				answers: {
					0: "Bell Telephone Company",
					1: "American Telephone & Telegraph Company (AT&T)",
					2: "CenturyLink",
					3: "Vivendi Universal",
				},
				rightAnswers: [1],
			},
			{
				question: "When was the first handheld mobile phone invented?",
				answers: { 0: "1940", 1: "1946", 2: "1981", 3: "1973" },
				rightAnswers: [3],
			},
			{
				question: "What was the first company that started mass production of mobile phones?",
				answers: { 0: "Nokia", 1: "Motorola", 2: "Microsoft", 3: "Siemens" },
				rightAnswers: [1],
			},
			{
				question: "When was the first mobile phone invented?",
				answers: { 0: "1940", 1: "1947", 2: "1981", 3: "1973" },
				rightAnswers: [3],
			},
			{
				question:
					"Which manufacturing company produced the first camera phone, called the J-Phone, that could send photos electronically?",
				answers: { 0: "Motorola", 1: "Sharp", 2: "Nokia", 3: "Apple" },
				rightAnswers: [1],
			},
			{
				question: "What was the text of the world’s first ever SMS message that was sent in the UK?",
				answers: { 0: "Hello, world!", 1: "I'll be back", 2: "Merry Christmas", 3: "I'm lovin' it" },
				rightAnswers: [2],
			},
			{
				question: "Which company designed the world's first smartphone?",
				answers: { 0: "IBM", 1: "Apple", 2: "LG", 3: "BlackBerry" },
				rightAnswers: [0],
			},
			{
				question: "Which is the Worlds’ largest mobile network operator (terrestrial)?",
				answers: { 0: "USA", 1: "China", 2: "India", 3: "Brazil" },
				rightAnswers: [1],
			},
			{
				question:
					"Which mobile communication technology is named after the epithet of a Scandinavian king?",
				answers: { 0: "USB", 1: "Wi-Fi", 2: "Zigbee", 3: "Bluetooth" },
				rightAnswers: [3],
			},
		],
	},
];

export const initialResults = [
	{
		exam: "DHTMLX Suite for beginners",
		level: "Intro",
		date: toISODateString(new Date(new Date().setDate(new Date().getDate() - 1))),
		result: "100%",
	},
	{
		exam: "Introduction to Node.js",
		level: "Intro",
		date: toISODateString(new Date()),
		result: "15%",
	},
	{
		exam: "Oracle PL/SQL and SQL",
		level: "Advanced",
		date: toISODateString(new Date(new Date().setDate(new Date().getDate() - 1))),
		result: "100%",
	},
	{
		exam: "Bootstrap for beginners",
		level: "Intermediate",
		date: toISODateString(new Date(new Date().setDate(new Date().getDate() - 1))),
		result: "98%",
	},
	{
		exam: "Programming with HTML & CSS",
		level: "Intro",
		date: "07/02/2021",
		result: "86%",
	},
	{
		exam: "Programming with HTML & CSS",
		level: "Intro",
		date: toISODateString(new Date(new Date().setDate(new Date().getDate() - 1))),
		result: "100%",
	},
	{
		exam: "MySQL and SQL",
		level: "Intermediate",
		date: "31/12/2020",
		result: "75%",
	},
	{
		exam: "Oracle PL/SQL and SQL",
		level: "Advanced",
		date: toISODateString(new Date(new Date().setDate(new Date().getDate() - 1))),
		result: "100%",
	},
	{
		exam: "JavaScript with jQuery",
		level: "Advanced",
		date: "01/01/2021",
		result: "97%",
	},
	{
		exam: "Bootstrap for beginners",
		level: "Intermediate",
		date: toISODateString(new Date(new Date().setDate(new Date().getDate() - 1))),
		result: "74%",
	},
	{
		exam: "Bootstrap for beginners",
		level: "Intermediate",
		date: toISODateString(new Date(new Date().setDate(new Date().getDate() - 1))),
		result: "88%",
	},
	{
		exam: "Introduction to Node.js",
		level: "Intro",
		date: toISODateString(new Date(new Date().setDate(new Date().getDate() - 1))),
		result: "99%",
	},
	{
		exam: "Programming with HTML & CSS",
		level: "Intro",
		date: toISODateString(new Date(new Date().setDate(new Date().getDate() - 1))),
		result: "100%",
	},
	{
		exam: "Programming with HTML & CSS",
		level: "Intro",
		date: toISODateString(new Date(new Date().setDate(new Date().getDate() - 1))),
		result: "100%",
	},
	{
		exam: "MySQL and SQL",
		level: "Intermediate",
		date: "31/12/2020",
		result: "75%",
	},
	{
		exam: "Bootstrap for beginners",
		level: "Intermediate",
		date: toISODateString(new Date(new Date().setDate(new Date().getDate() - 1))),
		result: "100%",
	},
	{
		exam: "DHTMLX Suite for beginners",
		level: "Intro",
		date: "18/03/2021",
		result: "50%",
	},
	{
		exam: "Oracle PL/SQL and SQL",
		level: "Advanced",
		date: toISODateString(new Date(new Date().setDate(new Date().getDate() - 1))),
		result: "65%",
	},
	{
		exam: "JavaScript with jQuery",
		level: "Advanced",
		date: toISODateString(new Date(new Date().setDate(new Date().getDate() - 1))),
		result: "64%",
	},
	{
		exam: "JavaScript with jQuery",
		level: "Advanced",
		date: toISODateString(new Date(new Date().setDate(new Date().getDate() - 1))),
		result: "73%",
	},
	{
		exam: "MySQL and SQL",
		level: "Intermediate",
		date: "31/12/2020",
		result: "85%",
	},
	{
		exam: "DHTMLX Suite for beginners",
		level: "Intro",
		date: toISODateString(new Date(new Date().setDate(new Date().getDate() - 1))),
		result: "80%",
	},
	{
		exam: "Introduction to Node.js",
		level: "Intro",
		date: toISODateString(new Date(new Date().setDate(new Date().getDate() - 1))),
		result: "100%",
	},
	{
		exam: "Introduction to Node.js",
		level: "Intro",
		date: toISODateString(new Date(new Date().setDate(new Date().getDate() - 1))),
		result: "97%",
	},
	{
		exam: "MySQL and SQL",
		level: "Intermediate",
		date: "10/02/2021",
		result: "100%",
	},
	{
		exam: "Oracle PL/SQL and SQL",
		level: "Advanced",
		date: toISODateString(new Date()),
		result: "100%",
	},
	{
		exam: "Bootstrap for beginners",
		level: "Intermediate",
		date: toISODateString(new Date(new Date().setDate(new Date().getDate() - 1))),
		result: "100%",
	},
];
