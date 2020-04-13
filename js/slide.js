const slider = document.querySelector(".slider")
const sections = document.querySelectorAll(".slider section")
const ancors = document.querySelectorAll("header nav a")
let size = window.innerWidth
let counter = 0
let isFree = false;
let trn = "transform 0.3s ease-out"

function next() {
	if (counter >= sections.length - 1) return;
	slider.style.transition = trn
	counter++
	slider.style.transform = "translateX(" + (-size * counter) + "px)"
	setActiveClass(counter)
}

function prev() {
	if (counter <= 0) return;
	slider.style.transition = trn
	counter--
	slider.style.transform = "translateX(" + (-size * counter) + "px)"
	setActiveClass(counter)
}

function setActiveClass(pos) {
	for (let i = 0; i < ancors.length; i++) {
		if (ancors[i].className === "active")
			ancors[i].className = "";
	}
	ancors[pos].className = "active";
}

window.addEventListener('resize', () => {
	size = window.innerWidth
	counter--
	next()
});

slider.addEventListener("transitionend", () => {
	isFree = true
})

slider.addEventListener("wheel", (event) => {
	if (isFree || counter === 0 || counter === sections.length - 1)
		(event.deltaY < 0) ? prev() : next()
	isFree = false
})


for (let i = 0; i < ancors.length; i++) {
	ancors[i].addEventListener("click", () => {
		setActiveClass(i)
		slider.style.transition = trn
		counter = i
		slider.style.transform = "translateX(" + (-size * counter) + "px)"
	});
} 
