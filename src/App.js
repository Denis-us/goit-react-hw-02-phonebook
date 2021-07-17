import React, { Component } from "react";
import Form from "./components/Form/Form";
import Section from "./components/Section/Section";

class App extends Component {
  state = {
    contacts: [],
    filter: "",
  };

  render() {
    const { contacts, filter } = this.state;

    return (
      <>
        <Section title={"Phonebook"}>
          <Form />
        </Section>

        <Section title={"Contacts"}>
          <Form />
        </Section>
      </>
    );
  }
}

export default App;
