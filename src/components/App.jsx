import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Note from "./Note";
import notes from "../notes";

function App() {
  return (
    <React.StrictMode>
      <Header />
      {notes.map((note) => (
        <Note key={note.id} note={note} />
      ))}
      <Footer />
    </React.StrictMode>
  );
}

export default App;
