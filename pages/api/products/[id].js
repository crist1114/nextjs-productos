import { pool } from "../../../config/db"; 

export default async function obtenerProducto(req, res){

    switch(req.method){

        case 'GET': 
            return await getProduct(req, res)

        case 'DELETE':
            return await deleteProduct(req, res)
        case 'PUT':
            return await updateProduct(req,res)
    }

    
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