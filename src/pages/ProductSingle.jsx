import { Link, useParams } from "react-router-dom";
import { Product } from "../data/data";

export default function ProductSingle() {
    const { id}= useParams();
    const product =Product .find((item)=>item.id===parseInt(id))
    
    return(
       <>
       {Product.map(() => (

        <div className="flex items-center justify-center max-w-screen-md gap-10 mx-auto ">
        <div className="flex flex-col w-full gap-2 ">
         <img  className="bg-gray-100 border border-black " src={product.img}/>

         <div className="grid grid-cols-3 gap-1">
         {
            product.images&&
            product.images.map((images) => (
                <img className="bg-gray-100 border border-black" src={images}/>
            ))
           }  

         </div>
        </div>
        <div>
            <h1 className="text-2xl font-bold ">{product.title}</h1>
            <div className="mt-2 ">
                
                {product.stocked  ? "Instock" :"Sold Out"}

            </div>
            <p className="mt-4 text-justify -tracking-wide">{product.description}</p>
            <h4 className="mt-4 text-3xl font-semibold">{product.price}<span className="text-base font-normal">$</span></h4>
            <button className="w-full mt-5 btn"><Link to='/chechout/:ids'>Add to cart</Link></button>
        </div>

       </div>
      

       ))
       }
       </>
    )
    
}















 


