// Objects for diffrent parts of the form
// input type="text"
const textInputType = [
	{
		name: "name",
		labelText: "Name",
		inputType: "text",
		isRequired: true,
		inputValue: "",
	},
	{
		name: "mobile",
		labelText: "Mobile No",
		inputType: "tel",
		isRequired: true,
		inputValue: "",
	},
	{
		name: "email",
		labelText: "Email ID",
		inputType: "email",
		isRequired: true,
		inputValue: "",
	},
	{
		name: "age",
		labelText: "Age",
		inputType: "number",
		isRequired: true,
		inputValue: "",
	},
	{
		name: "city",
		labelText: "City of Residence",
		inputType: "text",
		isRequired: true,
		inputValue: "",
	},
	{
		name: "occupation",
		labelText: "Education/Occupation",
		inputType: "text",
		isRequired: true,
		inputValue: "",
	},
	{
		name: "emergencyContact",
		labelText: "Emergency Contact Number",
		inputType: "tel",
		isRequired: true,
		inputValue: "",
	},
];
// input type="radio"
const radioInputType = [
	{
		name: "gender",
		title: "Gender",
		options: [ "Female", "Male", "Other" ],
		isRequired: true,
		inputValue: "",
	},
	{
		name: "therapyHistory",
		title: "How you been to therapy before or tried any other alternatives?",
		options: [ "Yes", "No" ],
		isRequired: true,
		inputValue: "",
	},
	{
		name: "suicidalThoughts",
		title: "How you ever had any suicidal thoughts?",
		options: [ "Yes", "No" ],
		isRequired: true,
		inputValue: "",
	},
	{
		name: "prefferedLanguange",
		title: "Preffered Languange?",
		options: [ "Hindi", "English", "Punjabi", "Gujarati", "Kutchi" ],
		isRequired: true,
		inputValue: "",
	},
];
// input type: multi-options
const multiInputType = [
	{
		title: "Career Issues",
	},
	{
		title: "Family Issues",
	},
	{
		title: "Friendship problems",
	},
	{
		title: "Job Troubles",
	},
	{
		title: "Learning problems",
	},
	{
		title: "Mental Health Issues",
	},
	{
		title: "Romantic Relationship Troubles",
	},
	{
		title: "School/College Issues",
	},
	{
		title: "Harrasment",
	},
	{
		title: "Pandemic Issues",
	},
	{
		title: "Death & Grief",
	},
];
// following variables is generating and developing for backend team
let userSelectedOptions = [];
let userInformation = {};
// ----------------------------------------------------------------------
// creating elements based on objects
// input type="text"
const textInputTypeElements = textInputType.map((eachTextInput) => {
	return `
  <div class="text-info-input">
      <input type="${eachTextInput.inputType}" name="${eachTextInput.name}" autocomplete="off" value="${eachTextInput.inputValue}" required>
      <label for="${eachTextInput.name}" class="label-name">
        <span class="content-name">
        ${eachTextInput.labelText}
        ${eachTextInput.isRequired ? "<em>*</em>" : ""}
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
			${eachRadioInput.isRequired ? "<em>*</em>" : ""}	
		</p>
	`;
	const optionsElements = eachRadioInput.options.map((eachOption) => {
		return `
		<div>
			<input type="radio" id="${eachOption}" name="${eachRadioInput.name}" value="${eachOption}" required>
			<label for="${eachOption}">
				<span class="content-option">
					${eachOption}
				</span>
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
		<span class="choice-text">${eachOption.title}</span>
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
// defining an eventListener on document to close the menu
document.querySelector("body").addEventListener("click", (event) => {
	if (
		!event.target.classList.contains("question") &&
		!event.target.classList.contains("choice") &&
		!event.target.classList.contains("fa-caret-down") &&
		!event.target.classList.contains("content-name") &&
		!event.target.classList.contains("choice-text")
	) {
		closeDropDownMenu();
	}
});
/* menueBtn is for opening .drop-down menu and closing it */
const menuBtn = document.querySelector("#multi-options .fa-caret-down");
document.querySelector(".question").addEventListener("click", () => {
	// if menu is close:
	if (menuBtn.classList.contains("close")) {
		openDropDownMenu();
		// if menu is open:
	} else {
		closeDropDownMenu();
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
// -------------------------------------------------Functions
// following functions opens the dropDown menu
function openDropDownMenu (){
	menuBtn.classList.remove("close");
	menuBtn.classList.add("open");
	document.querySelector("#multi-options .answers ul").classList.remove("close");
	document.querySelector("#multi-options .answers ul").classList.add("open");
}
// followng function closes the dropDown menu
function closeDropDownMenu (){
	menuBtn.classList.remove("open");
	menuBtn.classList.add("close");
	document.querySelector("#multi-options .answers ul").classList.remove("open");
	document.querySelector("#multi-options .answers ul").classList.add("close");
}
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
		// 2.adding selected option to menuBar
		addNewReason(createReasonElement(optionElement.lastElementChild.innerHTML));
		// 3.adding selected option to userSelectedOptions array
		userSelectedOptions.push(optionElement.lastElementChild.innerHTML);
		// if an option is unselected:
	} else {
		// 1.removing class selected and 2.hidding check icon
		optionElement.classList.remove("selected");
		optionElement.firstElementChild.style.opacity = "0";
		// 2.removing unselected option from menuBar
		removePrevReason(createReasonElement(optionElement.lastElementChild.innerHTML));
		// 3.removing unselected option from userSelectedOptions array
		userSelectedOptions = userSelectedOptions.filter((item) => {
			if (item !== optionElement.lastElementChild.innerHTML) {
				return item;
			}
		});
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
// ------------------------------------------------------------------
// collecting informations by submiting form
document.querySelector("#btn input").addEventListener("click", (event) => {
	event.preventDefault();
	// to check if all the fields are filled the following variable is defined
	let isAllRequiredFilled = true;
	// cleaning userInfo to prevent duplicate information if submit is 				clicked more than once
	userInformation = {};
	/*
	text input information collection
			1. query all the inputs
			2. check if item is both required and filled
			3. update corresponding inputValue of textInputType array
			4. creating key-values of an object element
	*/
	// task #1
	document.querySelectorAll("#text-inputs input").forEach((eachInput) => {
		textInputType.map((eachInitialVariables) => {
			// task #2
			if (eachInput.name === eachInitialVariables.name) {
				// task #3
				eachInitialVariables.inputValue = eachInput.value;
				// task #4
				userInformation[eachInput.name] = eachInput.value;
			}
		});
	});
	/* 
		radio input information Collection
			1. query all the inputs
			2. find input that is checked
			3. update corresponding inputValue of radioInputType array
			4. creating key-values of an object element
	*/
	// task #1
	document.querySelectorAll("#radio-inputs input").forEach((eachInput) => {
		// task #2
		if (eachInput.checked) {
			radioInputType.map((eachInitialVariables) => {
				if (eachInput.name === eachInitialVariables.name) {
					// task #3
					eachInitialVariables.inputValue = eachInput.value;
					// task #4
					userInformation[eachInput.name] = eachInput.value;
				}
			});
		}
	});
	/*
		textarea input information collection
			1. creating a temp object key = describe, value = element.innerHtml
	*/
	// task #1
	userInformation["describe"] = document.querySelector("#describe .textarea").innerHTML;
	/*
		drop down menu input information
			1. adding userSelectedOptions array to userInformation
	*/

	// task #1
	userInformation["selectedReasons"] = userSelectedOptions;
	// ----------------------------------------------------------------
	// check if all the required inputes are filled
	// to prevent several alert pop up we use isAllRequiredFilled
	// 1.check if required text inputs are filled
	textInputType.forEach((each) => {
		if (each.isRequired && !each.inputValue) {
			isAllRequiredFilled = false;
		}
	});
	// 2.check if required radio inputs are filled
	radioInputType.forEach((each) => {
		if (each.isRequired && !each.inputValue) {
			isAllRequiredFilled = false;
		}
	});
	// 3.check if required dropDown input is filled
	if (!userSelectedOptions.length) {
		isAllRequiredFilled = false;
	}
	// 4.check if describe input is filled
	if (!document.querySelector("#describe .textarea").innerHTML) {
		isAllRequiredFilled = false;
	}
	isAllRequiredFilled ? null : alert("Please fill all requiered fields!");
});

var submitbtn = document.getElementById("submitbtn");
var loader = document.getElementById('loader')
loader.style.display = 'none'
submitbtn.addEventListener("click",function(userinputs){
	loader.style.display = 'flex'
	submitbtn.style.filter = 'saturate(0)'
	submitbtn.style.pointerEvents = 'none'
	var userinputs = JSON.stringify(userInformation);
	$.post('gethelp.php',{data: userinputs},function(data){
		document.write(data);
	});
});

