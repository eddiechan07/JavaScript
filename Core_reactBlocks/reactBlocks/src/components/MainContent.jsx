import styles from '../css/MainContent.module.css'
import SubContent from './SubContent'
import Advertisement from './Advertisement'

const MainContent = () => {

    return (
        <>
        <div className = {styles.box}></div>
        <SubContent />
        <Advertisement />
        </>

    )
}

export default MainContent