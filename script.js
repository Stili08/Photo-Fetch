const toggle = document.getElementById("toggle")
const fetchBtn = document.getElementById("fetchBtn")
const loadMore = document.getElementById("loadMore")
const grid = document.querySelector(".grid")
function applyGrayscale(img){
if(toggle.checked){
img.style.filter = "grayscale(100%)"
}else{
img.style.filter = "none"
}}
function loadSkeletons(){
const skeletons = []
for(let i=0; i<4; i++){
const skeleton = document.createElement("div")
skeleton.className = "skeleton-card"
grid.appendChild(skeleton)
skeletons.push(skeleton)
}
return skeletons
}
toggle.addEventListener("click", function(){
document.querySelectorAll(".grid img").forEach(img => {
applyGrayscale(img)
})
})
fetchBtn.addEventListener("click", async function(){
grid.innerHTML = ""
const skeletons = loadSkeletons()
for(let i = 0; i<4; i++){
const res = await fetch("https://picsum.photos/600/400")
console.log(res)
skeletons.forEach(skeleton => skeleton.remove())
const card = document.createElement("div")
card.className = "card"
const img =  document.createElement("img")
img.src = res.url
const info = document.createElement("div")
info.className = "info"
info.innerHTML = `<h4>Lukas Budimaier</h4>
<p>https://unsplash.com/photos/pwaaqfoMibl</p>`
card.appendChild(img)
card.appendChild(info)
grid.appendChild(card)
applyGrayscale(img)
}
})
loadMore.addEventListener("click", async function(){
const skeletons = loadSkeletons()
for(let i=0; i<4; i++){
const res = await fetch("https://picsum.photos/600/400")
skeletons.forEach(skeleton=>skeleton.remove())
const card = document.createElement("div")
card.className = "card"
const img = document.createElement("img")
img.src = res.url
const info = document.createElement("div")
info.className = "info"
info.innerHTML = `<h4>Lukas Budimaier</h4>
<p>https://unsplash.com/photos/pwaaqfoMibl</p>`
card.appendChild(img)
card.appendChild(info)
grid.appendChild(card)
applyGrayscale(img)
}
})