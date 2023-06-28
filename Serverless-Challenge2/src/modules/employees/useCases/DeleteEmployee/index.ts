import { EmployeesRepository } from "../../repositories/implementations/EmployeesRepository";
import { DeleteEmployeeController } from "./DeleteEmployeeController";
import { DeleteEmployeeUseCase } from "./DeleteEmployeeUseCase";

const employeesRepository = new EmployeesRepository();

const deleteEmployeeUseCase = new DeleteEmployeeUseCase(employeesRepository);

const deleteEmployeeController = new DeleteEmployeeController(
  deleteEmployeeUseCase
);

export { deleteEmployeeController };
