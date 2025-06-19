import avaImg from './../assets/2.png'
import './Messages.css'
const Messages = () => {
    return (
        <div className='container'>
            <div className='container__messages'>
                <div className='sender__messages'>
                    <img src={avaImg} alt="ava" className='ava__messages'/>
                    <div className='status_network'></div>
                    <div>
                        <p className='name__sender'>Vlad Khokhlachev</p>
                        <p className='time__sender'><span>Today</span>, 1min ago</p>
                    </div>
                </div>
                <p className='message__sender'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam labore dicta aut dolorem libero, quidem voluptatem nihil repellendus ipsa molestiae dolorum saepe neque ex exercitationem asperiores? Saepe dignissimos expedita, quisquam amet maxime exercitationem facilis, temporibus non labore ab veniam ea quos laudantium, voluptates architecto nihil. Voluptatum nulla nisi excepturi facere non sed dignissimos et praesentium quos illo, maxime officiis consequuntur aliquid sapiente qui, molestiae laboriosam minima ratione at. Consequatur accusantium facilis cum fugiat sunt quos illo dolorem optio in, inventore dolor dolorum, eos iste pariatur id rem ipsum nihil doloribus laudantium quae nostrum? Id delectus eum accusamus error quasi cumque.</p>
            </div>
        </div>
        
    )
}

export default Messages