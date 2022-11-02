document.querySelector('button').addEventListener('click', getImage)

function getImage(){
fetch('https://api.thecatapi.com/v1/images/search')
.then(res => res.json())
.then(data => {
  document.querySelector('img').src = data[0].url
  // console.log(data[0].url)
})

.catch(err => {
  console.log(`Error ${err}`)
})

}
