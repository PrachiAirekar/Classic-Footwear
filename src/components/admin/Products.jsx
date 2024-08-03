import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Products() {
  const [data, setData] = useState([]);
  

  function fetchData() {
    axios.get("https://66445d6f6c6a6565870a12a8.mockapi.io/Footwear/")
      .then((res) => {
        console.log(res.data);
        setData(res.data)
      })
  };
 
 
  
  function handleDelete(e, id) {
    e.preventDefault();
    // alert(id)
    axios.delete("https://66445d6f6c6a6565870a12a8.mockapi.io/Footwear/" + id)
       
        .then((res) => {
            console.log(res.data);
            fetchData();
        })
  };

 


  useEffect(()=>{
    fetchData()
  }, [])
  

  return (
    <div>
      <div className='breadcrumbs'>
        <div className="container mt-3">
          <div className="row">
            <div className="col">
              <p className='bread'>
                <span>
                  <a href="">ADMIN</a>
                </span>
                /
                <span>
                  PRODUCTS
                </span>
              </p>
            </div>
          </div>

        </div>

      </div>
      <div className="container">
        <div className="mt-2">
          <table className='table bg-white'>
            <thead className='border rounded-pill' style={{ backgroundColor: "rgb(136, 200, 188)" }}>
              <tr className='text-center'>
                <th>#</th>
                <th>Image</th>
                <th>Title</th>
                <th>Category</th>
                <th>Price</th>
                <th>MRP</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody className='text-center'>
{
   data.map((alldata ,i) =>{
    return(
      <tr>
      <th scope='row'>{i + 1}</th>
          <td><img style={{width: "100px"}} src={alldata.image} alt="" /></td>
          <td>{alldata.title}</td>
          <td>{alldata.category}</td>
          <td>{alldata.price}</td>
          <td>
            <del>{alldata.mrp}</del>
          </td>
          <td>
            <Link to={"/admin/addproduct/" + alldata.id}>
              <button className='btn' style={{ backgroundColor: "rgb(136, 200, 188)", color: "black" }}>Edit</button>
            </Link>
            
            <button onClick={(e) => handleDelete(e, alldata.id)} className='btn' style={{ backgroundColor: "rgb(136, 200, 188)",  color: "black" }}>Delete</button>

          </td>

    </tr>

    )
  })


}
           

            </tbody>

          </table>
        </div>

      </div>
    </div>
  )
}
