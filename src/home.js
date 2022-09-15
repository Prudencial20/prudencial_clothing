import 'bootstrap/dist/css/bootstrap.min.css'
import CarouselComponent from './carouselComponent';
import Content from './content';
import FooterComponent from './footerComponent';
import loader from './logo.svg'
import WearsDetailsComponent from './wearsCopmonent';
import AlertComponent from './AlertComponent';
import useFetch from './useFetch';
import cnn from './Images/cnn.png'
import business from './Images/businessday.png'
import british from './Images/british.png'
import pulse from './Images/pulse.png'

const Home = () => {
    const {data:posts, isPending, error} = useFetch('http://localhost:4000/posts')
    return (  
        <div>
            <CarouselComponent />
            <Content />
            {error && <AlertComponent props={error} />}
                {isPending && <div><img src={loader} width="200" alt="preloader" /></div>}
                {posts && <WearsDetailsComponent posts={posts} /> }

                <div>
            <h3>
                 We are Feautured On 
            </h3>
        
        </div>
        <div className='about-images'>
        <img
                        
                        src={cnn}
                        alt="First slide" width="100px"
                    /> 
        <img
                        
                        src={business}
                        alt="First slide" width="150px"
                    /> 
        <img
                        
                        src={british}
                        alt="First slide" width="100px"
                    /> 
        <img
                        
                        src={pulse}
                        alt="First slide" width="100px"
                    /> 
        </div> 
            <FooterComponent />
        </div>
    );
}
 
export default Home;