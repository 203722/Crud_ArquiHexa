import { Request, Response } from "express";

import { UserRepository } from "../../infrastructure/UserRepository";

export const getController = {
  async getAllUsers(req: Request, res: Response) {
    try {
      const users = await UserRepository.getAll();
      
      res.json(users);
    } catch (error) {
      res.status(500).json({ message: "Error al obtener los usuarios" });
    }
  },

  async getUserById(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const user = await UserRepository.getById(id);
      if (user) {
        res.json(user);
      } else {
        res.status(404).json({ message: "Usuario no encontrado" });
      }
    } catch (error) {
      res.status(500).json({ message: "Error al obtener el usuario" });
    }
  },
};
