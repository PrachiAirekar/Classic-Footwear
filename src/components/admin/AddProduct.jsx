
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

export default function AddProduct() {

  const {id} = useParams();

  const navigate = useNavigate();
  const [data, setData] = useState({
    title: "",
    category: "",
    price: "",
    mrp: "",
    image: "",
    formFile: "",
    brand: "",
    Color: "",
    size: "", 
    description: ""
});

// const [newData, setNewData] = useState([]);
    const[formErrors,setformErrors] = useState({});
    const[isSubmit,setIsSubmit] = useState(false);

    const initialValues = {
      title: "",
      category: "",
      price: "",
      mrp: "",
      image: "",
      formFile: "",
      brand: "",
      Color: "",
      size: "", 
    };


function handleChange(e) {
    setData({ ...data, [e.target.id]: e.target.value });
    console.log(e.target);
    console.log(data);

  };

   const Validate = (values) =>{
     
    const errors = {};

     if(!values.title){
      errors.title = "Title must be requried..!"
     }else if(values.title.length < 3){
      errors.title = "Title is too short,atleast 3 characters requried..!"

     }
     if (!values.category){
      errors.category = "Category must be selected !!!"
     }
     if(!values.price){
      errors.price = "Price must be requried !!!"
     }
     if (!values.mrp){
      errors.mrp = "Mrp must be rquried !!!"
     }
     if(!values.brand){
      errors.brand = "Brand must be requried !!!"
     }
     if(!values.image){
      errors.image = "Image must be requried !!!"
     }
     if(!values.color){
      errors.color = "Color must be requried !!!"
     }
     if(!values.size){
      errors.size = "Size must be requried!!!"
     }
     return errors;
   }

 

function handleSubmit(e) {
  e.preventDefault();
  setformErrors(Validate(data));
  // alert(id)
  console.log(data);
  if (id === undefined) {
      axios.post("https://66445d6f6c6a6565870a12a8.mockapi.io/Footwear/", data)
          .then((res) => {
              console.log(res.data);
              // loadData()
              setData({
                title: "",
                category: "",
                price: "",
                mrp: "",
                image: "",
                formFile: "",
                brand: "",
                Color: "",
                size: "", 
                description: ""
              })
              // navigate("/admin/products")

          }).catch((err) => {
              console.log(err)
              alert("Data Not Stored")
          })
  } else {
      axios.put("https://66445d6f6c6a6565870a12a8.mockapi.io/Footwear/" + id, data)
          .then((res) => {
              console.log(res.data);
              // loadData();
              setData({
              
                title: "",
                category: "",
                price: "",
                mrp: "",
                image: "",
                formFile: "",
                brand: "",
                Color: "",
                size: "", 
                description: ""
              })
              navigate("/admin/products");
          })
  }


};

useEffect(()=>{
  console.log (formErrors);
  if(Object.keys(formErrors).length === 0 && isSubmit){
    console.log(data);
  }


if(id){
  axios.get("https://66445d6f6c6a6565870a12a8.mockapi.io/Footwear/" + id)
  .then((res)=>{
    console.log(res.data);
    setData({
              
      title: res.data.title,
      category: res.data.category,
      price: res.data.price,
      mrp: res.data.mrp,
      image: res.data.image,
      formFile: res.data.formFile,
      brand: res.data.brand,
      color: res.data.color,
      size: res.data.size, 
      description: res.data.description
    })
  })
}
}, [])



  return (
    <div>
      <div className='breadcrumbs'>
      <div className="container">
        <div className="row">
          <div className="col">
            <p className='bread'>
              <span>
                <a href="">ADMIN</a>
              </span>
              /
              <span>
                <a href="">ADD PRODUCTS</a>
              </span>
            </p>
          </div>
        </div>

      </div>

    </div>
      <div className="container">
        <div className="row mt-2">
          <div className="col-lg-6">
            <form action="" onSubmit={handleSubmit}>
          <div class="mb-2">
    <label for="exampleInputEmail1" class="form-label">Title</label>
    <input type="text" class="form-control border border-dark" aria-describedby="emailHelp" id='title'  
    value={data.title} onChange={handleChange}/> 
  </div>
  <p>{formErrors.title && <span className='text-danger'>*{formErrors.title}</span>}</p>
  </form>
          </div>
          <div className="col-lg-6">
            <form action=""onSubmit={handleSubmit}>
            <div className="mb-2">
    <label for="exampleInputEmail1" class="form-label">Choose Category</label>
    <select id="category" className='form-select form-control border border-dark border-5'  value={data.category} onChange={handleChange}>
      <option value="">Choose Category..</option>
      <option value="male">Male</option>
      <option value="female">Female</option>
      <option value="kids">Kids</option>
    </select>  
            </div>
            <p>{formErrors.category && <span className='text-danger'>*{formErrors.category}</span>}</p>
            </form>
          </div>
        </div>
<div className="row mt-2">
  <div className="col-lg-3">
    <form action="" onSubmit={handleSubmit}>
    <div className="mb-2">
    <label for="exampleInputEmail1" class="form-label">Price</label>
    <input type="number" id="price"   className='form-control border border-dark border-5' aria-describedby="emailHelp"  value={data.price} onChange={handleChange}/>
    </div>
    <p>{formErrors.price && <span className='text-danger'>*{formErrors.price}</span>}</p>
    </form>
  </div>

  <div className="col-lg-3">
    <div className="mb-2">
    <label for="exampleInputEmail1" class="form-label">MRP</label>
    <input type="number" id="mrp"  className='form-control border border-dark border-5' aria-describedby="emailHelp"  value={data.mrp} onChange={handleChange}/>
    </div>
    <p>{formErrors.mrp && <span className='text-danger'>*{formErrors.mrp}</span>}</p>
  </div>

  <div className="col-lg-3">
    <div className="mb-2">
    <label for="exampleInputEmail1" class="form-label">Image</label>
    <input type="text" id="image" className='form-control border border-dark border-5'  value={data.image} onChange={handleChange}/>
    </div>
    <p>{formErrors.image && <span className='text-danger'>*{formErrors.image}</span>}</p>
  </div>

  <div className="col-lg-3">
    <div className="mb-2">
    <label for="exampleInputEmail1" class="form-label">Upload Image</label>
    <input type="file" className='form-control border border-dark border-5' id='formFile'  value={data.formFile} onChange={handleChange}/>


    </div>
  </div>


</div>

<div className="row mt-2">
  <div className="col-lg-3">
    <div className="mb-2">
    <label for="exampleInputEmail1" class="form-label">Brand</label>
    <select id="brand" className='form-select form-control border border-dark border-5'  value={data.brand} onChange={handleChange}>
      <option value="">Choose Brand...</option>
      <option value="adidas">Adidas</option>
      <option value="bata">Bata</option>
      <option value="gucci">Gucci</option>
      <option value="nike">Nike</option>
      <option value="puma">Puma</option>
      <option value="Skechers">Skechers</option>
    </select>
    </div>
    <p>{formErrors.brand && <span className='text-danger'>*{formErrors.brand}</span>}</p>
  </div>

  <div className="col-lg-3">
    <div className="mb-2">
    <label for="exampleInputEmail1" class="form-label">Color</label>
    <input type="text" class="form-control" aria-describedby="emailHelp" id='color'  value={data.Color} onChange={handleChange}/> 
    </div>
    <p>{formErrors.color && <span className='text-danger'>*{formErrors.color}</span>}</p>
  </div>

  <div className="col-lg-3">
  <label for="exampleInputEmail1" class="form-label">Size</label>
  <select id="size" className='form-select form-control border border-dark border-5' value={data.size} onChange={handleChange} >
      <option value="">Choose Size...</option>
      <option value="6">6</option>
      <option value="7">7</option>
      <option value="8">8</option>
      <option value="9">9</option>
      <option value="10">10</option>
    </select>

  </div>
  <p>{formErrors.size && <span className='text-danger'>*{formErrors.size}</span>}</p>

</div>

<div className="row">
<div className="col-lg-10">
  <div className="mb-2">
    <label for="exampleInputEmail1" class="form-label">Description</label>
    <textarea id="description" className="form-control form-control border border-secondary border-5" rows="3"  value={data.description} onChange={handleChange}></textarea>
  </div>
  <button  onClick={(e) => handleSubmit(e)} className='btn' style={{backgroundColor: "rgb(136, 200, 188)" ,color: "black"}}>Submit </button>
</div>
</div>

      </div> 
    </div>
  );
}