import ContactItem from "./ContactItem";
import styles from "./contactlist.module.css"

function ContactList({ contacts, deleteHandler }) {
    return (
        <div className={styles.container}>
            <h3>Contacts List</h3>
            {
                contacts.length ? (
                    <ul>
                    {
                        contacts.map ((contact) => (
                            <ContactItem 
                                key={contact.id} 
                                data={contact} 
                                deleteHandler={deleteHandler} 
                            />
                        ))
                    }
                    </ul>
                ) 
                : <p>No Contacts Yet!</p>
            }
        </div>
    );
}

export default ContactList;