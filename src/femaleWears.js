import Button from 'react-bootstrap/Button';
import Man5 from './Images/Picture6.jpg'
import Man9 from './Images/Picture3.jpg'
import Man8 from './Images/Prudence.jpeg'
import FooterComponent from './footerComponent';

const FemaleWears = () => {
    return (  
        <div>
                <div class="card-group">
                <div class="card">
                    <img class="card-img-top" src={Man5} alt="Card cap" />
                        <div class="card-body">
                            <h5 class="card-title">Female Jackets #30,000</h5>
                            <p class="card-text">LOvely and Affordable Male Clothings for little Amount, We Supply the Best You shop Them..</p>
                            {/* <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p> */}
                            <Button variant="dark" type="submit">
                            Click to Buy
                        </Button>
                        </div>
                </div>
                <div class="card">
                    <img class="card-img-top" src={Man9} alt="Card  cap" />
                        <div class="card-body">
                            <h5 class="card-title">Lovely Coporate gowns #25,000</h5>
                            <p class="card-text">Beautiful and Sexy Female Tops for little Amount, We Supply the Best You shop Them.</p>
                            {/* <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p> */}
                            <Button variant="dark" type="submit">
                           Click to Buy
                        </Button>
                        </div>
                </div>
                <div class="card">
                    <img class="card-img-top" src={Man8} alt="Card  cap" />
                        <div class="card-body">
                            <h5 class="card-title">Female Jeans #5000</h5>
                            <p class="card-text">Beautiful and Nice Children Wears for little Amount, We Supply the Best You shop Them.</p>
                            {/* <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p> */}
                            <Button variant="dark" type="submit">
                            Click to Buy
                        </Button>

                        
                        </div>
                </div>
            </div>
            <FooterComponent />
        </div>
    );
}
 
export default FemaleWears;


