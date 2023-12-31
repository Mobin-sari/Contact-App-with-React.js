import deleteIcon from "./svg/delete.svg";
import emailIcon from "./svg/email.png";
import phoneIcon from "./svg/phone.png";

import styles from "./contactItem.module.css"

function ContactItem( { data: { id, name, lastName, email, phone }, deleteHandler } ) {


    return (
        <li className={styles.lists} key={id}>
            <p>
                {name} {lastName}
            </p>
            <p>
                <img src={emailIcon} alt="" /> {email}
            </p>
            <p>
                <img src={phoneIcon} alt="" /> {phone}
            </p>
            <button onClick={() => deleteHandler(id)}><img src={deleteIcon} alt="" /></button>
        </li>
    );
}

export default ContactItem;