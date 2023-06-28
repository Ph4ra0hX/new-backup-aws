"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.employeesRouter = void 0;
const express_1 = require("express");
const createEmployee_1 = require("../modules/employees/useCases/createEmployee");
const DeleteEmployee_1 = require("../modules/employees/useCases/DeleteEmployee");
const listEmployees_1 = require("../modules/employees/useCases/listEmployees");
const employeesRouter = (0, express_1.Router)();
exports.employeesRouter = employeesRouter;
employeesRouter.post("/", (req, res) => {
    return createEmployee_1.createEmployeeController.handle(req, res);
});
employeesRouter.get("/", (req, res) => {
    return listEmployees_1.listEmployeeController.handle(req, res);
});
employeesRouter.delete("/:id", (req, res) => {
    return DeleteEmployee_1.deleteEmployeeController.handle(req, res);
});
