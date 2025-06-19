import styles from './Profile.module.css'
import avaImg from './../assets/2.png'

const Profile = () => {
    return (
        <div className='container'>
            <div className={styles.profile__info}>
                <img src={avaImg} alt="ava" className={styles.ava__img}/>
                <div className={styles.profile__info_text}>
                    <p className={styles.name__profile}>Vlad Khokhlachev</p>
                    <p className={styles.date__profile}>Date of Birth: 14 october</p>
                    <p>City: Engels</p>
                    <p>Education: ETI SGTU</p>
                    <p>Web-Site: @lerkrrt</p>
                </div>
            </div>
            <h2 className={styles.title__posts}>My posts</h2>
            <input type="text" className={styles.input__profile} placeholder='Your news...'/>
            <div className={styles.wrapper_btn}>
                <button className={styles.btn__post}>SEND</button>
            </div>
            <div className={styles.profile__post}>
                <img src={avaImg} alt="ava" className={styles.avatar__img}/>
                <p className={styles.message__profile}>Hey, why nobody love me?</p>
            </div>
            <div className={styles.profile__post}>
                <img src={avaImg} alt="ava" className={styles.avatar__img}/>
                <p className={styles.message__profile}>Sad and angry...</p>
            </div>
            <div className={styles.profile__post}>
                <img src={avaImg} alt="ava" className={styles.avatar__img}/>
                <p className={styles.message__profile}>Sad and angry...</p>
                <button className={styles.item__test}>Pick me, please!</button>
            </div>
        </div>
    )
}

export default Profile