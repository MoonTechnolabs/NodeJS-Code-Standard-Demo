var productHelper = require('../helper/productHelper');
var productValidator = require('../validator/productValidator');
var responseHelper = require('../../utils/responseHelper');
class ProductController {

    async addProduct(req, res) {
        try {
            // Validate the request first...
            await productValidator.addProductValidator(req.body);            

            // Now add check the product name is exist or not...
            let isProdictExistByName = await productHelper.isProdictExistByName(req.body);
            console.log(` isProdictExistByName :: `, isProdictExistByName);
            if(isProdictExistByName.length > 0){
                responseHelper.sendErrorResponse(res, 'Product Name already Exist', {});
            }else{
                // Let's add product in db... 
                await productHelper.addProduct(req.body);
                responseHelper.sendSuccessResponse(res, 'Product added successfully', {});
            }
        } catch (err) {
            console.log("In catch ::: ",err);            
            responseHelper.sendErrorResponse(res, 'Internal server error', err);
        }
    }

    async editProduct(req, res) {
        try {
            // Validate the request first...
            await productValidator.editProductValidator(req.body);            

            // Now check the product is exist or not by id...
            let isProdictExistById = await productHelper.isProdictExistByID(req.body);
            console.log(` isProdictExistById :: `, isProdictExistById);
            if(isProdictExistById.length == 0){
                responseHelper.sendErrorResponse(res, 'Product data not found', {});
            }else{
                // Let's edit product in db... 
                await productHelper.editProduct(req.body);
                responseHelper.sendSuccessResponse(res, 'Product edited successfully', {});
            }
        } catch (err) {
            console.log("In catch ::: ",err);            
            responseHelper.sendErrorResponse(res, 'Internal server error', err);
        }
    }

    async deleteProduct(req, res) {
        try {
            // Validate the request first...
            await productValidator.deleteProductValidator(req.body);            

            // Now check the product is exist or not by id...
            let isProdictExistById = await productHelper.isProdictExistByID(req.body);
            console.log(` isProdictExistById :: `, isProdictExistById);
            if(isProdictExistById.length == 0){
                responseHelper.sendErrorResponse(res, 'Product data not found', {});
            }else{
                // Let's edit product in db... 
                await productHelper.deleteProduct(req.body);
                responseHelper.sendSuccessResponse(res, 'Product deleted successfully', {});
            }
        } catch (err) {
            console.log("In catch ::: ",err);            
            responseHelper.sendErrorResponse(res, 'Internal server error', err);
        }
    }

    async getProductList(req, res){
        try {
            // Validate the request first...
            await productValidator.getProductListValidator(req.query);
            let data = await productHelper.getProductList(req.query);
            responseHelper.sendSuccessResponse(res, 'Success', data);

        } catch (err) {
            console.log("In catch ::: ",err);            
            responseHelper.sendErrorResponse(res, 'Internal server error', err);
        }
    }
}

module.exports = new ProductController();