const Joi = require('joi');
var Promise = require("bluebird");
class ProductValidator {
    async addProductValidator(body) {
        return new Promise(async(resolve, reject) =>{
            const schema = Joi.object({
                name: Joi.string().required(),
                price: Joi.number().required(),
                description: Joi.string().required()
            })

            try {
                const value = await schema.validateAsync(body);                
                resolve();
            }
            catch (err) {
                console.log("It's an error ::: ",err);                
                reject(err.details[0].message);
            }
        })

    }



    async editProductValidator(body) {
        return new Promise(async(resolve, reject) =>{
            const schema = Joi.object({
                id: Joi.number().required(),
                name: Joi.string().required(),
                price: Joi.number().required(),
                description: Joi.string().required()
            })

            try {
                const value = await schema.validateAsync(body);                
                resolve();
            }
            catch (err) {
                console.log("It's an error ::: ",err);                
                reject(err.details[0].message);
            }
        })

    }


    async deleteProductValidator(body) {
        return new Promise(async(resolve, reject) =>{
            const schema = Joi.object({
                id: Joi.number().required()                
            })

            try {
                const value = await schema.validateAsync(body);                
                resolve();
            }
            catch (err) {
                console.log("It's an error ::: ",err);                
                reject(err.details[0].message);
            }
        })

    }

    
    async getProductListValidator(body) {
        return new Promise(async(resolve, reject) =>{
            const schema = Joi.object({
                page: Joi.number().required(),
                pagesize: Joi.number().optional(),
                id: Joi.number().optional(),
                searchStr: Joi.string().optional()
            })

            try {
                const value = await schema.validateAsync(body);                
                resolve();
            }
            catch (err) {
                console.log("It's an error ::: ",err);                
                reject(err.details[0].message);
            }
        })

    }
}

module.exports = new ProductValidator();