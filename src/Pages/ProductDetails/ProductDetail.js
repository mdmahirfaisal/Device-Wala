import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import Loader from "../Shared/Loader/Loader";

const ProductDetail = () => {
  const [loading, setLoading] = useState(false)
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [similarProduct, setSimilarProduct] = useState([])
  const { id } = useParams();
  useEffect(() => {
    fetch(`http://localhost:5000/product/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);
  useEffect(() => {
    setLoading(true)
    fetch(`http://localhost:5000/products/${product?.category}`)
      .then((res) => res.json())
      .then((data) => {
        setLoading(false)
        setSimilarProduct(data)
      });
  }, [product?.category]);

  return (
    <div className="container">
      <div className="row py-5">
        <div className="col-md-4">
          <img className="img-fluid" src={product?.img} alt={product?.name} />
          <p style={{ userSelect: "none" }} className="fs-3">
            {" "}
            Quantity:
            <span className="border ms-3 p-2"
              onClick={() => (quantity > 1 ? setQuantity(quantity - 1) : "1")}
            >
              -
            </span>{" "}
            <input
              className="text-center rounded"
              value={quantity}
              style={{ width: "60px", userSelect: "none" }}
              type="text"
              disabled
            />{" "}
            <span className="border p-2" onClick={() => setQuantity(quantity + 1)}>+</span>
          </p>
          <Link style={{padding:'15px', display:'block', backgroundColor:'#FF5E14', textDecoration:'none', color: '#fff'}} to={`/order/product/${id}`}>Order Now</Link>
        </div>
        <div className="col-md-8 text-start">
          <h2>{product?.name}</h2>
          <p className="alert alert-primary">Brand: {product?.brand_name}</p>
          <p className="alert alert-success">Category: {product?.category}</p>
          <p className="alert alert-info">
            Product Code: {product?.product_code}
          </p>
          <p className="alert alert-secondary">{product?.description}</p>
        </div>
      </div>
      <div className="row">
          <h2>Similar Products</h2>
          {loading? <Loader /> : similarProduct?.map(similar => <div className="col-md-4">
              <Link to={`/product/${similar?._id}`}>
              <Card className="text-start my-2" style={{ width: '18rem' }}>
                <Card.Img variant="top" src={similar?.img} />
                <Card.Body>
                    <Link to={`/product/${similar?._id}`}>{similar?.name}</Link>
                    <Card.Text>
                    {similar?.brand_name}
                    </Card.Text>
                    
                </Card.Body>
                </Card>   

              </Link>
          </div>)}
      </div>
    </div>
  );
};

export default ProductDetail;
