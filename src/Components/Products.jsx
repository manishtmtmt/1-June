import React, { useEffect, useState } from 'react'
import { Link, Outlet } from 'react-router-dom';

const Products = () => {
    const [products, setProducts] = useState([])
    useEffect(()=> {
        const fetchProducts = async () => {
            fetch("http://localhost:8080/products")
            .then((r)=>r.json())
            .then((d)=>{
                setProducts(d)
            })
        };
        fetchProducts()
    },[])
  return (
    <div>
        Products:
        <div style={{display: "grid", gridTemplateColumns: "repeat(3, 1fr)"}}>
            <Outlet />
        <div>
            {products.map((product)=>(
                <div key={product.id}>
                    <Link to={`/products/${product.id}`}>{product.name}</Link>
                </div>
            ))}
        </div>
        <Outlet />
        </div>
    </div>
  )
}

export default Products