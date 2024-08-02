import express from "express"
import prisma from "./utils/prisma"
import cors from "cors"

const app = express()
const port = 3030

app.use(cors())

app.get("/count", async (req, res) => {
    const count = await prisma.count.findFirst({
        where: {
            id: 0
        }
    })

    res.json({
        value: count ? count.value : 0
    })
})

app.post("/count", async (req, res) => {
    const count = await prisma.count.upsert({
        where: {
            id: 0
        },
        update: {
            value: {
                increment: 1
            }
        },
        create: {
            id: 0,
            value: 1
        }

    })

    res.json({
        value: count.value
    })
})


app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`)
})