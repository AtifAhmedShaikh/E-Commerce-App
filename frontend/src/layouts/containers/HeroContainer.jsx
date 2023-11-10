import React from "react"
import Button from "react-bootstrap/esm/Button"
import { useNavigate } from "react-router-dom"
const HeroContainer = () => {
    const navigate=useNavigate();
    return (
        <React.Fragment>
            <div className="hero-container">
                <div className="ms-3">
                    <h5 className="text-danger">Up To 20% Off sale </h5>
                    <h2 className="text-primary">Parlour Products Just checkouts </h2>
                    <p className="text-white">
                       Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero soluta tenetur facere illum ex nesciunt eveniet minus quas quos voluptatum illo voluptates excepturi accusantium beatae, alias omnis ab quibusdam rem.
                    </p>
                    <Button variant="dark" className="rounded-1" onClick={()=>navigate('/products')}>See Items</Button>
                </div>
            </div>
        </React.Fragment>
    )
}

export default HeroContainer
