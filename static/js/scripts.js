function blackLotus() {
    const mtg = require('mtgsdk');

    mtg.card.find(3).then(result =>{
        return result.card.name
    })
}