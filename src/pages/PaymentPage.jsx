import { useCart } from "../context/CartContext";
import Button from "../components/Buttom";
import Footer from "../layouts/Footer";
import Navigation from "../layouts/Navigation";

import GOOGLE from "../assets/images/payment/googlePay.png";
import APPLE from "../assets/images/payment/applePay.png";
import PAYPAL from "../assets/images/payment/paypal.png";

export default function PaymentPage() {
  const { cart } = useCart();
  const totalAmount = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <main className="paymentPage">
      <Navigation />
      <div className="container">
        <div className="paymentPage__contents">
          <div className="paymentPage__contents--box">
            <h3>Payment details</h3>
            <div className="paymentPage__contents--box-accounts">
              <div>
                <img src={GOOGLE} alt="google pay" />
                <span>Google Pay</span>
              </div>
              <div>
                <img src={APPLE} alt="apple pay" />
                <span>Apple Pay</span>
              </div>
              <div>
                <img src={PAYPAL} alt="paypal" />
                <span>PayPal</span>
              </div>
            </div>
            <div className="paymentPage__contents--box-cardNo">
              <p>Cart Number *</p>
              <input type="number" placeholder="123456789910" />
            </div>

            <div className="paymentPage__contents--box-cardHolder">
              <p>Cart Holder Name</p>
              <input type="text" placeholder="Type your full name" />
              <div className="paymentPage__contents--box-cardHolder_details">
                <input type="month" placeholder="MM/YY" />
                <input type="number" placeholder="xxx" />
                <select name="cardType" id="cardType">
                  <option value="">-- Select Card Type --</option>
                  <option value="mastercard">MasterCard</option>
                  <option value="visa">Visa</option>
                  <option value="amex">American Express</option>
                </select>
              </div>
            </div>

            <div className="paymentPage__contents--box-confirm">
              <p>Total Amount: ${totalAmount}</p>
            </div>
            <Button type="primary">Pay ${totalAmount}</Button>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
