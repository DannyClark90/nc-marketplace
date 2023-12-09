import '../css/PurchaseConfirmation.css'
import { Link } from 'react-router-dom';

function PurchaseConfirmation() {
    return (
      <>
      <main id='purchaseConfirmationWrapper'>
        <img id='greenTick' src="src/assets/green-tick.gif" alt="Green tick" />
        <h2>Thanks For Your Order!</h2>
        <div id='homeButtonWrapper'>
            <Link to="/">
                <button className="button-82-pushable" role="button">
                    <span className="button-82-shadow"></span>
                    <span className="button-82-edge"></span>
                    <span className="button-82-front text">
                    Back To Home
                    </span>
                </button>
            </Link>
        </div>
      </main>
      </>
    )
};

export default PurchaseConfirmation