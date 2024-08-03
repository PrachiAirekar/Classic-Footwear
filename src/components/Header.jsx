import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux'


export default function Header()
{

	const count = useSelector((state) => {
		// console.log(state.cart.products);
		return state.cart.products
	});
    return(
        <>
        <nav class="colorlib-nav" role="navigation">
			<div class="top-menu">
				<div class="container">
					<div class="row">
						<div class="col-sm-7 col-md-9">
							<div id="colorlib-logo"><a href="index.html">Footwear</a></div>
						</div>
						<div class="col-sm-5 col-md-3">
			            <form action="#" class="search-wrap">
			               <div class="form-group">
			                  <input type="search" class="form-control search" placeholder="Search"/>
			                  <button class="btn btn-primary submit-search text-center" type="submit"><i class="icon-search"></i></button>
			               </div>
			            </form>
			         </div>
		         </div>
					<div class="row">
						<div class="col-sm-12 text-left menu-1">
							<ul>
								<li class="active">
									<a href='/'>
									<img src={require('../assets/images/footware_logo-removebg-preview.png')} style={{width:"150px"}} alt=""/>
									</a>
								</li>
								
								<li class="active"><Link to={'/'}>Home</Link></li>
								<li><Link to={'/allproducts'}>All Products</Link></li>
								<li><Link to={'/about'}>About</Link></li>
								<li><Link to={'/contact'}>Contact</Link></li>
								<li><Link to={'/adminlogin'}>Admin Login</Link></li>
								<li class="cart"><Link to={'/cart'}><button type="button" class="btn btn-light position-relative"><i class="fa-solid fa-cart-shopping"></i><span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{count.length}</span></button>Cart [{count.length}]</Link></li>
							</ul>
						</div>
					</div>
				</div>
			</div>
			<div class="sale">
				<div class="container">
					<div class="row">
						<div class="col-sm-8 offset-sm-2 text-center">
							<div class="row">
								<div class="owl-carousel2">
									<div class="item">
										<div class="col">
											<h3><a href="#">25% off (Almost) Everything! Use Code: Summer Sale</a></h3>
										</div>
									</div>
									<div class="item">
										<div class="col">
											<h3><a href="#">Our biggest sale yet 50% off all summer shoes</a></h3>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</nav>
        </>    );
}

