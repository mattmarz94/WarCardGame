let deckId

function handleClick() {
    fetch("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")
        .then(res => res.json())
        .then(data => {
            console.log(data)
            deckId = data.deck_id
        })
}

document.getElementById("new-deck").addEventListener("click", handleClick);

document.getElementById("draw").addEventListener("click", () => {
    fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=2`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            document.getElementById("cards-display").innerHTML = `
            <img src =${data.cards[0].image} />
            <img src =${data.cards[1].image} />
            `
        })
    })