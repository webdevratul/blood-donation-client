import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Checkout from "./Checkout";


// TODO: add publishable key 
const stripePromise = loadStripe(import.meta.env.VITE_payment_Gateway_pk);

const Funding = () => {
    return (
        <div className="bg-slate-100 w-[100%] py-20">
            <h1 className="text-center text-4xl text-gray-500 font-semibold">Funding 💰</h1>
            <div className="w-[30%] mx-auto py-10">
                <Elements stripe={stripePromise}>
                    <Checkout></Checkout>
                </Elements>
            </div>
        </div>
    );
};

export default Funding;

