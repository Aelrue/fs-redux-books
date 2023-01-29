import BookList from "../BookList/BookList";
import BookForm from "../BookForm/BookForm";
import { useDispatch } from "react-redux";
import "./App.css";
import axios from "axios";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    fetchBookList();
  }, []);
  // inside the square brackets is where we would tell useEffect when to fire off, but
  // because there's nothing in there it fires off on page load (on component mount)
  const dispatch = useDispatch();

  const fetchBookList = () => {
    axios.get("/books").then((response) => {
      console.log("response", response.data);
      // redux is synchronous, meaning there can't be pending changes and everything happens at once
      // it can't be waiting for a state change
      // we communicate with redux from the component when we have the info we need, so we need to do
      // our dispatch from here. We can't do it within the .then, once we have a response
      dispatch({ type: "SET_BOOK_LIST", payload: response.data });
      // dispatch info from DB to store
    });
  };

  return (
    <div className="App">
      <header>
        <h1>Books w/ Redux!</h1>
      </header>
      <main>
        <BookForm fetchBookList={fetchBookList} />
        <BookList />
      </main>
    </div>
  );
}

export default App;
