import { EmployeesRepository } from "../../repositories/implementations/EmployeesRepository";
import { IEmployeesRepository } from "../../repositories/IEmployeesRepository";

class DeleteEmployeeUseCase {
  constructor(public employeesRepository) {}

  execute(id) {
    this.employeesRepository.remove(id);
  }
}

export { DeleteEmployeeUseCase };
