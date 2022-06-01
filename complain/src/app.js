// Objects for diffrent parts of the form
// input type="text"
const textInputType = [
	{
		name: "name",
		labelText: "Name",
		inputType: "text",
		isRequiered: true,
	},
	{
		name: "mobile",
		labelText: "Mobile No",
		inputType: "tel",
		isRequiered: true,
	},
	{
		name: "email",
		labelText: "Email ID",
		inputType: "email",
		isRequiered: true,
	},
	{
		name: "age",
		labelText: "Age",
		inputType: "number",
		isRequiered: true,
	},
];
// input type="radio"
const radioInputType = [
	{
		name: "gender",
		title: "Gender",
		options: [
			{ header: "Female", exteraInput: false },
			{ header: "Male", exteraInput: false },
			{ header: "Other", exteraInput: false },
		],
		isRequiered: true,
	},
	{
		name: "designation",
		title: "Designation",
		options: [
			{ header: "Intern", exteraInput: false },
			{ header: "Employee", exteraInput: false },
			{ header: "Client", exteraInput: false },
			{ header: "Other:", exteraInput: true },
		],
		isRequiered: true,
	},
];
const multiInputType = [
	{ title: "HR (3 Months)" },
	{ title: "Psychology (6 Months)" },
	{ title: "Front-end Developer(3 Months)" },
	{ title: "Back-end Developer(3 Months)" },
	{ title: "Full Stack Developer(3 Months)" },
	{ title: "Event management(3 Months)" },
	{ title: "Campus Ambassador(3 Months)" },
	{ title: "Business Development(3 Months)" },
	{ title: "Content Writer(3 Months)" },
	{ title: "Graphic Designer(3 Months)" },
	{ title: "Video Editor/Making(3 Months)" },
	{ title: "Social Media Marketing(3 Months)" },
	{ title: "Digital Marketing(3 Months)" },
	{ title: "Market Research(3 Months)" },
	{ title: "UI/UX Designer(3 Months)" },
	{ title: "Instagram Influencer (3 Months)" },
	{ title: "Company Secretary" },
	{ title: "Finance" },
	{ title: "Auditor" },
];
// ----------------------------------------------------------------------
// creating elements based on objects
// input type="text"
const textInputTypeElements = textInputType.map((eachTextInput) => {
	return `
  <div class="text-info-input">
      <input type="${eachTextInput.inputType}" name="${eachTextInput.name}" autocomplete="off" value="" required>
      <label for="${eachTextInput.name}" class="label-name">
        <span class="content-name">
        ${eachTextInput.labelText}
        ${eachTextInput.isRequiered ? "<em>*</em>" : ""}
        </span>
    </label>
  </div>`;
});
document.getElementById("text-inputs").innerHTML = textInputTypeElements.join("");
// ----------------------------------------------------------------------
// input type="radio"
const radioInputTypeElements = radioInputType.map((eachRadioInput) => {
	const titleElement = `
		<p class="content-name">
			${eachRadioInput.title}
			${eachRadioInput.isRequiered ? "<em>*</em>" : ""}	
		</p>
	`;
	const optionsElements = eachRadioInput.options.map((eachOption) => {
		return `
		<div>
			<input type="radio" id="${eachOption.header}" name="${eachRadioInput.name}" value="${eachOption.header}" required>
			<label for="${eachOption.header}">
				<span class="content-option">
					${eachOption.header}
				</span>
				${eachOption.exteraInput
					? `<input class="other-input" type="text" name="${eachOption.header}" autocomplete="off" value="">`
					: ""}
			</label>
		</div>`;
	});
	return `
	<div class="radio-info-input">
		${titleElement}
		<div class="options">
			${optionsElements.join("")}
		</div>
	</div>`;
});
document.getElementById("radio-inputs").innerHTML = radioInputTypeElements.join("");
// ----------------------------------------------------------------------
// multi-options
/* create html in 2 steps
		1. creating options based on multyInputType array
		2. creating the whole .drop-down part
*/
const multiInputOptionsElement = multiInputType.map((eachOption) => {
	return `
	<li class="choice" id="${eachOption.title}">
		<i class="fa-solid fa-check"></i>
		<span>${eachOption.title}</span>
	</li>
	`;
});
const inputMultiOptions = document.getElementById("multi-options");
inputMultiOptions.innerHTML = `
	<div class="drop-down">
		<div class="question">
			<div id="reasons" class="content-name">
				<p class="content-name">
					What brought you here? <em>*</em>
				</p>
			</div>
			<div class="btn-container">
				<i class="fa-solid fa-caret-down close"></i>
			</div>
		</div>
		<div class="answers">
			<ul class="close">
				${multiInputOptionsElement.join("")}
			</ul>
		</div>
	</div>
`;
// eventListnere
/* menueBtn is for opening .drop-down menu and closing it */
const menuBtn = document.querySelector("#multi-options .fa-caret-down");
menuBtn.parentElement.addEventListener("click", () => {
	// if menu is close (actions to open it):
	if (menuBtn.classList.contains("close")) {
		menuBtn.classList.remove("close");
		menuBtn.classList.add("open");
		document.querySelector("#multi-options .answers ul").classList.remove("close");
		document.querySelector("#multi-options .answers ul").classList.add("open");
		// if menu is open (actions to close it):
	} else {
		menuBtn.classList.remove("open");
		menuBtn.classList.add("close");
		document.querySelector("#multi-options .answers ul").classList.remove("open");
		document.querySelector("#multi-options .answers ul").classList.add("close");
	}
});
// adding eventListener to menu options
const reasons = document.getElementById("reasons");
const choices = document.querySelectorAll(".choice");
let crossBtns = document.querySelectorAll("#reasons .fa-solid");
choices.forEach((each) => {
	each.addEventListener("click", () => {
		selectUnselectOption(each.id);
	});
});
// following function creates selected reasons elements to be shown.
function createReasonElement (inputTitle){
	return `
	<span class="selected">
		<p>${inputTitle}</p>
		<i class="fa-solid fa-xmark"></i>
	</span>
	`;
}
// this function is responsible for things that need to be done while selecting an option in the menu
function selectUnselectOption (optionId){
	const optionElement = document.getElementById(optionId);
	// if an option is selected
	if (!optionElement.classList.contains("selected")) {
		// 1.adding class selected and 2.showing check icon
		optionElement.classList.add("selected");
		optionElement.firstElementChild.style.opacity = "1";
		// adding selected option to menuBar
		addNewReason(createReasonElement(optionElement.lastElementChild.innerHTML));
		// if an option is unselected:
	} else {
		// 1.removing class selected and 2.hidding check icon
		optionElement.classList.remove("selected");
		optionElement.firstElementChild.style.opacity = "0";
		// removing unselected option from menuBar
		removePrevReason(createReasonElement(optionElement.lastElementChild.innerHTML));
	}
}
// following function adds new selected reason to old selected ones
function addNewReason (newReason){
	reasons.innerHTML = `${reasons.innerHTML}${newReason}`;
	// removing question title
	document.querySelector("#reasons .content-name").style.display = "none";
	// after adding new reason crossBtns need to be updated
	crossBtns = document.querySelectorAll("#reasons .fa-solid");
	crossBtnFunction();
}
// following function removes unselected reason from selected ones
function removePrevReason (prevReason){
	reasons.innerHTML = `${reasons.innerHTML.replace(prevReason, "")}`;
	// if the condition is true it means all selected reasons are unselected so we need to show the question again
	if (reasons.childElementCount === 1) {
		document.querySelector("#reasons .content-name").style.display = "flex";
	}
}
// eventListener for crossBtn of selected reasons
function crossBtnFunction (){
	crossBtns.forEach((eachBtn) => {
		eachBtn.addEventListener("click", () => {
			removePrevReason(createReasonElement(eachBtn.parentNode.firstElementChild.innerHTML));
			selectUnselectOption(eachBtn.parentNode.firstElementChild.innerHTML);
			crossBtns = document.querySelectorAll("#reasons .fa-solid");
			crossBtnFunction();
		});
	});
}
