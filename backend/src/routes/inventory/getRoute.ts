import { Router } from "express";
import { GetInventoryController } from "../../controllers/inventory/getController";

const getRoute = Router();

getRoute.get("/", GetInventoryController);

export default getRoute;