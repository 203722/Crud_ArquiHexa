import { Request, Response } from "express";

import { UserRepository } from "../../infrastructure/UserRepository";

export const updateController = {
  async updateUser(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const { name, email } = req.body;
      const updatedUser = await UserRepository.update(id, { name, email });
      if (updatedUser) {
        res.json(updatedUser);
      } else {
        res.status(404).json({ message: "Usuario no encontrado" });
      }
    } catch (error) {
      res.status(500).json({ message: "Error al actualizar el usuario" });
    }
  },
};
