import Product from "../models/product.js"

export const getProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json({
            status: "success",
            data: {
                products
            }
        })
    } catch (e) {
        res.status(400).json({ message: "Cannot find products" })
    }
}


export const addProduct = async (req, res) => {
    try {
        const newProduct = await Product.create(req.body)
        return res.status(200).json({ message: "Product added successfully", newProduct })
    } catch (e) {
        return res.status(500).send({ message: e.message })
    }


}
