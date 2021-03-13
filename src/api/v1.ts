import { Request, Response, Router } from "express";
import { createConnection } from "typeorm";
import { Clientes } from "../entity/clientes";


const router = Router();


router.get("/sedes/:doc", async (req: Request, res: Response) => {
    const { doc } = req.params;
    createConnection().then(async (con) => {
        const result = await con.getRepository(Clientes).createQueryBuilder();
        res.json(result)
        con.close()
    })
})


export default router;