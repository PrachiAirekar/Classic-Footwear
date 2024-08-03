import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

export default function Checkout() {
    const productTotal = useSelector((state)=>{
        return state.cart.allTotal; 
    } );
     const cartProducts = useSelector((state)=>{
      return state.cart.products;
     });

     function paynow(){
        var options ={
            "key": "rzp_test_4yosHYDduPYmKN", // Enter the Key ID generated from the Dashboard
            "amount": productTotal * 100, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
            "currency": "INR",
            "name": "My Footwear", //your business name
            "description": "Test Transaction",
            "image": "https://i.pinimg.com/474x/79/22/26/792226dd2553f186539212aa2c7bb3d3.jpg",
            // "order_id": "12456", //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
            "callback_url": "https://eneqd3r9zrjok.x.pipedream.net/",
            "prefill": { //We recommend using the prefill parameter to auto-fill customer's contact information especially their phone number
                "name": "Gaurav Kumar", //your customer's name
                "email": "gaurav.kumar@example.com",
                "contact": "9000090000" //Provide the customer's phone number for better conversion rates 
            },
            "notes": {
                "address": "Razorpay Corporate Office"
            },
            "theme": {
                // "color": "#3399cc"
                "color": "#88c8bc" 
        }
    };

         var rzp1 = new window.Razorpay(options);
       rzp1.open();
     }


  return (
    <div>
        <div className="breadcrumbs">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <p className='bread'>
                            <span>
                            <Link to={'/'}>Home</Link>
                            </span>
                            /
                            <span>
                                <Link to={'/checkout'}>
                                </Link>
                               Checkout
                            </span>
                          
                        </p>
                    </div>
                </div>

            </div>
        </div>
        <div class="colorlib-product">
        <div class="container">
            <div class="row">
            <div class="col-lg-8">
            <form method = "post" class="colorlib-form">
                <h2>Billing Details</h2>
                
                <div class="row">
                    <div class="col-md-12">
                        <div class="from group">
                        <label for="country">Select Country</label>
                        <div class="form-field">
                            <i class="icon icon-arrow-down3"></i>
                            <select name="people" id="country" 
                            class="form-control">
                            <option>Select country</option><option value="india">India</option>
                            <option value="china">China</option>
                            <option value="japan">Japan</option>
                            <option value="korea">Korea</option>
                            <option value="Philippines">Philippines</option>
                            </select>
                            </div>
                        </div>
                    </div>
               
                <div class="col-md-6">
                <div class="form-group">
                <label for="fname">First Name</label>
                <input type="text" id="name" class="form-control" placeholder="Your firstname"/>
                </div>
                </div>
                <div class="col-md-6">
                <div class="form-group"><label for="lname">Last Name</label>
                <input type="text" id="surname" class="form-control" placeholder="Your lastname"/>
                </div>
                </div>
                <div class="col-md-12">
                <div class="form-group"><label for="fname">Address</label><input type="text" id="address" class="form-control" placeholder="Enter Your Address"/>
                </div>
                </div>
                <div class="col-md-12"><div class="form-group"><label for="companyname">Town/City</label><input type="text" id="city" class="form-control" placeholder="Town or City"/>
                </div>
                </div>
                <div class="col-md-6"><div class="form-group"><label for="stateprovince">State</label><input type="text" id="state" class="form-control" placeholder="State Province"/>
                </div>
                </div>
                <div class="col-md-6"><div class="form-group"><label for="lname">Zip/Postal Code</label>
                <input type="text" id="zip" class="form-control" placeholder="Zip / Postal"/>
                </div></div>
                <div class="col-md-6"><div class="form-group"><label for="email">E-mail Address</label>
                <input type="text" id="email" class="form-control" placeholder="State Province"/>
                </div></div>
                <div class="col-md-6"><div class="form-group"><label for="Phone">Phone Number</label>
                <input type="text" id="mobile" class="form-control" placeholder=""/>
                </div></div>
                <div class="col-md-12"><div class="form-group"><div class="radio"><label>
                <input type="radio" name="optradio"/> Create an Account? </label>
                <label><input type="radio" name="optradio"/> Ship to different address</label>
                </div></div>
                </div> 
               
                </div> 
            </form>
            </div>
            <div class="col-lg-4"><div class="row">
                <div class="col-md-12">
                    <div class="cart-detail">
                        <h2>Cart Total</h2>
                        <ul>
                            <li><span>Subtotal</span> <span> {productTotal}/-</span>
                            <ul>{
                                cartProducts.map((product)=>{
                                    return(
                                        <li>
                                            <span>{product.quantity}X{product.title}</span>
                                            <span>{product.price}/-</span>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                        </li>
                            <li><span>Shipping</span> 
                            <span>50.00 /-</span>
                        </li>

                            <li><span>Order Total</span> 
                            <span>{productTotal-50}/-</span>
                         </li>
                     </ul>
                </div>
                </div>

            <div class="w-100"></div>
            <div class="col-md-12">
                <div class="cart-detail">
                    <h2>Payment Method</h2>
              
              <div class="form-group">
                <div class="col-md-12">
                    <div class="radio">
            <label>
            <input type="radio" name="optradio"/> Direct Bank Tranfer</label>
            </div>
            </div>
            </div>
            
            <div class="form-group">
                <div class="col-md-12">
                    <div class="radio">
            <label>
            <input type="radio" name="optradio"/> Check Payment</label>
            </div>
            </div>
            </div>
            <div class="form-group"><div class="col-md-12">
            <div class="radio">
            <label>
            <input type="radio" name="optradio"/> Paypal</label>
            </div>
            </div>
            </div>
            <div class="form-group">
                <div class="col-md-12">
                    <div class="checkbox">
                    <label>
                    <input type="checkbox" value="checked"/> I have read and accept the terms and conditions</label>
                    </div>
                    </div>
                    </div>
                    </div>
                    </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12 text-center">
                            <p><button onClick = {paynow} class="btn btn-primary" fdprocessedid="ap7bjt">Place an Order</button>
                            </p>
                            </div>
                            </div>
                            </div>         
       
            </div>
        </div>
        </div>
    </div>
  )
};
