import { IEmployeesRepository } from "../../repositories/IEmployeesRepository";

class ListEmployeesUseCase {
  constructor(public employeeRepository: IEmployeesRepository) {}

  execute() {
    const employees = this.employeeRepository.list();

    return employees;
  }
}

export { ListEmployeesUseCase };
