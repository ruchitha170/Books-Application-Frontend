import "./AddBook.css";
import { Component } from "react";

class AddBook extends Component {
    state = {
        bookName: "",
        authorName: "",
        bookPrice: ""
    };

    submitForm = async (event) => {
        event.preventDefault();

        const { bookName, authorName, bookPrice } = this.state;

        if (!bookName || !authorName || !bookPrice) {
            alert("Please fill all the fields");
            return;
        }

        const bookDetails = {
            bookName,
            authorName,
            bookPrice: Number(bookPrice)
        };

        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(bookDetails)
        };

        try {
            const response = await fetch(
                "http://localhost:4000/addBooks",
                options
            );

            if (!response.ok) {
                throw new Error("Failed to add book");
            }

            const data = await response.json();

            console.log("Book added:", data);

            alert("Book added successfully!");

            // Clear form
            this.setState({
                bookName: "",
                authorName: "",
                bookPrice: ""
            });
        } catch (error) {
            console.log(error);
            alert("Unable to add book");
        }
    };

    updateName = (event) => {
        this.setState({
            bookName: event.target.value
        });
    };

    updateAuthorName = (event) => {
        this.setState({
            authorName: event.target.value
        });
    };

    updateBookPrice = (event) => {
        this.setState({
            bookPrice: event.target.value
        });
    };

    render() {
        const { bookName, authorName, bookPrice } = this.state;

        return (
            <div className="main-container">
                <div className="book-details-container">
                    <div className="book-icon">📚</div>

                    <h2>ADD BOOK</h2>

                    <p className="subtitle">
                        Add a new book to your collection
                    </p>

                    <form onSubmit={this.submitForm}>
                        <div className="input-group">
                            <label htmlFor="bookName">
                                Book Name
                            </label>

                            <input
                                id="bookName"
                                type="text"
                                placeholder="Enter Book Name"
                                value={bookName}
                                onChange={this.updateName}
                            />
                        </div>

                        <div className="input-group">
                            <label htmlFor="authorName">
                                Author Name
                            </label>

                            <input
                                id="authorName"
                                type="text"
                                placeholder="Enter Author Name"
                                value={authorName}
                                onChange={this.updateAuthorName}
                            />
                        </div>

                        <div className="input-group">
                            <label htmlFor="bookPrice">
                                Price
                            </label>

                            <input
                                id="bookPrice"
                                type="number"
                                placeholder="Enter Book Price"
                                value={bookPrice}
                                onChange={this.updateBookPrice}
                            />
                        </div>

                        <button type="submit">
                            <span>ADD BOOK</span>
                        </button>
                    </form>
                </div>
            </div>
        );
    }
}

export default AddBook;