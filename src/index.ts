import express from "express";
import { init } from "./server";

import "reflect-metadata";


const app = express()
export const connection = init(app, 3000);
