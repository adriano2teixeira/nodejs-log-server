import express from "express";
import { createServer } from "http";
import hello from "./utils/hello";

export const app = express();

app.get("/", (_, res) => {
  const result = hello();
  res.json(result);
});

const server = createServer(app);

const port = process.env.PORT || 3001;

server.listen(port, () =>
  console.log(`Server running on http://localhost:${port}`)
);
