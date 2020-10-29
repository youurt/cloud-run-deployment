const http = require('http')
const server = http.createServer((req, res) => {
    console.log("New Connection")
    const time = Date.now()
    const timeSave = []
    timeSave.push(time)
    res.end(timeSave)
})

const PORT = process.env.PORT || 8080
server.listen(PORT, () => console.log("Listening"))