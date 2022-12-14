import React from 'react'
import '../style/Header.css'
import {Link} from 'react-router-dom';

import LocalMallIcon from '@mui/icons-material/LocalMall';
import SearchIcon from '@mui/icons-material/Search';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';

import {useStateValue} from './StateProvider';

function Header({productList}) {
  const [{basket}, dispatch] = useStateValue();

  return (
    <>
    {/* header logo */}
      <div className="header">
      {/* <Navbar> */}
      <Link to="/"style={{ textDecoration:"none" }}>
        <div className="header__logo">
           <LocalMallIcon className='header__logoImage' fontSize='large' />
              <img className="header__logoTitle" src="https://i0.wp.com/zeevector.com/wp-content/uploads/LOGO/Amazon-India-Logo-PNG-White.png?resize=600%2C182&ssl=1" alt="logo" />
        </div>
        </Link>
        {/* </Link> */}
      {/* search bar */}
      <div className="header__search">
        <input type="text"  className="header__searchInput" />
        <SearchIcon className="header__searchIcon"/> 

      </div>

      {/* navigation part */}
      <div className="header__nav">
     
      <div className="nav__item">
            <span className="nav__itemLineOne">Hello Guest</span>
            <Link to="/login" style={{ textDecoration:"none" }}>
            <span className="nav__itemLineTwo">Sign In</span>
            </Link>
          </div>
         


          <div className="nav__item">
          <span className="nav__itemLineOne">Your</span>
          <span className="nav__itemLineTwo">Shop</span>
        </div>

       
          <div className="nav__itemBasket">
          <Link to='/checkout' style={{ textDecoration:"none"  }}>
          <span className="nav__iconBasket"><LocalGroceryStoreIcon /></span>
          <span className="nav__itemLineTwo nav__basketCount">{basket.length}</span>
          </Link>
          </div>
      
      
      </div>
      {/* </Navbar> */}
      </div>
      <div className="header__bottom">
          <ul>
{/* {
    productList.map((item)=>{
      return  <li key = {item.category}>
        <link to= {`category/${item.category}`}/>
        {item.category}
      </li>
    })
} */}


           <li>All</li>
           <li>Mobile</li>
           <li>Category</li>
           <li>Computer</li>
           <li>Cloths</li>
            <li>Shoes</li>
           <li>Electronics</li>
            <li><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJ4T3h5vATnikLb9_bh1Ghc4RNPBGmMw1xyg&usqp=CAU" alt="" /></li>
            <li><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0QNsW5U1o54ZDZqGmGBaKY32c5GGC7HZZb7itDKgBsPCx4OlEZt60tazudC-B-pMDRt8&usqp=CAU" alt="" /></li>
          </ul>
        </div>
      


    </>
  )
}

export default Header
