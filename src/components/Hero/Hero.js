
import './Hero.css';
import Button from '../Button/Button';

const Hero = () => {
    return (
        <section className="hero">
            <div className='container'>
                <main>

                    <header>
                        <h1>Let us find your</h1>
                        <strong>Forever Food.</strong>
                    </header>

                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo tenetur fuga ducimus numquam ea!</p>

                    <div className='hero-main-buttons'>
                        <Button name='Search Now' bgColor='#cc3333' color='white'/>
                        <Button name='Know more' bgColor='white'color='#cc3333'/>
                    </div>

                </main>
            </div>
        </section>
    )
}

export default Hero;