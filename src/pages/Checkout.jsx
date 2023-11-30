import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useState } from "react";



const Checkout = () => {

    const stripe = useStripe();
    const elements = useElements();

    const [error, setError] = useState("");
    

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            console.log("payment error", error);
            setError(error.message)
        } else {
            console.log("payment method", paymentMethod);
            setError("");
        }
    }


    return (
        <form onSubmit={handleSubmit}>
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
            <button className="bg-red-600 text-white px-2 py-1 my-6" type="submit">
                Pay $
            </button>
            <p className="text-red-600">{error}</p>
        </form>
    );
};

export default Checkout;