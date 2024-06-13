const Category = require("../models/categoryModels");

const categoryController ={
    async index(req, res, next) {
        let categories;
        try{
            categories = await Category.find();
        }
        catch(error) {
            res.status(404).json({ error: "Server error.", serverError:
                error });
        }
        res.status(200).json(categories);   
    },
    async store(req, res, next){
        let cat;
        try{
            const { title , description } = req.body;
            console.log(req.body)
            cat = await Category.create({
                title, 
                description,
                thumbnail:"./uploads/category/thumbnail"+ req.file,
                filename,
            });
        }catch(error) {
            res.status(404).json({
                error:"Server Error", serverError:error
            });
        }
        res.status(201).json(cat);
    }, 
};


module.exports = categoryController;





