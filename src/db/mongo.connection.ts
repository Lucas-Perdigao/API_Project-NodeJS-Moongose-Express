import { connection, connections, connect } from "mongoose"
// import dotenv from 'dotenv'
import { mongo } from "../credentials"

// dotenv.config()

// const mongo: string = process.env.MONGO as string


export function mongoConnect(){
    connection.on("error", (error) => {
        console.log("ERROR: Connection do MongoDB failed", error)
    })

    connection.on("close", () => {
        console.log("Connection to MongoDB ended")
        process.exit(1)
    })

    connection.once("open", () => {
        const infos = connections

        infos.map((info) => {
            console.log(`Connected to ${info.host}:${info.port}/${info.name} mongo Database`)
        })
    })

    connect(mongo)
}

export function mongoDisconnect(){
    connection.close()
}