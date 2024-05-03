import { useState } from "react";

const cartItems = [];
const subtotal = 4000;
const tax = Math.round(subtotal * 0.18);
const shippingCharges = 200;
const discount = 400;
const total = subtotal + tax + shippingCharges;

const Cart = () => {
  const { couponCode, setCouponCode } = useState<string>("");
  const { isValidCouponCode, setIsValidCouponCode } = useState<boolean>(false);

  return (
    <div className="cart">
      <main></main>
      <aside>
        <p>Subtotal: ₹ {subtotal}</p>
        <p>Shipping Charges: ₹ {shippingCharges}</p>
        <p>Tax: ₹ {tax}</p>
        <p>
          Discount: <em> - ₹{discount}</em>
        </p>
        <p>
          <b>Total: ₹{total} </b>
        </p>
        <input
          type="text"
          placeholder="Coupon Code"
          value={couponCode}
          onChange={(e) => setCouponCode(e.target.value)}
        />


        {
          couponCode && isValidCouponCode ? <span>₹{discount</span>
        }
      </aside>
    </div>
  );
};
export default Cart;
