import axios from 'axios';
import React, { useEffect, useState } from 'react';
import{useDispatch} from 'react-redux';
import { addProductToCart } from "../state/cartSlice";

export default function AllProducts() {

    const dispatch = useDispatch();

    const [data,setData] =useState([]);

    function fetchData(){
        axios.get("https://66445d6f6c6a6565870a12a8.mockapi.io/Footwear/")
        .then((res) => {
            console.log(res.data);
            setData(res.data)
          })
      };

    useEffect(() => { 
        fetchData();
      }, [])
    
      function productToCart(e, product) {
        e.preventDefault();
        console.log(product);
    
        const cartProduct = {
          id: product.id,
          title: product.title,
          image: product.image,
          price: product.price,
          mrp: product.mrp,
          quantity: 1
        };
    
        console.log(cartProduct);
        dispatch(addProductToCart(cartProduct))
      }
    
    
  return (
<div>
      {/* <body>
         */}
      <div class="colorlib-product">
        <div class="container">
          <div class="row">
            <div class="col-sm-8 offset-sm-2 text-center colorlib-heading">
              <h2>Best Sellers</h2>
            </div>
            
          </div>
          <div class="row">
          
            {
              data.map((product) => {
                return (
                  <div class="card m-2" style={{ width: "18rem" }}>
                    <img src={product.image} class="card-img-top" alt="..." />
                    <div class="card-body">
                    <h5 class="card-title">{product.title}</h5>
                    <h5 class="card-title">₹ {product.price} /-</h5>
                      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                      <a href="#" class="btn btn-primary">
                        <button onClick={(e) => productToCart(e, product)} className='btn btn-primary'>Add to Cart</button>
                      </a>
                    </div>
                  </div>
                )
              })
            }

          </div>
          <div class="row">
            <div class="col-md-12 text-center">
              <p><a href="#" class="btn btn-primary btn-lg">Shop All Products</a></p>
            </div>
          </div>
        </div>
      </div>
      {/* </body> */}

    </div>
  )
}