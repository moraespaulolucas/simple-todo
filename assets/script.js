const input = document.getElementById("input_item")
const button = document.getElementById("btn_add_item")
const list = document.getElementById("todo_items")

const create_item = (innerContent) => {
	const item = document.createElement("li")
	const item_id = `item_${list.childElementCount++}`
	item.innerHTML = `<input type="checkbox" id="${item_id}"/><label for="${item_id}">${innerContent}</label>`
	return item
}

const addItem = () => {
	if (input.value) {
		list.appendChild(create_item(input.value))
		input.value = ""
	}
}

button.addEventListener("click", (e) => addItem())
