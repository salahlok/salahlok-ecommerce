import {Link,useParams} from 'react-router-dom'



const SingleProducts = ({cartItems}) => {
    const {id} = useParams()
    

  return <div className="single">
    <div className="single-content">
      <div className="single-header">
        <h1>Product Details</h1>
      </div>
      <div className="underline"></div>


      {cartItems.filter((item)=> item.id == id).map((item)=>(
      <div key={item.id} className="single-container">
        <div className="single-image">
          <img src={item.image} alt="" />
        </div>
        <div className="single-details">
          <div className="single-price">
            <h2>{item.title}</h2>
            <h4>${item.price}</h4>
          </div>
          <p><span>Description :</span> {item.desc}</p>
          <p><span>More Details :</span> {item.infos}</p>
        </div>
      </div>
      
      ))}
        <div className="single-button">
          <Link to='/payment'><button>Pay</button></Link>
          <Link to='/'><button>Return home</button></Link>
        </div>
      </div>
      
  </div>;
};

export default SingleProducts;
