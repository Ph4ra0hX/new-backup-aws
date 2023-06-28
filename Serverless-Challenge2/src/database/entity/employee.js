"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeeCrud = void 0;
const uuid_1 = require("uuid");
class EmployeeCrud {
    constructor() {
        if (!this.Id) {
            this.Id = (0, uuid_1.v4)();
        }
    }
}
exports.EmployeeCrud = EmployeeCrud;
