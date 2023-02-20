
import './App.css';
import Website from './product/Website.js'
import Image from './product/Image.js'
import  Websitelogo from './product/Websitelogo.js'
import Description from './product/Description.js'
import Button from './product/Button.js'
import Productprice from './product/Productprice.js'
function App() {
  return (
    <div className="App">
   
    < Websitelogo />
    <Website />
    <Image />
    <Description />
    <Productprice />
    <Button />
    </div>
  );
}

export default App;
