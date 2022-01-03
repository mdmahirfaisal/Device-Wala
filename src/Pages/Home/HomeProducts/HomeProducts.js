import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './HomeProducts.css';

const HomeProducts = () => {

    const [products, setProducts] = useState([]);
    const [displayProduct, setDisplayProduct] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => {
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
    return (
        <div className='bg-light'>
            <h1 className='py-4'>OUR PRODUCTS</h1>

            <div className="container">
                <input
                    className="form-control"
                    onChange={handleSearch}
                    type="text"
                    placeholder="Search products"
                />
                <div className="row">
                    {
                        displayProduct?.map(product => <div className='col-12 col-md-6 col-lg-4' key={product._id}>
                            <div className="container page-wrapper ">
                                <div className="page-inner">
                                    <div className="row mb-5">
                                        <div className="el-wrapper shadow-sm" style={{ borderRadius: '15px 15px 0px 0px' }}>
                                            <div className="box-up">
                                                <img className="img img-fluid" src={product.img}  style={{ maxHeight: '300px', width: '100%' }} alt="Product img" />
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