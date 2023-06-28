import { Request, Response, Router } from "express";

import { createEmployeeController } from "../modules/employees/useCases/createEmployee";
import { deleteEmployeeController } from "../modules/employees/useCases/DeleteEmployee";
import { listEmployeeController } from "../modules/employees/useCases/listEmployees";

const employeesRouter = Router();

employeesRouter.post("/", (req: Request, res: Response) => {
  return createEmployeeController.handle(req, res);
});

employeesRouter.get("/", (req: Request, res: Response) => {
  return listEmployeeController.handle(req, res);
});

employeesRouter.delete("/:id", (req: Request, res: Response) => {
  return deleteEmployeeController.handle(req, res);
});

export { employeesRouter };
