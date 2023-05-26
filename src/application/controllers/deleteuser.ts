import { Request, Response } from "express";

import { UserRepository } from "../../infrastructure/UserRepository";

export const deleteController = {
  async deleteUser(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const deletedUser = await UserRepository.delete(id);
      if (deletedUser) {
        res.json(deletedUser);
      } else {
        res.status(404).json({ message: "Usuario no encontrado" });
      }
    } catch (error) {
      res.status(500).json({ message: "Error al eliminar el usuario" });
    }
  },
};
