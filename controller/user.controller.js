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
    const data = req.body;
    const users = fs.readFileSync('user.json');
    const parsedUser = JSON.parse(users)
    parsedUser.push(data)
    fs.writeFile('user.json', JSON.stringify(parsedUser), (err) => {
        if (err) {
            res.send('error occurd')
        }
        res.send('successfully add data')
    })
}


module.exports.updateAUser = (req, res) => {
    const id = req.params.id;
    const data = req.body;
    const users = fs.readFileSync('user.json');
    const parsedUser = JSON.parse(users)
    const rest = parsedUser.filter(user => user.id != id)
    rest.push(data)
    fs.writeFile('user.json', JSON.stringify(parsedUser), (err) => {
        if (err) {
            res.send('error occurd')
        }
        res.send('successfully update data')
    })
}


module.exports.updateBulkUser = (req, res) => {
    res.send('hello update bulk user')
}


module.exports.deleteUser = (req, res) => {
    const id = req.params.id;
    const users = fs.readFileSync('user.json');
    const parsedUser = JSON.parse(users)
    const rest = parsedUser.filter(user => user.id != id)
    fs.writeFile('user.json', JSON.stringify(rest), (err) => {
        if (err) {
            res.send('error occurd')
        }
        res.send('successfully delete data')
    })

}