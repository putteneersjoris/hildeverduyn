import data from './content.js'


const title = data.title.text
const footer = data.footer.text

const MAIN = document.getElementById('main')
const HEADER = document.getElementById('header')
const TITLE = document.getElementById('title')
const CATEGORIES = document.getElementById('categories')
const CONTENT = document.getElementById('content')
const FOOTER = document.getElementById('footer')



function div_block(content, mode, images) {
	let block = '';

	if (parseInt(mode) === 1) {


		let image_block = '';
		for(const image of images){
			image_block += `<img src=` +image + ` alt='airbnb and bed and breakfast in eeklo. Belgium'><br>`
			console.log(image)
		}
		
		block = `<div id="one_container">
			 <div id="one_text">
			 <h2>Div 1</h2>
			 <p>` + content + `</p>
			 </div>
			 <div id="one_pics">
			 <h2>Div 2</h2>
			 <p>` + image_block + `</p>
			 </div>
			 </div>
			`

	} 


	if (parseInt(mode) === 2) {
		block = '<div>' + content + '</div>';
	}
	
	if (parseInt(mode) === 3) {
		block = '<section>' + content + '</section>';
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
		const div_content = document.createElement('div')
		div_content.innerHTML = div_block( data.categories[category].content, data.categories[category].mode, data.categories[category].images)
		CONTENT.appendChild(div_content)
		console.log(data.categories[category].images)
	
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


