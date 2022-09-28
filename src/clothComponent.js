import Button from 'react-bootstrap/Button';
import Picture2 from './Images/prudy.jpg'
import children1 from './Images/nancy.jpg'
import Man8 from './Images/finebobo.jpg'
import { Link } from 'react-router-dom'; 

const ClothComponent = () => {
    return ( 
        <div>
                <div class="card-group">
                <div class="card">
                    <img class="card-img-top" src={Man8} alt="Card cap" />
                        <div class="card-body">
                            <h5 class="card-title">Designers #50,000</h5>
                            <p class="card-text">LOvely Designers for Guys </p>
                            {/* <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p> */}
                            <Link to="/maleWears">
                            <Button variant="dark" type="submit">
                            Shop now
                        </Button>
                        </Link>
                        </div>
                </div>
                <div class="card">
                    <img class="card-img-top" src={Picture2} alt="Card  cap" />
                        <div class="card-body">
                            <h5 class="card-title">Female JumpSuits #15,000</h5>
                            <p class="card-text">Beautiful and Sexy Jumpsuits and Beach wears are also available.</p>
                            {/* <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p> */}
                            <Link to="/femaleWears">
                            <Button variant="dark" type="submit">
                            Shop now
                        </Button>
                        </Link>
                        </div>
                </div>
                <div class="card">
                    <img class="card-img-top" src={children1} alt="Card  cap" />
                        <div class="card-body">
                            <h5 class="card-title">Ankara Gowns #5000</h5>
                            <p class="card-text">Beautiful and Ready to Wear Ankara Gowns are always available.</p>
                            {/* <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p> */}
                            <Link to="/childrenWears">
                            <Button variant="dark" type="submit">
                            Shop now
                        </Button>
                        </Link>
                        </div>
                </div>
            </div>
        </div>
     );
}
 
export default ClothComponent;