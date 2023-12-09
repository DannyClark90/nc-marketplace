import CategoriesSlider from '../components/CategoriesSlider';
import '../css/Home.css'
import { Link } from 'react-router-dom';

function Home() {
    return(
    <>
    <div id="homeWrapper">
        
        <article id='welcomeWrapper'>
            <div id='welcomeCard'>
                <div id='welcome'>
                    <h2 id='homeH2'>Hi!</h2>
                    <p id='welcomePara'>Welcome to NC Marketplace, the home of buying & selling preloved Items!</p>
                </div>
            </div>
        </article>
        <div className='buttonWrapper'>
            <Link to="/all-listings">
                <button className="button-82-pushable" role="button">
                    <span className="button-82-shadow"></span>
                    <span className="button-82-edge"></span>
                    <span className="button-82-front text">
                    View All Listings
                    </span>
                </button>
            </Link>
        </div>
        
        <section id='categoriesSliderWrapper'>
            <div id='categoriesSlider'>
            <CategoriesSlider/>
            </div>
        </section>

        <div className='buttonWrapper'>
            <Link to="/post-ad">
            <button className="button-82-pushable" role="button">
                <span className="button-82-shadow"></span>
                <span className="button-82-edge"></span>
                <span className="button-82-front text">
                Post Ad
                </span>
            </button>
            </Link>
        </div>
    </div>
    </>
    )
};

export default Home