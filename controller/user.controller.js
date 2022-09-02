const fs = require('fs')


module.exports.getRandomUser = (req, res) => {
    const data = fs.readFileSync('user.json');
    const parsedUser = JSON.parse(data)
    const randomNum = Math.ceil(Math.random() * parsedUser.length)
    const result = parsedUser.find(user => user.id === randomNum)
    res.send(result)
}


module.exports.getAllUser = (req, res) => {
    const limit = req.query.limit;
    const data = fs.readFileSync('user.json');
    const parsedUser = JSON.parse(data)
    res.send(parsedUser.slice(0, limit))
}


module.exports.saveAUser = (req, res) => {
    res.send('hello save user')
}


module.exports.updateAUser = (req, res) => {
    res.send('hello update a user')
}


module.exports.updateBulkUser = (req, res) => {
    res.send('hello update bulk user')
}


module.exports.deleteUser = (req, res) => {
    res.send('hello delete a user')
}