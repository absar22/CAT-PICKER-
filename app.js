document.querySelector('button').addEventListener('click', getACuteCatPhoto)

async function getACuteCatPhoto() {
  try {
    const img = document.querySelector('img')
    const status = document.querySelector('#status')

    status.textContent = 'Loading a super cute cat... 😻'
    img.src = '' // Clear previous image

    const res = await fetch('https://api.thecatapi.com/v1/images/search')
    const data = await res.json()

    img.src = data[0].url
    img.style.width = '500px'

    status.textContent = 'Here you go! 🐾'
  } catch (err) {
    document.querySelector('#status').textContent = 'Oops! Something went wrong. 😿'
    console.log(`Error: ${err}`)
  }
}

