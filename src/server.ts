import express, { Application } from "express";
import { createConnection, getRepository } from "typeorm";
import morgan from "morgan";
import cors from "cors";
import v1 from "./api/v1";



export async function init(app: Application, port: number = 3000) {

    app.use(express.json());
    app.use(cors())
    app.use(morgan("dev"))

    app.use("/api/v1", v1)

    app.listen(port);
    console.log(`App runnig at http://localhost:${port}`);

}