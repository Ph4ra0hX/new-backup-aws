"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeesRepository = void 0;
const uuid_1 = require("uuid");
const Employee = require("../../../../database/model/Employee");
class EmployeesRepository {
    static getInstance() {
        if (!EmployeesRepository.INSTANCE) {
            EmployeesRepository.INSTANCE = new EmployeesRepository();
        }
        return EmployeesRepository.INSTANCE;
    }
    create({ Name, Age, Position }) {
        Employee.create({
            id: (0, uuid_1.v4)(),
            Age: Age,
            Name: Name,
            Position: Position,
        });
    }
    list() {
        return __awaiter(this, void 0, void 0, function* () {
            const employee = yield Employee.findAll({ raw: true });
            return employee;
        });
    }
    remove(Id) {
        console.log(Id);
        const employee = Employee.destroy({ where: { id: Id } });
    }
}
exports.EmployeesRepository = EmployeesRepository;
