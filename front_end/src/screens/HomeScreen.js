import React, { useState, useEffect, useReducer } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Axios from "axios";
import Product from "../components/Product";
import axios from "axios";
import logger from "use-reducer-logger";
import { Helmet } from "react-helmet-async";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_REQUEST":
      return { ...state, loading: true };
    case "FETCH_SUCCESS":
      return { ...state, products: action.payload, loading: false };
    case "FETCH_FAIL":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
function HomeScreen() {
  const [{ loading, error, products }, dispatch] = useReducer(logger(reducer), {
    products: [],
    loading: true,
    error: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: "FETCH_REQUEST" });
      try {
        const result = await axios.get("http://localhost:5001/api/products");

        dispatch({ type: "FETCH_SUCCESS", payload: result.data });
      } catch (err) {
        dispatch({ type: "FETCH_FAIL", payload: err.message });
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <Helmet>
        <title>Trendy</title>
      </Helmet>{" "}
      <h1>Feature Products</h1>
      <div className="products">
        <Row>
          {loading ? (
            <LoadingBox />
          ) : error ? (
            <MessageBox varient="danger">{error}</MessageBox>
          ) : (
            products.map((product) => (
              <Col key={product.slug} sm={6} md={4} lg={3} className="mb=3">
                <Product product={product}></Product>
              </Col>
            ))
          )}
        </Row>
      </div>
    </div>
  );
}

export default HomeScreen;
