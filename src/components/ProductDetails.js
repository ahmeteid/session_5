import { useEffect, useState } from "react";
import Product from "./Product";
import { useParams } from "react-router-dom";

function ProductDetails() {
  const api_url = "https://fakestoreapi.com/products";
  const [product, setProduct] = useState({});
  const params = useParams();

  const getProductDetails = () => {
    fetch(`${api_url}/${params.productId}`)
      .then((res) => res.json())
      .then((product) => setProduct(product));
  };

  useEffect(() => {
    getProductDetails();
  }, []);

  return (
    <>
      <Product product={product} showButton={false} />
    </>
  );
}

export default ProductDetails;
