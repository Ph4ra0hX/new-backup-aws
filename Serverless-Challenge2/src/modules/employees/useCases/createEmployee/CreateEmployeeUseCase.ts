import { EmployeesRepository } from "../../repositories/implementations/EmployeesRepository";
import { IEmployeesRepository } from "../../repositories/IEmployeesRepository";

class CreateEmployeeUseCase {
  constructor(public employeesRepository: IEmployeesRepository) {}

  execute({ Name, Age, Position }) {
    this.employeesRepository.create({ Name, Age, Position });
  }
}

export { CreateEmployeeUseCase };
