import React, { Component } from "react";
import Form from "./components/Form/Form";
import Section from "./components/Section/Section";
import ContactList from "./components/ContactList/ContactList";
import Filter from "./components/Filter/Filter";

import { v4 as uuidv4 } from "uuid";

class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  };

  formSubmitHandler = (data) => {
    const { name, number } = data;

    const newContact = [{ id: uuidv4(), name: name, number: number }];

    const addContact = this.state.contacts.some(
      (contact) => contact.name === newContact.name
    );
    console.log("addContact", addContact);

    this.setState((prevState) => ({
      contacts: [...prevState.contacts, ...newContact],
    }));
  };

  changeFilter = (event) => {
    this.setState({ filter: event.currentTarget.value });
  };

  getVisibleContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter((todo) =>
      todo.name.toLowerCase().includes(normalizedFilter)
    );
  };

  deleteContact = (contactsId) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter(
        (contact) => contact.id !== contactsId
      ),
    }));
  };

  render() {
    const { filter } = this.state;

    const visibleContacts = this.getVisibleContacts();

    return (
      <>
        <Section title={"Phonebook"}>
          <Form onSubmit={this.formSubmitHandler} />
        </Section>

        <Section title={"Contacts"}>
          <Filter value={filter} onChange={this.changeFilter} />
          <ContactList
            contacts={visibleContacts}
            onDeleteContact={this.deleteContact}
          />
        </Section>
      </>
    );
  }
}

export default App;

{
  /* <TodoList
          todos={visibleTodos}
          onDeleteTodo={this.deleteTodo}
          onToggleCompleted={this.toggleCompleted} */
}

// getVisibleTodos = () => {
//   const { filter, todos } = this.state;
//   const normalizedFilter = filter.toLowerCase();

//   return todos.filter(todo =>
//     todo.text.toLowerCase().includes(normalizedFilter),
//   );
// };

// addTodo = text => {
//   const todo = {
//     id: shortid.generate(),
//     text,
//     completed: false,
//   };

//   this.setState(({ todos }) => ({
//     todos: [todo, ...todos],
//   }));
// };

// deleteTodo = todoId => {
//   this.setState(prevState => ({
//     todos: prevState.todos.filter(todo => todo.id !== todoId),
//   }));
// };

// toggleCompleted = todoId => {

//   this.setState(({ todos }) => ({
//     todos: todos.map(todo =>
//       todo.id === todoId ? { ...todo, completed: !todo.completed } : todo,
//     ),
//   }));
// };
