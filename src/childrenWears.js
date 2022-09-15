import Button from 'react-bootstrap/Button';
import Man5 from './Images/children1.jpg'
import Man9 from './Images/children4.webp'
import Man8 from './Images/children6.jpg'
import FooterComponent from './footerComponent';

const ChildrenWears = () => {
    return ( 
        <div>
            <div class="card-group">
                <div class="card">
                    <img class="card-img-top" src={Man5} alt="Card cap" />
                        <div class="card-body">
                            <h5 class="card-title">Kids Top #5,000</h5>
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
                            <h5 class="card-title">Kids Gowns #5,000</h5>
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
                            <h5 class="card-title">Kids Unisex Top #5000</h5>
                            <p class="card-text">Beautiful and Nice Children Wears for little Amount, We Supply the Best You shop Them.</p>
                            {/* <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p> */}
                            <Button variant="dark" type="submit">
                           Click to  Buy
                        </Button>

                        
                        </div>
                </div>
            </div>
            <FooterComponent />
        </div>
     );
}
 
export default ChildrenWears;