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
        fetch('https://powerful-wildwood-39472.herokuapp.com/products')
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
                {/* <input
                    className="form-control py- my-3"
                    onChange={handleSearch}
                    type="text"
                    placeholder="Search products"
                /> */}
                {/* ///////////////////////////////////////////// */}
                <div className="search-Card">
                    <div className="CardInner">
                        <label className='search-label'>Search product by name</label>
                        <div className="search-container">
                            <div className="search-Icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#657789" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" className="feather feather-search">
                                    <circle cx="11" cy="11" r="8" />
                                    <line x1="21" y1="21" x2="16.65" y2="16.65" />
                                </svg>
                            </div>
                            <div className="InputContainer">
                                <input className='search-input' onChange={handleSearch} placeholder="Search products..." />
                            </div>
                        </div>
                    </div>
                </div>

                {/* ///////////////////////////////////////// */}
                <div className="dropdown">
                    <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                        Select Category
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                        <li><button onClick={() => { clickHandler('') }} className="dropdown-item">All</button></li>
                        <li><button onClick={() => { clickHandler('Mobile') }} className="dropdown-item">Mobile</button></li>
                        <li><button onClick={() => { clickHandler('Laptop') }} className="dropdown-item">Laptop</button></li>
                        <li><button onClick={() => { clickHandler('Tablet') }} className="dropdown-item">Tablet</button></li>
                        <li><button onClick={() => { clickHandler('Headphone') }} className="dropdown-item">Headphone</button></li>
                        <li><button onClick={() => { clickHandler('Monitor') }} className="dropdown-item">Monitor</button></li>

                    </ul>
                </div>

                {
                    displayProduct.length === 0 && <div className='py-3'>

                        <img className='img-fluid' src="https://plantechbd.com/admin_area/product_images/no-magento-product-found.jpg" alt="" />
                    </div>
                }
                <div className="row">
                    {

                        loading ? <Loader /> :
                            displayProduct?.map(product => <div className='col-12 col-md-6 col-lg-4' key={product._id}>
                                <div className="container page-wrapper ">
                                    <div className="page-inner">
                                        <div className="row mb-5">
                                            <div className="el-wrapper shadow-sm" style={{ borderRadius: '15px 15px 0px 0px' }}>
                                                <div className="box-up">
                                                    <img className="img" src={product.img} style={{ width: "100%", maxHeight: '300px' }} alt="Product img" />
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