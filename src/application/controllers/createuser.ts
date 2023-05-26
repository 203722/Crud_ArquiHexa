import { Request, Response } from "express";

import { UserRepository } from "../../infrastructure/UserRepository";

export const createController = {
  async createUser(req: Request, res: Response) {
    try {
      const { name, email } = req.body;
      const user = await UserRepository.create({ name, email });
      res.status(201).json(user);
    } catch (error) {
      res.status(500).json({ message: "Error al crear el usuario" });
    }
  },
};
