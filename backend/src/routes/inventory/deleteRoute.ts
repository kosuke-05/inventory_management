import { Router } from "express";
import { DeleteInventoryController } from "../../controllers/inventory/deleteController";

const deleteRouter = Router();

deleteRouter.delete("/", DeleteInventoryController);

export default deleteRouter;