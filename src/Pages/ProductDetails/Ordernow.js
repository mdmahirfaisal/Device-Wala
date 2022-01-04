import Footer from "../Shared/Footer/Footer";
import NavigationBar from "../Shared/NavigationBar/NavigationBar";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useForm } from "react-hook-form";
import useAuth from "./../../hooks/useAuth";


const Ordernow = () => {
  const [product, setProduct] = useState({});
  const { id } = useParams();
  const { user } = useAuth();
  const date = new Date().toLocaleString();

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    data.status = "pending";
    data.orderDate = date;
    data.productName = product?.name;
    data.productImg = product?.img;
    data.totalPrice = product?.price;
    fetch("https://powerful-wildwood-39472.herokuapp.com/orders", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          alert("Well Done", "Your order is recorded", "success");
          reset();
          console.log(data);
        }
      });
    reset();
  };

  useEffect(() => {
    fetch(`https://powerful-wildwood-39472.herokuapp.com/product/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);
  return (
    <div>
      <NavigationBar />
      <div style={{ marginTop: "120px" }} className="container">
        <div className="row">
          <div className="col-md-6">
            <h2>{product?.name}</h2>
            {console.log(id)}
            <img className="img-fluid" src={product?.img} alt="" />
            <h4>Price : ${product?.price}</h4>
            <p>{product?.author}</p>
          </div>
          <div className="col-md-6">
            <form
              className="d-flex flex-column mx-auto mt-4"
              style={{ maxWidth: "400px" }}
              onSubmit={handleSubmit(onSubmit)}
            >
              <input
                value={user.displayName}
                placeholder="Your Name"
                className="form-control mt-2"
                {...register("name", { required: true })}
              />
              {errors.name && (
                <span className="text-danger">This field is required</span>
              )}
              <input
                value={user.email}
                placeholder="Your Email"
                className="form-control mt-2"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <span className="text-danger">This field is required</span>
              )}
              <input
                type="number"
                placeholder="Phone Number"
                className="form-control mt-2"
                {...register("number", { required: true })}
              />
              {errors.number && (
                <span className="text-danger">This field is required</span>
              )}
              <input
                placeholder="Street Address"
                className="form-control mt-2"
                {...register("address", { required: true })}
              />
              {errors.address && (
                <span className="text-danger">This field is required</span>
              )}
              <input
                placeholder="City"
                className="form-control mt-2"
                {...register("city", { required: true })}
              />
              {errors.city && (
                <span className="text-danger">This field is required</span>
              )}
              <input
                placeholder="Postal Code"
                className="form-control my-2"
                {...register("postcode", { required: true })}
              />
              {errors.postcode && (
                <span className="text-danger">This field is required</span>
              )}

              <input
                className="form-control mb-5  bg-success text-white"
                type="submit" value="Confirm Order"
              />
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Ordernow;
