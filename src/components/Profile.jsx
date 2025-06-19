import './Profile.css'
import avaImg from './../assets/2.png'

const Profile = () => {
    return (
        <div className='container'>
            <div className='profile__info'>
                <img src={avaImg} alt="ava" className='ava__img'/>
                <div className='profile__info_text'>
                    <p className='name__profile'>Vlad Khokhlachev</p>
                    <p className='date__profile'>Date of Birth: 14 october</p>
                    <p>City: Engels</p>
                    <p>Education: ETI SGTU</p>
                    <p>Web-Site: @lerkrrt</p>
                </div>
            </div>
            <h2 className='title__posts'>My posts</h2>
            <input type="text" className='input__profile' placeholder='Your news...'/>
            <div className='wrapper_btn'>
                <button className='btn__post'>SEND</button>
            </div>
            <div className='profile__post'>
                <img src={avaImg} alt="ava" className='avatar__img'/>
                <p className='message__profile'>Hey, why nobody love me?</p>
            </div>
            <div className='profile__post'>
                <img src={avaImg} alt="ava" className='avatar__img'/>
                <p className='message__profile'>Sad and angry...</p>
            </div>
            <div className='profile__post'>
                <img src={avaImg} alt="ava" className='avatar__img'/>
                <p className='message__profile'>Sad and angry...</p>
            </div>
        </div>
    )
}

export default Profile