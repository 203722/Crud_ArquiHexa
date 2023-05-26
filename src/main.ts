import bodyParser from "body-parser";
import express from "express";

import { updateController } from "./application/controllers/updateuser";
import { deleteController } from "./application/controllers/deleteuser";
import { createController } from "./application/controllers/createuser";
import { getController } from "./application/controllers/getusers";

const app = express();
const port = 3000;

app.use(bodyParser.json());

// Rutas de la API
app.get("/users", getController.getAllUsers);
app.get("/users/:id", getController.getUserById);
app.post("/users", createController.createUser);
app.put("/users/:id", updateController.updateUser);
app.delete("/users/:id", deleteController.deleteUser);

app.listen(port, () => {
  console.log(`Servidor corriendo en el puerto ${port}`);
});
