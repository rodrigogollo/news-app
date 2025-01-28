import express from "express";
import { Request, Response } from "express";
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
const app = express();

const json = (param: any): any => {
  return JSON.stringify(
    param,
    (key, value) => (typeof value === "bigint" ? value.toString() : value) // return everything else unchanged
  );
};

app.get("/", async (_, res) => {
  const articles = await prisma.articles.findMany();
  res.status(200).send(json(articles));
})

app.get("/:id", async (req: Request, res: Response) => {
  const article = await prisma.articles.findUnique({
    where: {
      id: Number(req.params.id),
    },
  })
  res.status(200).send(json(article));
})

app.post("/", async (req, res) => {
  let body = req.body;
  const article = await prisma.articles.create({
    data: {
      title: "teste",
      author: "Rodrigo Gollo",
      tags: "inter",
      content: "o inter joga hoje",
    },
  })
  res.status(200).send(json(article));
})

app.put("/:id", async (req, res) => {
  const article = await prisma.articles.update({
    where: {
      id: Number(req.params.id),
    },
    data: {
      title: "teste 2",
    },
  })
  res.status(200).send(json(article));
})

app.delete("/:id", async (req, res) => {
  const article = await prisma.articles.delete({
    where: {
      id: Number(req.params.id),
    }
  })
  res.status(200).send(json(article));
})

export default app;
