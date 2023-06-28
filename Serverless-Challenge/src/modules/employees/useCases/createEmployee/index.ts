import { EmployeesRepository } from "../../repositories/implementations/EmployeesRepository";
import { CreateEmployeeController } from "./CreateEmployeeController";
import { CreateEmployeeUseCase } from "./CreateEmployeeUseCase";

const employeesRepository = new EmployeesRepository();

const createEmployeeUseCase = new CreateEmployeeUseCase(employeesRepository);

const createEmployeeController = new CreateEmployeeController(
  createEmployeeUseCase
);

export { createEmployeeController };
