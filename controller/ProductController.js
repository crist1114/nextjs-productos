import { pool } from '../config/db'
async function saveProduct(req, res){

    const {name, description, price} = req.body;
    const [result] = await pool.query('insert into product set ?', {
        name,
        description,
        price
    });
    
    return res.status(200).json({id : result.insertId});
}

const productos = async function getProducts(req, res){

    const [result] = await pool.query('select * from product');
    return res.status(200).json(result);
}

async function updateProduct(req, res){
    const {id} = req.query;
    try{

        await pool.query('update product set ? where id = ?', [req.body, id])

        return res.status(204).json()
    }catch(error){
        console.log(error.message)
    }
    
}

async function getProduct(req, res){
    const {id} = req.query;
    const [result] = await pool.query('select * from product where id = ?', [id])

    return res.status(200).json(result[0])
}

async function deleteProduct(req, res){
    const {id} = req.query;
    const [result] = await pool.query('delete from product where id = ?', [id])

    return res.status(204).json()
}
export {productos, saveProduct, updateProduct, getProduct, deleteProduct}