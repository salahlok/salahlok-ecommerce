
import {Link} from 'react-router-dom'

const Products = ({cartItems,handleAddCard}) => {
    


  return <div className='products' id='products'>
      <h1>List of products</h1>
      <div className="underline"></div>
      <div className="products-container">
          <div className="product-content">
              {cartItems.map((item)=>(
                  <div key={item.id} className="product-card">
                      <div className="product-image">
                          <img src={item.image} alt="" />
                      </div>
                      <div className="products-infos">
                          <h3><Link to={`/product/${item.id}`}>{item.title}</Link></h3>
                          <h5>${item.price}</h5>
                          <div className="product-button">
                            <button onClick={()=> handleAddCard(item)}>Add to cart</button>                            
                          </div>
                      </div>
                  </div>
              ))}
          </div>
      </div>
  </div>;
};

export default Products;
