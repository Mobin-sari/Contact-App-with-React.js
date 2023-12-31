import { useState } from "react";
import styles from "./contacts.module.css"
import ContactList from "./ContactList";
import inputs from "./constants/inputs.js";
import { v4 } from "uuid";

function Contacts() {
    const [contacts, setContacts] = useState([])
    const [alert, setAlert] = useState("")
    const [contact, setContact] = useState({
        id: "",
        name: "",
        lastName: "",
        email: "",
        phone: "",
    })

    const changHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        setContact((contact) => ({ ...contact, [name]: value }));
    }

    const addHandler = () => {
        if (
            !contact.name ||
            !contact.lastName ||
            !contact.email ||
            !contact.phone 
        ) {
            setAlert("Please enter valid data")
            return;
        }
        setAlert("");
        const newContact = { ...contact, id: v4() };
        setContacts((contacts) => [ ...contacts, newContact])
        setContact({
            name: "",
            lastName: "",
            email: "",
            phone: "",
        })
        console.log(contacts)
    }

    const deleteHandler = (id) => {
        const newContacts = contacts.filter((contact) => contact.id !== id);
        setContacts(newContacts);
    }

    return (
        <div className={styles.container}>
            <div className={styles.form}>
                {
                    inputs.map((input, index) => (
                        <input
                            key={index} 
                            type={input.type}
                            placeholder={input.placeholder}
                            name={input.name}
                            value={contact[input.name]}
                            onChange={changHandler} 
                        />
                    ))
                }
                <button onClick={addHandler}>Add Contact</button>
            </div>
            <div>{alert && <p className={styles.alert}>{alert}</p>}</div>
            <ContactList contacts={contacts} deleteHandler={deleteHandler} />
        </div>
    );
}

export default Contacts;