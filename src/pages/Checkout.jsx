import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Checkout() {
  const { id } = useParams(); // Retrieve the product ID from the URL
  const [product, setProduct] = useState(null); // Single product object
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1); // To track quantity of the product

  useEffect(() => {
    // Fetch the product by ID
    axios
      .get(`http://localhost:8000/api/products/get_product/${id}`)
      .then((response) => {
        console.log("Fetched Product:", response.data.response);
        setProduct(response.data.response); // Assuming the backend returns the product in `response.data.response`
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching product:", error);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <p>Loading product details...</p>;
  }

  if (!product) {
    return <p>Product not found.</p>;
  }

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const orderData = {
      firstName: e.target.firstName.value,
      lastName: e.target.lastName.value,
      phone: e.target.phone.value,
      email: e.target.email.value,
      address: e.target.address.value,
      productId: product.id,
      quantity: quantity,
      totalPrice: product.price * quantity
    };

    // You can send this data to the backend or process it locally
    console.log("Order Data:", orderData);
    // For example, send it to your backend:
    // axios.post('your_api_endpoint', orderData)
    //   .then(response => console.log(response.data))
    //   .catch(error => console.error("Error processing order:", error));
  };

  return (
    <div className="flex max-w-screen-lg gap-8 p-4 mx-auto">
      {/* Left Section - Form */}
      <div className="flex flex-col flex-1 space-y-4">
        <h2 className="mb-4 text-3xl font-bold">Checkout</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          />
          <input
            type="text"
            name="address"
            placeholder="Address"
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          />
          
          {/* Quantity input */}
          <div className="flex gap-4">
            <label>Quantity:</label>
            <input
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              min="1"
              className="p-2 border border-gray-300 rounded-md"
            />
          </div>

          <button
            type="submit"
            className="w-full text-white bg-blue-700 rounded-md btn"
          >
            Confirm Order
          </button>
        </form>
      </div>

      {/* Right Section - Cart Summary */}
      <div className="w-1/3 p-4 border border-gray-300 rounded-md">
        <h3 className="mb-4 text-2xl font-semibold">Order Summary</h3>
        <div className="space-y-4">
          <div className="flex flex-col w-full gap-2">
            <img
              className="bg-gray-100 border border-black h-96"
              src={product.img}
              alt={product.title}
            />
            <h1 className="text-2xl font-bold">{product.title}</h1>
            <p className="text-lg">
              {product.price} <span className="text-base font-normal">$</span>
            </p>
          </div>
        </div>
        <div className="mt-6 text-xl font-semibold">
          Total: {product.price * quantity}$
        </div>
      </div>
    </div>
  );
}
