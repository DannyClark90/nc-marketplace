import '../css/AllListings.css'
import axios from 'axios';
import { useState, useEffect } from 'react';
import Loading from '../page components/Loading'
import ItemCard from '../components/ItemCard';
import ButtonDarkExample from '../components/DropDownButton';

function AllListings() {
  const [isLoading, setIsLoading] = useState(true)
  const [items, setItems] = useState([])

  const getAllItems = () => {
    return axios.get('https://nc-marketplace-sem-4.onrender.com/api/items')
  .then((allItems) => {return allItems.data.items})
  .catch((err) => {
    console.log(err);
  });
  }

  useEffect(() => {
    getAllItems()
    .then((items) => {
      setItems(items)
      setIsLoading(false)
    })
  }, []);

  if(isLoading){
    return <Loading/>
  }
  else{
    return (
      <>
      <div id='pageWrapper'>
        <main id='AllListingsWrapper'>
          <h2>All Listings</h2>
          <ul id='listings'>
            {items.map((item) => { return (
              <li key={item.item_id}><ItemCard item={item}/></li>
            )
            })
            }
          </ul>
        </main>
      </div>
      </>
    )
  }
};

export default AllListings;