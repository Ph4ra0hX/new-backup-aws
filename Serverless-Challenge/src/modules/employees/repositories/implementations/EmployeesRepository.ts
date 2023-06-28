import {
  ICreateEmployeeDTO,
  IEmployeesRepository,
} from "../IEmployeesRepository";

import { v4 as uuidv4 } from "uuid";

const Employee = require("../../../../database/model/Employee");

import EmployeeCrud = require("../../../../database/entity/employee");

class EmployeesRepository implements IEmployeesRepository {
  public static INSTANCE: EmployeesRepository;

  public static getInstance(): EmployeesRepository {
    if (!EmployeesRepository.INSTANCE) {
      EmployeesRepository.INSTANCE = new EmployeesRepository();
    }

    return EmployeesRepository.INSTANCE;
  }

  create({ Name, Age, Position }: ICreateEmployeeDTO): void {
    Employee.create({
      id: uuidv4(),
      Age: Age,
      Name: Name,
      Position: Position,
    });
  }

  async list() {
    const employee = await Employee.findAll({ raw: true });

    return employee;
  }

  remove(Id) {
    console.log(Id);
    const employee = Employee.destroy({ where: { id: Id } });
  }
}

export { EmployeesRepository };

