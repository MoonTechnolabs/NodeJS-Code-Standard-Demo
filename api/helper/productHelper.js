let db = require('../../utils/databaseHelper');
let common = require('../../utils/common');
class ProductHelper {

    async isProdictExistByName(body) {
        let condition = ` AND name = '${body.name}'`;
        let data = await db.select('product', ' * ', condition);
        return data;
    }


    async isProdictExistByID(body) {
        let condition = ` AND id = ${body.id}`;
        let data = await db.select('product', ' * ', condition);
        return data;
    }

    async addProduct(body) {

        try {
            let obj = {
                name: body.name,
                price: body.price,
                description: body.description,
                created_date: new Date(),
                updated_date: new Date()
            }

            console.log(`addProduct obj is ::: `, obj);
            let data = await db.insert(`product`, obj);
            return data;
        } catch (err) {
            console.log('In catch addProduct :::', err)
            return err;
        }
    }


    async editProduct(body) {
        try {
            let obj = {
                name: body.name,
                price: body.price,
                description: body.description,
                updated_date: new Date()
            }

            console.log(`editProduct obj is ::: `, obj);
            let data = await db.update(`product`, obj, ` id = ${body.id} `);
            return data;
        } catch (err) {
            console.log('In catch editProduct :::', err)
            return err;
        }
    }

    async deleteProduct(body) {
        try {
            let condition = ` id = ${body.id}`;
            let data = await db.delete(`product`, condition);
            return data;
        } catch (err) {
            console.log('In catch editProduct :::', err)
            return err;
        }
    }

    async getProductList(body) {
        let where = ` `;        
        if (body.searchStr) {
            where += ` AND name LIKE '%${body.searchStr}%'`
        }

        let qry = ` SELECT * FROM product p `;

        let orderBy = ' ORDER BY p.created_date';

        let pagination = ` LIMIT  ${((body.page * (body.pagesize ? body.pagesize : 10)) - (body.pagesize ? body.pagesize : 10))} , ${body.pagesize ? body.pagesize : 10}`

        let productData = await db.select('product p', ' * ', where + orderBy + pagination);
        let total = await db.select('product p', ' COUNT(*) as total ', where);

        let obj = {
            total: total[0].total || 0,
            data: productData
        }

        return obj;
    }
}

module.exports = new ProductHelper();