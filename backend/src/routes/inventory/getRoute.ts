import { Router } from "express";
import { GetInventoryController } from "../../controllers/inventory/getController";

const getRoute = Router();

getRoute.post("/", GetInventoryController);

export default getRoute;