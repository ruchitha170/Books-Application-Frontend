import './App.css'
import { Component } from 'react'
import BookDetailsCard from './Components/BookDetailsCard/BookDetailsCard'
import AddBook from './Components/AddBook/AddBook'
import NavBar from './Components/NavBar/NavBar'
import Cart from './Components/Cart/Cart'
import {BrowserRouter,Route,Routes} from 'react-router-dom'


class app extends Component{
  state = {cartItems:[]}
  addToCart = (eachItem) =>{
      this.setState(prevState=>({cartItems:[...prevState.cartItems,eachItem]}))
  }
  removeItemFromCart = (eachItemId) => {
    this.setState((prevState) => {
      const filteredItems = prevState.cartItems.filter(
        (eachItem) => eachItem.bookid !== eachItemId
      )

      return {
        cartItems: filteredItems
      }
    })
  }
  render(){
    const {cartItems} = this.state
    console.log(cartItems)
    return(
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path="/" element={<BookDetailsCard addToCart={this.addToCart}/>}/>
          <Route path="/addBook" Component={AddBook} />
          <Route path="/cart" element={<Cart cartItems={cartItems} removeItemFromCart={this.removeItemFromCart}/>}/>
        </Routes>
      </BrowserRouter>
    )
  }
}
export default app