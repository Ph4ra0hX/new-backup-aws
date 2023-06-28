"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListEmployeesUseCase = void 0;
class ListEmployeesUseCase {
    constructor(employeeRepository) {
        this.employeeRepository = employeeRepository;
    }
    execute() {
        const employees = this.employeeRepository.list();
        return employees;
    }
}
exports.ListEmployeesUseCase = ListEmployeesUseCase;
