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
function createCard(photo){
const card = document.createElement("div")
card.className = "card"
const img = document.createElement("img")
img.src=`https://picsum.photos/id/${photo.id}/600/400`
const info = document.createElement("div")
info.className = "info"
info.innerHTML = `<h4>${photo.author}</h4>
<a href="${photo.url}" target="_blank">${photo.url}</a>`
card.appendChild(img)
card.appendChild(info)
grid.appendChild(card)
applyGrayscale(img)
}
toggle.addEventListener("click", () =>{
document.querySelectorAll(".grid img").forEach(img => {
applyGrayscale(img)
})
})
fetchBtn.addEventListener("click", async ()=>{
grid.innerHTML = ""
const skeletons = loadSkeletons()
const res = await fetch('https://picsum.photos/v2/list?page=' + (Math.floor(Math.random() * 10) + 1) + '&limit=4')
const photos = await res.json()
console.log(photos)
skeletons.forEach(skeleton=>skeleton.remove())
for(let i = 0; i < photos.length; i++){
createCard(photos[i])
}
})
loadMore.addEventListener("click", async () =>{
const skeletons = loadSkeletons()
const res = await fetch('https://picsum.photos/v2/list?page=' + (Math.floor(Math.random() * 10) + 1) + '&limit=4')
const photos = await res.json()
skeletons.forEach(skeleton => skeleton.remove())
for(let i = 0; i < photos.length; i++){
createCard(photos[i])
}
})
