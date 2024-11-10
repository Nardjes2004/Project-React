import { Link, useParams } from "react-router-dom";
import { Product } from "../data/data";

export default function ProductSingle() {
    const { id } = useParams();
    const product = Product.find((item) => item.id === parseInt(id));

    

    return (
        <div className="flex justify-center max-w-screen-md gap-10 mx-auto">
            <div className="flex flex-col w-full gap-2">
                <img className="bg-gray-100 border border-black h-72" src={product.img} alt={product.title} />

                <div className="grid grid-cols-3 gap-1">
                    {
                     product.images &&
                        product.images.map((image, index) => (
                            <img key={index}  className="w-full h-40 bg-gray-100 border border-black " src={image} alt={`Product Image ${index + 1}`} />
                        ))
                    }
                </div>
            </div>
            <div>
                <h1 className="text-2xl font-bold">{product.title}</h1>
                <div className="flex gap-2 mt-4">
                <h4 className="text-sm bg-gray-200 py-0.5 px-3 rounded-full">
                    {product.stocked ? "In Stock" : "Sold Out"}
                </h4>
                </div>
                
                <p className="mt-4 text-justify -tracking-wide">{product.description}</p>
                <h4 className="mt-4 text-3xl font-semibold">
                    {product.price}<span className="text-base font-normal">$</span>
                </h4>
                <button className="w-full mt-5 btn">
                    <Link to={`/checkout/${product.id}`}>Add to cart</Link>
                </button>
            </div>
        </div>
    );
}
