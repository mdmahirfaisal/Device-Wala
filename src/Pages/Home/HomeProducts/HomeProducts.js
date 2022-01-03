import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Loader from '../../Shared/Loader/Loader';
import './HomeProducts.css';

const HomeProducts = () => {
    const [loading, setLoading] = useState(false)
    const [products, setProducts] = useState([]);
    const [displayProduct, setDisplayProduct] = useState([])

    useEffect(() => {
        setLoading(true)
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => {
                setLoading(false)
                setProducts(data)
                setDisplayProduct(data)
                console.log(data);
            })
    }, [])

    const handleSearch = (e) => {
        const searchText = e.target.value;
        const matchedProduct = products?.filter((data) =>
            data.name.toLowerCase().includes(searchText?.toLowerCase()) || data.category.toLowerCase().includes(searchText?.toLowerCase()) || data.brand_name.toLowerCase().includes(searchText?.toLowerCase())
        );
        setDisplayProduct(matchedProduct);
        console.log(searchText);
        console.log(matchedProduct);

    };
    console.log(products);
    const clickHandler = (e) => {
        const matchedProduct = products?.filter((data) =>
            data.category.toLowerCase().includes(e?.toLowerCase())
        );
        setDisplayProduct(matchedProduct)
    }
    return (
        <div className='bg-light'>
            <h1 className='py-4'>OUR PRODUCTS</h1>

            <div className="container">
                <input
                    className="form-control py- my-3"
                    onChange={handleSearch}
                    type="text"
                    placeholder="Search products"
                />




                <div class="dropdown">
                    <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                        Select Category
                    </button>
                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                        <li><button onClick={() => { clickHandler('') }} className="dropdown-item">All</button></li>
                        <li><button onClick={() => { clickHandler('Mobile') }} className="dropdown-item">Mobile</button></li>
                        <li><button onClick={() => { clickHandler('Laptop') }} className="dropdown-item">Laptop</button></li>
                        <li><button onClick={() => { clickHandler('Tablet') }} className="dropdown-item">Tablet</button></li>
                        <li><button onClick={() => { clickHandler('Headphone') }} className="dropdown-item">Headphone</button></li>
                        <li><button onClick={() => { clickHandler('Monitor') }} className="dropdown-item">Monitor</button></li>

                    </ul>
                </div>
                <div className="row">
                    {

                        loading? <Loader />: 
                            displayProduct?.map(product => <div className='col-12 col-md-6 col-lg-4' key={product._id}>
                                <div className="container page-wrapper ">
                                    <div className="page-inner">
                                        <div className="row mb-5">
                                            <div className="el-wrapper shadow-sm" style={{ borderRadius: '15px 15px 0px 0px' }}>
                                                <div className="box-up">
                                                    <img className="img" src={product.img} width="60%" style={{ maxHeight: '300px' }} alt="Product img" />
                                                    <div className="img-info">
                                                        <div className="info-inner">
                                                            <span className="p-name">{product.name}</span>
                                                            <span className="p-company"></span>
                                                        </div>
                                                        <div className="a-size">Available Products : <span className="size">All Products Available</span></div>

                   

                                                    </div>
                                                </div>
    
                                                <div className="box-down">
                                                    <div className="h-bg">
                                                        <div className="h-bg-inner"></div>
                                                    </div>
    
                                                    <Link className="cart" to={`/product/${product._id}`}>
                                                        <span className="price">$ {product.price}</span>
                                                        <span className="add-to-cart">
                                                            <span className="txt btn btn-danger">Buy Now</span>
                                                        </span>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            )
                        
                    }
                </div>
            </div>
        </div>
    );
};

export default HomeProducts;