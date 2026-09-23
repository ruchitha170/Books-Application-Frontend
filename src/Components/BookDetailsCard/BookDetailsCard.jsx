import "./BookDetailsCard.css";
import { Component } from "react";
import { IoSearch } from "react-icons/io5";

class BookDetailsCard extends Component {
    
    state = {
        bookBlock: [],
        isLoading: true,
        error: "",
        searchInput:""
    };
    componentDidMount() {
        this.getBookDetails();
    }

    getBookDetails = async () => {
        try {
            const response = await fetch("http://localhost:4000/books");

            if (!response.ok) {
                throw new Error("Failed to fetch books");
            }

            const booksData = await response.json();

            this.setState({
                bookBlock: booksData,
                isLoading: false
            });
        } catch (error) {
            console.log(error);
            this.setState({
                error: "Unable to load books",
                isLoading: false
            });
        }
    };
    
    updateSearchInput = (event) =>{
        this.setState({searchInput:event.target.value})
    }
    
    render() {
        const { bookBlock, isLoading, error, searchInput} = this.state;
        const {addToCart} = this.props
        const filteredBooks = bookBlock.filter((eachItem)=>{return(eachItem.book_name.toLowerCase().includes(searchInput.toLowerCase()))})
        return (
            <div className="maincontainer">
                
                <h1 className="main-heading">Books</h1>

                <div className="search-main-container">
                    <div className="search-container">
                        <input type="search" placeholder="Type a Book Name " className="search-input" onChange={this.updateSearchInput}/>
                        <IoSearch className="search-icon"/>
                    </div>
                </div>

                {isLoading && <p className="message">Loading books...</p>}

                {error && <p className="error-message">{error}</p>}

                {!isLoading && !error && (
                    <div className="books-container">
                        {filteredBooks.length === 0 ? (
                            <p className="message">No books available</p>
                        ) : (
                            filteredBooks.map((eachItem) => (
                                <div
                                    className="dashboardcontainer"
                                    key={eachItem.bookid}
                                >
                                    <h2 className="book-name">
                                        {eachItem.book_name}
                                    </h2>

                                    <p className="author-name">
                                        <span>Author:</span>{" "}
                                        {eachItem.author_name}
                                    </p>

                                    <p className="book-price">
                                        ₹ {eachItem.book_cost}
                                    </p>
                                    <button onClick={()=>addToCart(eachItem)}>Add To Cart</button>
                                </div>
                            ))
                        )}
                    </div>
                )}
            </div>
        );
    }
}

export default BookDetailsCard;