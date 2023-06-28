"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteEmployeeController = void 0;
class DeleteEmployeeController {
    constructor(deleteEmployeeUseCase) {
        this.deleteEmployeeUseCase = deleteEmployeeUseCase;
    }
    handle(req, res) {
        const { id } = req.params;
        this.deleteEmployeeUseCase.execute(id);
        return res.status(200).send();
    }
}
exports.DeleteEmployeeController = DeleteEmployeeController;
