module.exports.getRandomUser = (req, res) => {
    res.send('hello random user')
}


module.exports.getAllUser = (req, res) => {
    res.send('hello all user')
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