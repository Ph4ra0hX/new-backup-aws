import { EmployeeCrud } from "../../../database/entity/employee";

interface ICreateEmployeeDTO {
  Name: string;
  Age: number;
  Position: string;
}

interface IEmployeesRepository {
  list(): EmployeeCrud[];
  create({ Name, Age, Position }: ICreateEmployeeDTO);
  revove(id);
}

export { IEmployeesRepository, ICreateEmployeeDTO };
