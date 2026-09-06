import { Router } from "express";
import { PostInventoryController } from "../../controllers/inventory/postController";


const postInventoryRoute = Router();

postInventoryRoute.post("/", PostInventoryController);

export default postInventoryRoute;