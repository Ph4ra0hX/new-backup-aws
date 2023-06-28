import { Request, Response } from "express";
import { CreateEmployeeUseCase } from "./CreateEmployeeUseCase";
class CreateEmployeeController {
  constructor(public createEmployeeUseCase: CreateEmployeeUseCase) {}

  handle(req: Request, res: Response): Response {
    const { Name, Age, Position } = req.body;

    this.createEmployeeUseCase.execute({ Name, Age, Position });

    return res.status(201).send();
  }
}

export { CreateEmployeeController };
