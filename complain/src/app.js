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
		isRequired: true,
		inputValue: "",
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
		isRequired: true,
		inputValue: "",
	},
];
// following array is generating and developing for backend team
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
					// for designation in case other is selected we need to use text input value as value for this element
					if (eachInput.name == "designation" && eachInput.value == "Other:") {
						document.querySelector("#radio-inputs .other-input").value
							? (eachInitialVariables.inputValue = document.querySelector("#radio-inputs .other-input").value)
							: "Other";
						userInformation.designation = eachInitialVariables.inputValue;
					}
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
	// 3.check if describe input is filled
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
	$.post('complain.php',{data: userinputs},function(data){
		document.write(data);
	});
});