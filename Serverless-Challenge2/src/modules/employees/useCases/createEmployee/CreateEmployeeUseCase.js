"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateEmployeeUseCase = void 0;
class CreateEmployeeUseCase {
    constructor(employeesRepository) {
        this.employeesRepository = employeesRepository;
    }
    execute({ Name, Age, Position }) {
        this.employeesRepository.create({ Name, Age, Position });
    }
}
exports.CreateEmployeeUseCase = CreateEmployeeUseCase;
