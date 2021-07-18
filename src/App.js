import React, { Component } from "react";
import Form from "./components/Form/Form";
import Section from "./components/Section/Section";
import ContactList from "./components/ContactList/ContactList";

import { v4 as uuidv4 } from "uuid";

class App extends Component {
  state = {
    contacts: [],
    name: "",
    filter: "",
  };

  formSubmitHandler = (data) => {
    const { contacts } = this.state;
    const { name, number } = data;
    console.log(contacts);
    const newContact = [{ id: uuidv4(), name: name, number: number }];
    this.setState((prevState) => ({
      contacts: [...prevState.contacts, ...newContact],
    }));
    // this.setState( => {contacts: {id:uuidv4(), name: name, number: number}})
  };

  render() {
    return (
      <>
        <Section title={"Phonebook"}>
          <Form onSubmit={this.formSubmitHandler} />
        </Section>

        <Section title={"Contacts"}>
          <ContactList data={this.data} />
        </Section>
      </>
    );
  }
}

export default App;
