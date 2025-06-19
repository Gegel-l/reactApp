import './Hero.css'
import backgroundImage from './../assets/5.png'

const Hero = () => {
    return (
        <div className='container'>
            <img src={backgroundImage} alt="img" className='back__img'/>
        </div>
    )
}

export default Hero