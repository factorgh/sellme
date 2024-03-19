import { Router } from "express";
import { getProducts, addProduct } from "../controllers/product.js"

const router = Router()

router.
    route("/")
    .get(getProducts)
    .post(addProduct)



export default router;