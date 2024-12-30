import './App.css'
import styles from './css/App.module.css'
import Header from './components/Header'
import Navigation from './components/Navigation'
import MainContent from './components/MainContent'


function App() {


  return (
    <>
      <div className = {styles.box}></div>
      <Header />
      <Navigation />
      <MainContent />
    </>
  )
}

export default App
