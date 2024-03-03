
import './GridCard.css';

const GridCard = (props) => {
    return (
        <div className='gridcard'>
            <div className='gridcard-text'>
                <p>{props.info}</p>
            </div>
            <div className='gridcard-holder'>
                <div className='gridcard-image'>
                    <img alt='' src='https://images.unsplash.com/photo-1603366445787-09714680cbf1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=944&q=80'></img>
                </div>
                <div className='gridcard-holder-info'>
                    <p className='gridcard-name'>{props.name}</p>
                    <p className='gridcard-role'>{props.role}</p>
                </div>
            </div>
        </div>
    )
}

export default GridCard;
