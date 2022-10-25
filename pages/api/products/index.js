import {productos, saveProduct} from '../../../controller/ProductController'

export default async function handler(req, res){
    switch(req.method){
        case 'GET':
            return await getAll(req, res);
        case 'POST':
            return await save(req, res);
    }
}

async function getAll(req, res){
    return productos(req, res);
}

async function save(req, res){
    return saveProduct(req, res);
}

