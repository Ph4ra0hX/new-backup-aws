"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteEmployeeUseCase = void 0;
class DeleteEmployeeUseCase {
    constructor(employeesRepository) {
        this.employeesRepository = employeesRepository;
    }
    execute(id) {
        this.employeesRepository.remove(id);
    }
}
exports.DeleteEmployeeUseCase = DeleteEmployeeUseCase;
