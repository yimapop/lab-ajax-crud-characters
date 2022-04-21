const charactersAPI = new APIHandler('https://minions-api.herokuapp.com/')

window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', function (event) {

    let text = ''

    charactersAPI
      .getFullList()
      .then(({ data }) => {

        data.forEach(element => {
          text += `<div class="character-info">
          <div class="id">${element.id}</div>
          <div class="name">${element.name}</div>
        <div class="occupation">${element.occupation}</div>
        <div class="cartoon">${element.cartoon}</div>
        <div class="weapon">${element.weapon}</div></div>`

          document.querySelector('.characters-container').innerHTML = text
          console.log(element)
        })
      })
      .catch(err => console.log(err))

  })

  document.getElementById('fetch-one').addEventListener('click', function (event) {

    let id = document.querySelector("input[name='character-id']").value

    let singleMinion = ''

    charactersAPI
      .getOneRegister(id)
      .then(({ data }) => {

        singleMinion += `<div class="character-info">
          <div class="name">${data.name}</div>
        <div class="occupation">${data.occupation}</div>
        <div class="cartoon">${data.cartoon}</div>
        <div class="weapon">${data.weapon}</div></div>`

        document.querySelector('.characters-container').innerHTML = singleMinion

      })
      .catch(err => console.log(err))
  })


  document.getElementById('delete-one').addEventListener('click', function (event) {

    let id = document.querySelector("input[name='character-id-delete']").value

    charactersAPI
      .deleteOneRegister(id)
      .then(({ data }) => {
        console.log(data)
      })
      .catch(err => console.log(err))

  });

  document.getElementById('edit-character-form').addEventListener('submit', function (event) {

    event.preventDefault()

    let editMinion = document.querySelectorAll('#edit-character-form input')

    let inputs = {

      id: editMinion[0].value.id,
      name: editMinion[1].value,
      occupation: editMinion[2].value,
      weapon: editMinion[3].value

    }

    charactersAPI
      .updateOneRegister(inputs)
      .then(data => {
        document.querySelector('#edit-character-form').reset()

        console.log(data)
      })
      .catch(err => console.log(err))



  });

  document.getElementById('new-character-form').addEventListener('submit', function (event) {

    event.preventDefault()
    let newMinion = document.querySelectorAll('#new-character-form input')

    let inputs = {
      name: newMinion[0].value,
      occupation: newMinion[1].value,
      weapon: newMinion[2].value,
      cartoon: newMinion[3].checked
    }

    charactersAPI
      .createOneRegister(inputs)
      .then((data) => {

        console.log(data)
      })

    console.log(newMinion)
      .catch(err => console.log(err))

  })
})