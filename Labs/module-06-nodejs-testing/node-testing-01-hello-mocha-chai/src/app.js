const Dog = require("./models/dog")
const { isLoggedIn } = require('./middleware')

app.get('/dogs', isLoggedIn, (req, res) => {
    let { name, age, breed } = req.body

    let newDog = new Dog({
        name,
        age,
        breed
    })

    newDog.save((err) => {
        if (err) {
            return res.status(500).send(err.message)
        }
        res.status(200).send()

    })
})