import { useEffect, useState } from "react";
import Product from "./Product";

function ProducstList() {
  const api_url = "https://fakestoreapi.com/products";

  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  const getProducts = () => {
    fetch(api_url)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  };

  const getCategries = () => {
    fetch(`${api_url}/categories`)
      .then((res) => res.json())
      .then((data) => setCategories(data));
  };

  const getProductInsideCategory = (catName) => {
    fetch(`${api_url}/category/${catName}`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  };

  useEffect(() => {
    getProducts();
    getCategries();
  }, []);
  return (
    <>
      <h2 className="text-center p-3">Our Products</h2>
      <div className="container">
        <button
          className="btn btn-info"
          onClick={() => {
            getProducts();
          }}
        >
          All
        </button>
        {categories.map((cat) => {
          return (
            <button
              key={cat}
              className="btn btn-info"
              onClick={() => {
                getProductInsideCategory(cat);
              }}
            >
              {cat}
            </button>
          );
        })}

        <div className="row">
          {products.map((product) => {
            return (
              <div className="col-3" key={product.id}>
                <Product product={product} showButton={true} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default ProducstList;
