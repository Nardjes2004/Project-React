import { useParams } from "react-router-dom";
import { Product } from "../data/data";

export default function Checkout() {
  const { ids } = useParams(); // Retrieve the comma-separated IDs from the URL
  const selectedIds = ids.split(',').map(Number); // Convert IDs from string to an array of numbers
  
  // Find products with matching IDs
  const selectedProducts = Product.filter((item) => selectedIds.includes(item.id));

  return (
    <div className="flex max-w-screen-lg gap-8 p-4 mx-auto">
      {/* Left Section - Form */}
      <div className="flex flex-col flex-1 space-y-4">
        <h2 className="mb-4 text-3xl font-bold">Checkout</h2>
        <form className="space-y-4">
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
          {Product.map((item) => (
            <div key={item.id} className="flex flex-col w-full gap-2">
              <img
                className="bg-gray-100 border border-black h-96"
                src={item.img}
                alt={item.title}
              />
              <h1 className="text-2xl font-bold">{item.title}</h1>
              <p className="text-lg">{item.price} <span className="text-base font-normal">$</span></p>
            </div>
          ))}
        </div>
        <div className="mt-6 text-xl font-semibold">
          Total: {selectedProducts.reduce((total, item) => total + parseFloat(item.price), 0)}$
        </div>
      </div>
    </div>
  );
}
