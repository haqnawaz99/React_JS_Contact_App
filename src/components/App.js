import React from "react";
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";
import "./App.css";

function App() {
  const contactss = [
    {
      id: "1",
      name: "Ali",
      email: "ali@gmail.com",
    },
    {
      id: "2",
      name: "Saad",
      email: "saad@gmail.com",
    },
  ];
  return (
    <div>
      <Header />
      <AddContact />
      <ContactList contacts={contactss} />
    </div>
  );
}

export default App;
