import dotenv from "dotenv"

dotenv.config()

export const mongo: string = process.env.MONGO as string

console.log("teste:", mongo)

// export default mongo