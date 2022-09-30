// import "./App.css";

import Data from "./Data";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <a href="/">Trendy</a>
      </header>
      <main>
        <h1>Feature Products</h1>
        <div className="products">
          {Data.products.map((product) => (
            <div key={product.slug} className="product">
              <a href={`/product/${product.slug}`}>
                <img src={product.image} alt={product.name}></img>
              </a>
              <div className="product-info">
                <a href={`/product/${product.slug}`}>
                  <p>{product.name}</p>
                </a>
                <p>
                  {" "}
                  <strong>₹{product.price}</strong>
                </p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
