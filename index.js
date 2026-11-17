const gameselett = [
    {title:'Каркассон', players: 4, borrower: null},
    {title:'Доббль', players: 6, borrower: 'Аня'},
    {title: 'Шахматы', players: 2, borrower: null}
]

const gameSelect = document.getElementById('gameSelect')
const inputBorrName = document.getElementById('borrowerName')
const buttonBor = document.querySelector('#borrowButton')
const buttonRet = document.querySelector('#returnButton')
const message = document.getElementById('message')
const gameList = document.getElementById('gameList')

buttonBor.addEventListener('click', () => {
    const game = gameselett[Number(gameSelect.value)] 
    const name = inputBorrName.value
    if (game.borrower === null) {
        game.borrower = name
        renderGames()
        message.innerHTML = `Только что игру взял(а) ${name}`
    }
    else {
        message.innerHTML = 'Игра занята в данный момент'
    }
})
buttonRet.addEventListener('click', () => {
    const game = gameselett[Number(gameSelect.value)] 
    const name = inputBorrName.value
    if (game.borrower === name) {
        game.borrower = null
        renderGames()
        message.innerHTML = `игру только что вернул(а) ${name}`
    }
    else {
        message.innerHTML = `${name} не брал(а) эту игру`
    }
})

function renderGames() {
    gameList.innerHTML = ' ';

    gameselett.forEach((gameselett, index) => {
        const item = document.createElement('li');
        const title = document.createElement('span')
        title.textContent = gameselett.title

        const players = document.createElement('span')
        players.textContent = gameselett.players

        const borrower =  document.createElement('span')
        borrower.textContent = gameselett.borrower

        item.append(title, players, borrower);
        gameList.append(item);
    })
}
renderGames();
