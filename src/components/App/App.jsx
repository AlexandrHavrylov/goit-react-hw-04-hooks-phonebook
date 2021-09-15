import { useState, useEffect } from "react";
import { Form } from "components/Form/Form";
import { Contacts } from "components/Contacts/Contacts";
import { v4 as uuidv4 } from "uuid";
import { Filter } from "components/Filter/Filter";
import { MainContainer } from "styles/App.styled";
import { Title } from "../../styles/App.styled";

export function App() {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState("");

  const addContact = (name, number) => {
    const contact = { id: uuidv4(), name, number };

    contacts.find((contact) => contact.name === name)
      ? alert(`${contact.name} is already in contacts`)
      : setContacts([contact, ...contacts]);
  };

  const handlerOnFilterChange = (e) => {
    setFilter(e.currentTarget.value);
  };

  const handlerOnDelteContact = (id) => {
    setContacts(contacts.filter((contact) => contact.id !== id));
  };

  const getFilterContacts = () => {
    const normalizedFilterValue = filter.toLowerCase().trim();

    const filtredContacts = contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilterValue)
    );
    return filtredContacts;
  };

  useEffect(() => {
    const contacts = JSON.parse(localStorage.getItem("contacts"));
    if (contacts) {
      setContacts(contacts);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const filterContacts = getFilterContacts();

  return (
    <MainContainer>
      <Title>Phonebook</Title>
      <Form onSubmit={addContact} />
      <Filter value={filter} onFilterChange={handlerOnFilterChange} />

      <Contacts
        contacts={filterContacts}
        onDeleteContact={handlerOnDelteContact}
      />
    </MainContainer>
  );
}
