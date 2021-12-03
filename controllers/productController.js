const Product = require('../models/Product')



const getallproducts = async (req, res) => {


    const { qcategories } = req.query
    let products
    if (qcategories) {
        products = await Product.find({ categories: { $in: [qcategories] } })

    } else if (req.query.new) {
        console.log(req.query.new);
        products = await Product.find().sort({ createdAt: -1 }).limit(5)

    } else {
        products = await Product.find()
    }

    res.status(200).json(products)

}

const getproduct = async (req, res) => {

    const product = await Product.findById(req.params.id)

    res.status(200).json(product)
}

const createproduct = async (req, res) => {

    const product = await Product.create(req.body)

    res.status(200).json(product)
}

const updateproduct = async (req, res) => {

    const updatedproducct = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true })

    res.status(200).json(updatedproducct)
}

const deleteproduct = async (req, res) => {
    console.log(req.params.id);
    await Product.findByIdAndDelete(req.params.id)

    res.status(200).json("product has been deleted")
}

module.exports = {
    getallproducts,
    getproduct,
    updateproduct,
    deleteproduct,
    createproduct,
}
