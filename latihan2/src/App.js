import logo from './logo.svg';
import './App.css';

const phoneData = [
  { name : "I phone x", price : 10000000 , discount : 50},
  { name : "Oppo", price : 14000000, discount : 30 },
  {name : "Redmi", price : 5000000, discount :42},
  {name: "Vivo", price : 10000000, discount:0}
]

function Product({name,price,discount = 0}){
  return (
    <div>
      <h2>{name}</h2>
      {discount > 0 && <p><s>Rp {price}</s>({discount}%)</p>}
      <p>
        <b>Rp {parseInt(price) - parseInt(price) * (parseInt(discount)/100)}</b>
      </p>
      <hr/>
    </div>
  );
}

function App() {
  return (
    <div>
      {phoneData.map((phone,id)=>(
      <Product 
      key={id}
      name={phone.name}
      price={phone.price}
      discount={phone.discount}
      ></Product>
      
      ))}
    </div>
  );
}

export default App;
