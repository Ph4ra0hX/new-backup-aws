import { Request, Response } from "express";

import { ListEmployeesUseCase } from "./ListEmployeesUseCase";

class ListEmployeeController {
  constructor(public listEmployeesUseCase: ListEmployeesUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const all = await this.listEmployeesUseCase.execute();

    return res.json(all);
  }
}

export { ListEmployeeController };
