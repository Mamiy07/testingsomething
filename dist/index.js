import { PrismaClient } from "@prisma/client";
import express from "express";
const prisma = new PrismaClient();
const app = express();
app.use(express.json());
app.get("/", (req, res) => {
    res.send("Hello World!");
});
const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
