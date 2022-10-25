import {getProduct, updateProduct, deleteProduct} from '../../../controller/ProductController'

export default async function obtenerProducto(req, res){

    switch(req.method){

        case 'GET': 
            return await getOne(req, res)
        case 'DELETE':
            return await deleteOne(req, res)
        case 'PUT':
            return await update(req,res)
    }

    
}

async function update(req, res){
    return updateProduct(req, res)
    
}

async function getOne(req, res){
    return getProduct(req, res);
}

async function deleteOne(req, res){
    return deleteProduct(req, res)
}