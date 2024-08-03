import React from 'react'
import { useSelector } from 'react-redux';
import { incrementQuantity, decrementQuantity, removeProduct,allTotal } from '../state/cartSlice';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

export default function Cart() {
	const dispatch = useDispatch();
  var productTotal =0;

  const cartProducts = useSelector((state) => {
    // console.log(state.cart.products);
    return state.cart.products
  });

  return (
    <div>
        <div class="colorlib-product">
			<div class="container">
				{/* <div class="row row-pb-lg">
					<div class="col-md-10 offset-md-1">
						<div class="process-wrap">
							<div class="process text-center active">
								<p><span>01</span></p>
								<h3>Shopping Cart</h3>
							</div>
							<div class="process text-center">
								<p><span>02</span></p>
								<h3>Checkout</h3>
							</div>
							<div class="process text-center">
								<p><span>03</span></p>
								<h3>Order Complete</h3>
							</div>
						</div>
					</div>
				</div> */}

        <div class="row row-pb-lg">
            <div class="col-md-12">
              <div class="product-name d-flex">
                <div class="one-forth text-left px-4">
                  <span>Product Details</span>
                </div>
                <div class="one-eight text-center">
                  <span>Price</span>
                </div>
                <div class="one-eight text-center">
                  <span>Quantity</span>
                </div>
                <div class="one-eight text-center">
                  <span>Total</span>
                </div>
                <div class="one-eight text-center px-4">
                  <span>Remove</span>
                </div>
              </div> 

			  {
                cartProducts.map((product) => {
                  productTotal += parseInt(product.price) * parseInt(product.quantity)
                  return (
                    <div class="product-cart d-flex">
                      <div class="one-forth">
                        <div class="product-img" >
                          <img style={{ width: "100px" }} src={product.image} alt="" />
                        </div>
                        <div class="display-tc">
                          <h3>{product.title}</h3>
                        </div>
                      </div>
                      <div class="one-eight text-center">
                        <div class="display-tc">
                          <span class="price">{product.price}</span>
                        </div>
                      </div>
                      <div class="one-eight text-center">
                        <div class="display-tc">
                          <div className="d-flex">
                            <button onClick={() => dispatch(decrementQuantity(product.id))} className=''>-</button>
                            <input type="text" id="quantity" name="quantity" class="form-control input-number text-center" value={product.quantity} min="1" max="100" />
                            <button onClick={() => dispatch(incrementQuantity(product.id))} className=''>+</button>
                          </div>
                        </div>
                      </div>
                      <div class="one-eight text-center">
                        <div class="display-tc">
                          <span class="price">{product.price}</span>
                        </div>
                      </div>
                      <div class="one-eight text-center">
                        <div class="display-tc">
                          <button onClick={() => dispatch(removeProduct(product.id))}>X</button>
                        </div>
                      </div>
                    </div>
                  )
                })
              }


     
        </div>
          </div>

			
				<div class="row row-pb-lg">
					<div class="col-md-12">
						<div class="total-wrap">
							<div class="row">
								<div class="col-sm-8">
									<form action="#">
										<div class="row form-group">
											<div class="col-sm-9">
												<input type="text" name="quantity" class="form-control input-number" placeholder="Your Coupon Number..."/>
											</div>
											<div class="col-sm-3">
												<input type="submit" value="Apply Coupon" class="btn btn-primary"/>
											</div>
										</div>
									</form>
								</div>
								<div class="col-sm-4 text-center">
									<div class="total">
										<div class="sub">
											<p><span>Subtotal:</span> <span>{productTotal}/-</span></p>
											{/* <p><span>Delivery:</span> <span></span></p> */}
											<p><span>Discount:</span> <span></span></p>
										</div>
										<div class="grand-total">
											<p><span><strong>Total:</strong></span> <span>{productTotal-50}</span></p>
											<Link to={'/checkout'}>
											<button onClick={()=>dispatch(allTotal((productTotal-50)))} className='btn btn-primary'>Proceed to Checkout</button>
											</Link>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

		     {/* <div class="row">
            <div class="col-sm-8 offset-sm-2 text-center colorlib-heading colorlib-heading-sm">
              <h2>Related Products</h2>
            </div>
          </div> */}
		  {/* <div class="row">
            <div class="col-md-3 col-lg-3 mb-4 text-center">
              <div class="product-entry border">
                <a href="#" class="prod-img">
                  <img src={require('../assets/images/item-1.jpg')} class="img-fluid" />

                </a>
                <div class="desc">
                  <h2><a href="#">Women's Boots Shoes Maca</a></h2>
                  <span class="price">$139.00</span>
                </div>
              </div>
            </div>
            <div class="col-md-3 col-lg-3 mb-4 text-center">
              <div class="product-entry border">
                <a href="#" class="prod-img">
                  <img src={require('../assets/images/item-2.jpg')} class="img-fluid" />

                </a>
                <div class="desc">
                  <h2><a href="#">Women's Minam Meaghan</a></h2>
                  <span class="price">$139.00</span>
                </div>
              </div>
            </div>
            <div class="col-md-3 col-lg-3 mb-4 text-center">
              <div class="product-entry border">
                <a href="#" class="prod-img">
                  <img src={require('../assets/images/item-3.jpg')} class="img-fluid" />

                </a>
                <div class="desc">
                  <h2><a href="#">Men's Taja Commissioner</a></h2>
                  <span class="price">$139.00</span>
                </div>
              </div>
            </div>
            <div class="col-md-3 col-lg-3 mb-4 text-center">
              <div class="product-entry border">
                <a href="#" class="prod-img">
                  <img src={require('../assets/images/item-4.jpg')} class="img-fluid" />
                </a>
                <div class="desc">
                  <h2><a href="#">Russ Men's Sneakers</a></h2>
                  <span class="price">$139.00</span>
                </div>
              </div>
            </div>
          </div> */}
			</div>
		</div>
    </div>
  )
}
