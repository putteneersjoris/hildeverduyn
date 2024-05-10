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

const array_categories = Object.keys(data.categories)
const n_keys_categories = array_categories.length

let next_or_prev_id= ''
let current_category = ''

function prev_or_next_category(prev_or_next){
	let current_category_id =array_categories.indexOf(current_category)
	if(prev_or_next=='prev'){
		next_or_prev_id = array_categories[(current_category_id + (n_keys_categories-1)) % n_keys_categories]
	}
	
	if(prev_or_next=='next'){
		next_or_prev_id = array_categories[(current_category_id + 1) % n_keys_categories]
	}

	document.getElementById(next_or_prev_id).click();
	current_category = next_or_prev_id
}


function div_begin(){
	const begin = document.createElement('div')
	begin.id = 'begin'
	begin.innerHTML = 'begin testing'
	return begin
}

function div_end(){
	const end = document.createElement('div')
	end.id = 'end'

	const button_next = document.createElement('button')
	button_next.innerHTML =  '<span>next</span>'
	const button_previous = document.createElement('button')
	button_previous.innerHTML =  '<span>previous</span>'
	button_previous.onclick = function(){prev_or_next_category('prev')}
	button_next.onclick = function(){prev_or_next_category('next')}
	end.appendChild(button_previous)
	end.appendChild(button_next)
	return end
}


function block(id, content, mode, images, order){
	const container = document.createElement('div')
	const text = document.createElement('div')
	const title_text = document.createElement('div')
	const content_text = document.createElement('div')
	const pics = document.createElement('div')
	const title_pics = document.createElement('div')
	const content_pics = document.createElement('div')

	container.classList.add('container' + '_' + mode)
	container.id = id
	text.classList.add('text' + '_' + mode)
	title_text.classList.add('title_text' + '_' + mode)
	content_text.classList.add('content_text' + '_' + mode)
	content_text.innerHTML = content
	pics.classList.add('pics' + '_' + mode)
	title_pics.classList.add('title_pics' + '_' + mode)
	content_pics.classList.add('content_pics' + '_' + mode)
	
	//select all butons and set underline to none 
	const buttons = document.querySelectorAll('button');

	buttons.forEach(button => {
	  button.style.textDecoration = 'none';
	});
	document.getElementById(id).style.textDecoration='underline'


	for(const image of images){
		let pic = document.createElement('img')	
		pic.src = image
		pic.alt = ALT
		pic.classList.add('pic' + '_' + mode)
		if(mode == 'vertical'){pic.style.width = '100%'}
		if(mode == 'horizontal'){pic.style.width = '100%'}
		content_pics.appendChild(pic)
	}
	
	//vertical split
	if(mode == 'vertical'){
		container.style.width = '100%';
		container.style.margin = '0 auto';
		container.style.display = 'flex';
		container.style.justifyContent = 'space-between';

		text.style.width = '30%';
		text.style.order = order;
		pics.style.width = '65%';
	}
		
	//horizontal split
	if(mode == 'horizontal'){
		container.style.width = '100%';
		container.style.margin = '0 auto';

		pics.style.width = '100%';
		pics.style.marginBottom = '20px';
		
		text.style.width = '100%';
		text.style.marginBottom = '20px';
		text.style.order = order;
	}
	
	text.appendChild(title_text)
	text.appendChild(content_text)
	pics.appendChild(title_pics)
	pics.appendChild(content_pics)
	container.appendChild(text)
	container.appendChild(pics)

	CONTENT.innerHTML = ''
	CONTENT.appendChild(div_begin())
	CONTENT.appendChild(container)
	CONTENT.appendChild(div_end())

	current_category=id
}




export function initial_content(){
	// initial content 
	TITLE.innerHTML = title
	FOOTER.innerHTML = footer + '-' + new Date().getFullYear()
	
	//constuct the categories

	
	for(const category in data.categories){
	
		//content divs
		const id = data.categories[category].id
		const content = data.categories[category].content
		const mode = data.categories[category].mode
		const images  = data.categories[category].images
		const order  = data.categories[category].order
	
		//categories
		const button_category = document.createElement('button')
		button_category.innerHTML = data.categories[category].text
		button_category.onclick = function(){block( id, content , mode , images, order)}
		button_category.className = 'category' 
		button_category.id = id
		CATEGORIES.appendChild(button_category)
	}

	// initial styling
	const frontpage = 'over'
	document.getElementById(frontpage).click();

}

export function adjusted_content() {
	let width = window.innerWidth
	if(width < 500){
		CATEGORIES.style.display = 'inline'
		CATEGORIES.style.color = 'blue'
		FOOTER.style.fontSize = '0.5em'	
	} else {
		//CATEGORIES.style.block = 'block'
		//FOOTER.style.fontSize = '1em'	
	}
}


