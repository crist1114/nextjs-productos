import { pool } from "../../../config/db";

export default async function handler(req, res){
    switch(req.method){

        case 'GET':
            return await getProducts(req, res);
        case 'POST':
            return await saveProduct(req, res);
    }
       
}

async function getProducts(req, res){

    const [result] = await pool.query('select * from product');
    return res.status(200).json(result);
}

async function saveProduct(req, res){

    const {name, description, price} = req.body;
    const [result] = await pool.query('insert into product set ?', {
        name,
        description,
        price
    });
    console.log('resultado ',result)
    return res.status(200).json({id : result.insertId});
}