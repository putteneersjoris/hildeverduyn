import data from './content.js'

const title = data.title.text
const footer = data.footer.text

const MAIN = document.getElementById('main')
const HEADER = document.getElementById('header')
const TITLE = document.getElementById('title')
const CATEGORIES = document.getElementById('categories')
const CONTENT = document.getElementById('content')
const FOOTER = document.getElementById('footer')

const ALT = 'airbnb and bed and breakfast in eeklo. Belgium'

function block_one(content, images){
	const one_container = document.createElement('div')
	const one_text = document.createElement('div')
	const one_title_text = document.createElement('div')
	const one_content_text = document.createElement('div')
	const one_pics = document.createElement('div')
	const one_title_pics = document.createElement('div')
	const one_content_pics = document.createElement('div')

	one_container.classList.add('one_container')
	one_text.classList.add('one_text')
	one_title_text.classList.add('one_title_text')
	one_content_text.classList.add('one_content_text')
	one_content_text.innerHTML = content
	one_pics.classList.add('one_pics')
	one_title_pics.classList.add('one_title_pics')
	one_content_pics.classList.add('one_content_pics')

	for(const image of images){
		let one_pic = document.createElement('img')	
		one_pic.src = image
		one_pic.alt = ALT
		one_pic.classList.add('one_pic')
		one_content_pics.appendChild(one_pic)
	}
	
	one_text.appendChild(one_title_text)
	one_text.appendChild(one_content_text)
	one_pics.appendChild(one_title_pics)
	one_pics.appendChild(one_content_pics)
	one_container.appendChild(one_text)
	one_container.appendChild(one_pics)
	
	return one_container

	//`
	//<div id="one_container">
	//	<div id="one_text">
	//		<h2>Div 1</h2>
	//		<p>`+ content +`</p>
	//	</div>
	//	<div id="one_pics">
	//		<h2>Div 2</h2>
	//		<p>` + image_block + `</p>
	//	</div>
	//</div>`

}



function block_two(content, images){
	const two_container = document.createElement('div')
	const two_text = document.createElement('div')
	const two_title_text = document.createElement('div')
	const two_content_text = document.createElement('div')
	const two_pics = document.createElement('div')
	const two_title_pics = document.createElement('div')
	const two_content_pics = document.createElement('div')

	two_container.classList.add('two_container')
	two_text.classList.add('two_text')
	two_title_text.classList.add('two_title_text')
	two_content_text.classList.add('two_content_text')
	two_content_text.innerHTML = content
	two_pics.classList.add('two_pics')
	two_title_pics.classList.add('two_title_pics')
	two_content_pics.classList.add('two_content_pics')

	for(const image of images){
		let two_pic = document.createElement('img')	
		two_pic.src = image
		two_pic.alt = ALT
		two_pic.classList.add('two_pic')
		two_content_pics.appendChild(two_pic)
	}
	
	two_text.appendChild(two_title_text)
	two_text.appendChild(two_content_text)
	two_pics.appendChild(two_title_pics)
	two_pics.appendChild(two_content_pics)
	two_container.appendChild(two_text)
	two_container.appendChild(two_pics)
	
	return two_container


}


function div_block(content, mode, images) {
 
	let block
	
	if (parseInt(mode) === 1) {
		block = block_one(content, images)	
	} 


	if (parseInt(mode) === 2) {
		block = block_two(content, images)	
	}
	
	if (parseInt(mode) === 3) {
		const two_container = document.createElement('div')
		two_container.id = 'two_container'
		two_container.innerHTML = content 

	}

	return block;
}




export function initial_content(){
	// initial content 
	TITLE.innerHTML = title
	FOOTER.innerHTML = footer + '-' + new Date().getFullYear()
	
	//constuct the categories
	for(const category in data.categories){
		const span_category = document.createElement('span')
		span_category.innerHTML = data.categories[category].text
		span_category.id = data.categories[category].id
		span_category.className = 'category' 
		
		CATEGORIES.appendChild(span_category)

		span_category.style.border = '1px solid red'

		//content divs
		const content = data.categories[category].content
		const mode = data.categories[category].mode
		const images  = data.categories[category].images
		
		CONTENT.appendChild(div_block(content , mode , images))
	
	}

	// initial styling

//	MAIN.style.border = '3px solid green'
//	HEADER.style.border = '8px solid blue'
//	TITLE.style.border = '1px solid pink'
//	CATEGORIES.style.border = '1px solid white'
//	CONTENT.style.border = '1px solid red'
//	FOOTER.style.border = '1px solid yellow'

}

export function adjusted_content() {
	let width = window.innerWidth
	if(width < 500){
		//CATEGORIES.style.display = 'inline' CATEGORIES.style.color = 'blue' FOOTER.style.fontSize = '0.5em'	
	} else {
		//CATEGORIES.style.block = 'block'
		//FOOTER.style.fontSize = '1em'	
	}
}


