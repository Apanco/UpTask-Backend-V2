import mongoose from "mongoose";
import colors from "colors";

export const conectDB = async ()=>{
    try {
        const {connection} = await mongoose.connect(process.env.DATABASE_URL);
        const url = `${connection.host} : ${connection.port}`;
        console.log(colors.magenta.bold(`MongoDB conectado en : ${url}`))
    } catch (error) {
        // console.log(colors.red(error))
        console.log(colors.red("Error al conectar la base de datos"))
        process.exit(1);
    }
}