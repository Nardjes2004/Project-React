export default function ProductSingle() {
    
    return(
       <>{
       Product.map((item) => (



        <div className="flex items-center justify-center max-w-screen-md gap-10 mx-auto ">
        <div className="flex flex-col w-full gap-2 ">
         <img  className="bg-gray-100 border border-black " src={item.img}/>

         <div className="grid grid-cols-3 gap-1">
         {
            item.images&&
            item.images.map((images) => (
                <img className="bg-gray-100 border border-black" src={item.images}/>
            ))
           }  

         </div>
        </div>
        <div>
            <h1 className="text-2xl font-bold ">{item.title}</h1>
            <div className="flex gap-2 mt-2">
                {
                    //stocked
                    
                }

            </div>
            <p className="mt-4 text-justify -tracking-wide">{item.description}</p>
            <h4 className="mt-4 text-3xl font-semibold">{item.price}<span className="text-base font-normal">DZD</span></h4>
            <button className="w-full mt-5 btn">Add to cart</button>
        </div>

       </div>
      

       ))
       }
       </>
    )
    
}















 


