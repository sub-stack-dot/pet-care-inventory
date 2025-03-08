import React from 'react';
 import './items.css';
 
 
 const products=[
     {
         id:1,
         title:"Plant based softies",
         price:"Rs.450",
         image:"/f1.jpeg",
         alt:"Veg softies",
     },
 
     {
         id:2,
         title:"Chiken chonks",
         price:"Rs.550",
         image:"/f2.jpeg",
         alt:"Meat Delights",
     },
 
     {
         id:3,
         title:"Chiken & Duck softies",
         price:"Rs.650",
         image:"/f3.jpeg",
         alt:"Mix Delights",
     },
 
     {
         id:4,
         title:"Nibbles",
         price:"Rs.200",
         image:"/f4.jpeg",
         alt:"Nibbles",
     },
 
     {
         id:5,
         title:"Salmon chonks",
         price:"Rs.500",
         image:"/f5.jpeg",
         alt:"Salmon",
     },
 
     {
         id:6,
         title:"Gnashers",
         price:"Rs.600",
         image:"/f6.jpeg",
         alt:"Gnashers",
     },
 ];
 
 const groomingProducts = [
     {
       id: 7,
       title: 'Mist Shampoo',
       price: 'Rs.700',
       image: '/g1.jpg',
       alt: 'Pet Shampoo',
     },
     {
       id: 8,
       title: 'Shampoo',
       price: 'Rs.600',
       image: '/g2.jpg',
       alt: 'Olive oil mix shampoo',
     },
     {
       id: 9,
       title: 'Paw pad cream',
       price: 'Rs.800',
       image: '/g3.jpg',
       alt: 'Paw pad cream',
     },
     {
       
       id: 10,
       title: 'Cloud care brush',
       price: 'Rs.900',
       image: '/g4.jpg',
       alt: 'Cloud care brush',
     },
     {
       id: 11,
       title: 'Dpg combe',
       price: 'Rs.550',
       image: '/g5.jpg',
       alt: 'Combs',
     },
     {
       id: 12,
       title: 'Ear cleaner',
       price: 'Rs.500',
       image: '/g6.jpg',
       alt: 'Ear cleaner',
     },
   ];
   const supplementProducts = [
     {
       id: 13,
       title: 'Skin Health',
       price: 'Rs.450',
       image: '/s1.jpg',
       alt: 'Suppliment',
     },
     {
       id: 14,
       title: 'Multivitamin',
       price: 'Rs.600',
       image: '/s2.jpg',
       alt: 'Multi Vitamin',
     },
     {
       id: 15,
       title: 'Multi Functional',
       price: 'Rs.550',
       image: '/s4.jpg',
       alt: 'Multi Finctional',
     },
     {
       id: 16,
       title: 'Hip and joint',
       price: 'Rs.700',
       image: '/s3.jpg',
       alt: 'Skin & Coat Care',
     },
     {
       id: 17,
       title: 'Gut Health',
       price: 'Rs.800',
       image: '/s5.jpg',
       alt: 'Energy Boost Powder',
     },
     {
       id: 18,
       title: 'Digestive Aid',
       price: 'Rs.650',
       image: '/s8.jpg',
       alt: 'Digestive Aid',
     },
     {
         id: 19,
         title: 'Skin & coat care',
         price: 'Rs.550',
         image: '/s7.jpg',
         alt: 'Skin care',
       },
       
   ];
   
 
 const Items=()=> {
   return (
     <div className="items-page1">
 
     <h2> Foods </h2>
     <div className="gallery">     
    {products.map((product)=>(
         <div>
        <div key={product.id} className="gallery-item">
         <img src={product.image} alt={product.alt}/>
         <h3>{product.title}</h3>
         <p>{product.price}</p> </div></div>
         
    ))}
    </div>
    {/*grooming section*/}
     <h2>Grooming Items</h2>
       <div className="gallery">
         {groomingProducts.map((product) => (
           <div key={product.id} className="gallery-item">
             <img src={product.image} alt={product.alt} />
             <h3>{product.title}</h3>
             <p>{product.price}</p>
           </div>
         ))}
       </div>
 
        {/* Supplements Section */}
        <h2>Supplements</h2>
       
       <div className="gallery" >
         {supplementProducts.map((product) => (
           <div key={product.id} className="gallery-item">
             <img src={product.image} alt={product.alt} />
             <h3>{product.title}</h3>
             <p>{product.price}</p>
             
           </div>
         
         ))}
       </div>
       <div className="items-page2"></div>
     
     </div>
   );
 };
 
 export default Items;