const gameselett = [
    { title: 'Каркассон ', players: '4 ', borrower: null },
    { title: 'Доббль ', players: '6 ', borrower: 'Аня' },
    { title: 'Шахматы ', players: '2 ', borrower: null }
]

const gameSelect = document.getElementById('gameSelect')
const inputBorrName = document.getElementById('borrowerName')
const buttonBor = document.querySelector('#borrowButton')
const buttonRet = document.querySelector('#returnButton')
const message = document.getElementById('message')
const gameList = document.getElementById('gameList')
const freeGamesCheckbox = document.getElementById('freeGamesCheckbox')
const hint = document.getElementById('hint')
const InputTitle = document.getElementById('InputTitle')
const InputPlayers = document.getElementById('InputPlayers')
const ButtonAdd = document.querySelector('#ButtonAdd')

freeGamesCheckbox.addEventListener("change", () => {
    renderGames()
})
ButtonAdd.addEventListener('click', () => {
    const newgametitle = InputTitle.value
    const newgameplayers = InputPlayers.value
    if (!newgametitle || !newgameplayers) {
        return
    } 
    const newgame = [
        {title: `${newgametitle}`, players: `${newgameplayers}`, borrower: null}
    ]

    gameselett.push(newgame)
    renderGames()
    InputTitle.value = ''
    InputPlayers.value = ''

})

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
        message.innerHTML = `Игру только что вернул(а) ${name}`
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

        const borrower = document.createElement('span')
        borrower.textContent = gameselett.borrower

        item.append(title, players, borrower);
        if (freeGamesCheckbox.checked) {
            if (gameselett.borrower == null) {
                gameList.append(item);
            }
        } else {
            gameList.append(item);
            hint.innerHTML = ' '
        }
        
    })
}
renderGames();
