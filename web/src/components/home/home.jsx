import './home.css'
import image from '../../img/yop.jpeg'
import podcastbackground from '../../img/podcast.png'

function Home() {
    return (
        <div className="home-page">
            <div className='header d-flex'>
                <div className='name-module'>
                    <h1> Bárbara <br /> Quecedo </h1>
                </div>
                <div className='podcast-module'>
                    <div className='text-module'>
                        <h2> Dime con quién andas, <br /> y te diré quién eres </h2>
                    </div>
                    <a className='btn btn-podcast btn-secondary' target="_blank"> Play</a>
                    <img src={podcastbackground} alt='micro-emoji' />
                </div>
            </div>
            <div className='second-row d-flex-start'>
                <div className='milestones'>
                    <ul>
                        <li>Chocolate</li>
                    </ul>
                </div>


                <div className='portrait'>
                    <img className='portrait-gif' src='https://media.giphy.com/media/5xaOcLJUZMX9cKtW6ha/giphy.gif' alt='hi' />
                    <img src={image} alt='me' />
                </div>

            </div>
        </div >
    )
}

export default Home;