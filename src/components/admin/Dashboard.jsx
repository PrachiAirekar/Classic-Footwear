import React from 'react'
import { Link } from 'react-router-dom'

export default function Dashboard() {
  return (
    <div>
         <div className="container">
            <div className="row mt-4">
              <div className="col-lg-4">
                <div class="card" style={{ width: "18rem", bordeRadius: "40px", backgroundColor: "rgb(136, 200, 188)" }}>

                  <div class="card-body">
                    <h5 className='display-5 fw-bold text-center'>
                      <i className='fa-solid fa-users fa-2x'></i>
                    </h5>
                    <hr className='my-4' />
                    <div className='text-center'>
                      <button className='btn border border-dark' style={{ backgroundColor: "rgb(136, 200, 188)", color: "black", width: "100px" }}>Users</button>

                    </div>
                  </div>
                </div>


              </div>
              <div className="col-lg-4">
                <div class="card" style={{ width: "18rem", bordeRadius: "40px", backgroundColor: "rgb(136, 200, 188)" }}>

                  <div class="card-body">
                    <h5 className='display-5 fw-bold text-center'>
                      <i className='fa-solid fa-bag-shopping fa-2x'></i>
                    </h5>
                    <hr className='my-4' />
                    <div className='text-center'>
                     <Link to={'/admin/products'}> <button className='btn border border-dark' style={{ backgroundColor: "rgb(136, 200, 188)", color: "black", width: "100px" }}>Products</button></Link> 

                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div class="card" style={{ width: "18rem", bordeRadius: "40px", backgroundColor: "rgb(136, 200, 188)" }}>

                  <div class="card-body">
                    <h5 className='display-5 fw-bold text-center'>
                      <i className='fab fa-first-order fa-2x'></i>
                    </h5>
                    <hr className='my-4' />
                    <div className='text-center'>
                      <button className='btn border border-dark' style={{ backgroundColor: "rgb(136, 200, 188)", color: "black", width: "100px" }}>Orders</button>

                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>
    </div>
  )
}
