import styles from './App.module.css'

import Contacts from './components/Contacts'
import Header from './components/Header'

function App() {

  return (
    <>
      <div className={styles.body}>
        <Header />
        <Contacts />
      </div>
    </>
  )
}

export default App
