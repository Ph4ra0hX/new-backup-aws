import { v4 as uuidV4 } from "uuid";

class EmployeeCrud {
  Id?: string;
  Age: number;
  Name: string;
  Position: string;
  createdAt: string;
  updatedAt: string;

  constructor() {
    if (!this.Id) {
      this.Id = uuidV4();
    }
  }
}

export { EmployeeCrud };
