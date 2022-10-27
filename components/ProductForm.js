import axios from "axios";
import React, { useState, useEffect } from 'react'
import { useRouter } from "next/router";

export function ProductForm() {


    const [product, setProduct] = useState({
        name: '',
        description: '',
        price: 0
    })

    const router = useRouter();

    const handleSubmit = async (e) =>{
        e.preventDefault();
        if(router.query.id){
        
          await axios.put('/api/products/' + router.query.id, product)
        
        }
        else{
          await axios.post('/api/products', product)
        }
        router.push('/')
    }
    const handlerChange = ({target: {name, value}})=>{
          
      setProduct({...product, [name]: value});}

        useEffect(()=>{

            const getProduct = async (id)=> {
                  const {data} = await axios.get('/api/products/' + id)
                  setProduct({name: data.name, description: data.description, price: data.price})
                }

          if(router.query.id){
            getProduct(router.query.id)
          }

        },[]);

  return (
<div class="container mt-5">
    <div class="row">
        <div class="col-lg-6 offset-lg-3">
            <div class="card">
                <div class="card-body text-center">
                    <span class="titulo">
                    { router.query.id ? <h2>Actualizar Producto</h2> : <h2>Guardar producto</h2> }
                    </span>

                    <form class="mt-3" onSubmit={handleSubmit}>
                        <div class="mb-3">
                          <label htmlFor='name'>Nombre: </label>
                          <input type='text' name='name'
                          class="form-control form-control-lg" placeholder="Producto" onChange={handlerChange} value={product.name}/>
                          { !product.name && product.price ?<p className="text-danger">Por favor ingrese el nombre del producto</p> : '' }
                        </div> 

                        <div class="mb-3">
                        <label htmlFor='price'>Price: </label>
                        <input type='number'min={0.0} name='price' id='price' 
                        class="form-control form-control-lg" placeholder="Precio" onChange={handlerChange} value={product.price} />
                        { !product.price && product.description ?<p className="text-danger">Por favor ingrese el precio del producto</p> : '' }
                        </div>

                        <div class="mb-3">
                        <label htmlFor='description'>Description: </label>
                        <textarea type='text' name='description' rows="2"
                        class="form-control form-control-lg" placeholder="Descripcion" onChange={handlerChange} value={product.description}></textarea>
                         { !product.description && product.price ?<p className="text-danger">Por favor ingrese una descripcion para el producto</p> : '' } 

                        </div>

                        <div class="mb-3">
                            <button className="btn btn-success">{ router.query.id ? "Actualizar Producto" : "Guardar producto" }
                            </button>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    </div>
</div> )
}
