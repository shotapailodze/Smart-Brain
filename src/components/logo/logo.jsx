import Tilt from 'react-parallax-tilt'
import './logo.scss'
import brain from '../../images/brain.png'

const Logo = () => {
    return (
        <div>
            <Tilt className='br2 shadow-2 tilt ma4 mt0'>
            <div style={{ height: '150px',}} className='pa4'>
                <img style={{paddingTop: '5px'}} src={brain} alt='brainlogo'></img>
            </div>
    </Tilt>
        </div>
    )
}

export default Logo;