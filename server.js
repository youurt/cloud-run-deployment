const http = require('http')
const server = http.createServer((req, res) => {
    console.log("New Connection")
    const time = Date.now()
    res.end(`TEST SERVER --- continuous deployment${time}`)
})

const PORT = process.env.PORT || 8080
server.listen(PORT, () => console.log("Listening"))