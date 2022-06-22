



window.addEventListener('load', () => {
	const form = document.querySelector("#new-task-form");
	const input = document.querySelector("#new-task-input");
	const list_el = document.querySelector("#tasks");

	form.addEventListener('submit', (e) => {
		e.preventDefault();

		const task = input.value;

    if (!task) {
      alert("Empty")
      return;
    }


	var itemList = document.getElementsByClassName("text");
	[].forEach.call(itemList, function(el) {
		// print(el.value);
		
	});
		  
	document.getElementById('new-task-input').value='';
	
	// const form = document.getElementById('new-task-form');
	// form.addEventListener('submit', function handleSubmit() {

	
	//   // 👇️ Send data to server here
	
	//   // 👇️ Reset form here
	//   form.reset();
	// });
		

		const task_el = document.createElement('div');
		task_el.classList.add('task');

		const task_content_el = document.createElement('div');
		task_content_el.classList.add('content');

		task_el.appendChild(task_content_el);

		const task_input_el = document.createElement('input');
		task_input_el.classList.add('text');
		task_input_el.type = 'text';
		task_input_el.value = task;
		task_input_el.setAttribute('readonly', 'readonly');

		task_content_el.appendChild(task_input_el);

		const task_actions_el = document.createElement('div');
		task_actions_el.classList.add('actions');
		
		const task_edit_el = document.createElement('button');
		task_edit_el.classList.add('edit');
		task_edit_el.innerText = 'Edit';

		const task_delete_el = document.createElement('button');
		task_delete_el.classList.add('delete');
		task_delete_el.innerText = 'Delete';

		task_actions_el.appendChild(task_edit_el);
		task_actions_el.appendChild(task_delete_el);

		task_el.appendChild(task_actions_el);

		list_el.appendChild(task_el);

		let rawValue = input.value;

    rawValue = "";


// HELP HERE
// I want to be able to grab all values that are currently on the page


    // console.log(task);



    // var itemList = document.getElementsByClassName("text");
    // [].forEach.call(itemList, function(el) {
    //     print(el.value);
        
    // });
  
    // myFunction();


    

		task_edit_el.addEventListener('click', (e) => {
			if (task_edit_el.innerText.toLowerCase() == "edit") {
				task_edit_el.innerText = "Save";
				task_input_el.removeAttribute("readonly");
				task_input_el.focus();
			} else {
				task_edit_el.innerText = "Edit";
				task_input_el.setAttribute("readonly", "readonly");
			}
		});

		task_delete_el.addEventListener('click', (e) => {
			list_el.removeChild(task_el);


    //   console.log(list_el);

		});
	});
});

var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

today = mm + '/' + dd + '/' + yyyy;
document.write(today);











