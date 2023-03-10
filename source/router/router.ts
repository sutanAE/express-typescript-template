import { Router } from "express";
import fetch from "cross-fetch";

export const router = Router()

router.get("/", async (req, res)=>{
    const headers = req.headers
    // const prom = await fetch("http://localhost:5000/api2/hello")
    // const data = await prom.json()
    return res.status(200).send({message: "router is online", headers: headers.authorization})
})