import React from 'react';
import Footer from '../Shared/Footer/Footer';
import NavigationBar from '../Shared/NavigationBar/NavigationBar';
import ProductDetail from './ProductDetail';

const ProductDetailpage = () => {
    return (
        <div>
            <NavigationBar></NavigationBar>
            <ProductDetail></ProductDetail>
            <Footer></Footer>
        </div>
    );
};

export default ProductDetailpage;