import axios from "axios";
import { useState } from "react";

function BookForm({ fetchBookList }) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(`Adding book`, { title, author });
    const newBook = { title, author };
    // TODO - axios request to server to add book
    axios.post("/books", newBook).then((response) => {
      console.log("successful post", response);
      fetchBookList();
    });
  };

  return (
    <section>
      <h2>Add Book</h2>
      <form onSubmit={handleSubmit} className="add-book-form">
        <input
          required
          placeholder="Title"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />

        <input
          required
          placeholder="Author"
          value={author}
          onChange={(event) => setAuthor(event.target.value)}
        />

        <button type="submit">Add Book</button>
      </form>
    </section>
  );
}

export default BookForm;
