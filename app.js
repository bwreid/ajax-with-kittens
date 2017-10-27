const cats = document.getElementById('cats')
const alert = document.getElementById('alert')

document.getElementById('posts-create').addEventListener('click', (event) => {
  event.preventDefault()
  document.getElementById('name').value = ''
  $('#form').css('display', 'block')
})


document.getElementById('submit').addEventListener('click', (event) => {
  event.preventDefault()
  let name = document.getElementById('name').value
  const config = {
    name: name
  }
  console.log(config);
  axios.post('http://localhost:3000/cats', config).then(result => {
    return get()
  }).then(result => {
    const list = result
    let string = ``
    list.forEach(name => {
      string += `<li>${name}</li>`
    })
    cats.innerHTML = string
  })
  .catch(err => console.log('ERROR:', err))


  alert.textContent = ''
  $('#form').css('display', 'none')
})

function get () {
  return axios.get('http://localhost:3000/cats').then(result => {
    const cats = result.data.data
    const list = cats.map(cat => {
      console.log(cat.name);
      return cat.name
    })
    return list
  }).catch(err => console.log('ERROR:', err))
}
