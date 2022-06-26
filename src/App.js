import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card';
import Data from './components/Data';

function App() {
  const cards = Data.map((items)=>{
    return(
      <Card
        key={items.key}
        img={items.img}
        rating={items.rating}
        review={items.review}
        country={items.country}
        title={items.title}
        price={items.price}
      />
    );
  });

  return(
    <div>
      <Navbar />
      <Hero />
      <section className='cards-list'>
        {cards}
      </section>
    </div>
  )
}

export default App;
