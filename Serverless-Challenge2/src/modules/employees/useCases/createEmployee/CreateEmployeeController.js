"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateEmployeeController = void 0;
class CreateEmployeeController {
    constructor(createEmployeeUseCase) {
        this.createEmployeeUseCase = createEmployeeUseCase;
    }
    handle(req, res) {
        const { Name, Age, Position } = req.body;
        this.createEmployeeUseCase.execute({ Name, Age, Position });
        return res.status(201).send();
    }
}
exports.CreateEmployeeController = CreateEmployeeController;
