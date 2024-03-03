
import './Card.css';
import Button from '../Button/Button.js'

const Card = () => {
    return (
        <section className='card'>

            <div className='container'>

                <figure>
                    <img alt='card-img' src="https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"></img>
                </figure>

                <div className='text'>
                    <div>
                        <h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore, debitis.</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, molestiae! Quidem est esse numquam odio deleniti, beatae, magni dolores provident quaerat totam eos, aperiam architecto eius quis quibusdam fugiat dicta.</p>
                        <Button name="Get in Touch" bgColor="#4F46E5" color="white" />
                    </div>
                </div>

            </div>
            
        </section>
    )
}

export default Card;
