import { Request, Response } from "express";
import { DeleteEmployeeUseCase } from "./DeleteEmployeeUseCase";
class DeleteEmployeeController {
  constructor(public deleteEmployeeUseCase: DeleteEmployeeUseCase) {}

  handle(req: Request, res: Response): Response {
    const { id } = req.params;

    this.deleteEmployeeUseCase.execute(id);

    return res.status(200).send();
  }
}

export { DeleteEmployeeController };
