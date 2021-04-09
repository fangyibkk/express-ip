import express from 'express'

const app = express()

const APP_PORT = 9999


app.set('trust proxy', ['loopback', 'linklocal', 'uniquelocal'])
app.use((req, res) => {
    res.json({
        ip: req.ip,
        timestamp: Date.now()
    })
})
app.listen(APP_PORT, () => {
    console.log(`Listening on ${APP_PORT}`)
})