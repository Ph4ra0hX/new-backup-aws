import { EmployeesRepository } from "../../repositories/implementations/EmployeesRepository";
import { ListEmployeeController } from "./ListEmployeeController";
import { ListEmployeesUseCase } from "./ListEmployeesUseCase";

const employeesRepository = new EmployeesRepository();
const listEmployeesUseCase = new ListEmployeesUseCase(employeesRepository);
const listEmployeeController = new ListEmployeeController(listEmployeesUseCase);

export { listEmployeeController };
