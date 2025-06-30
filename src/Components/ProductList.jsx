// import React, { useEffect } from "react";
// import { useData } from "../Context/DataContext"; 

// const ProductList = () => {
//   const { data, fetchAllProducts } = useData();

//   useEffect(() => {
//     fetchAllProducts();
//   }, []);

//   return (
//     <div>
//       {data.length > 0 ? (
//         data.map((product) => <p key={product.id}>{product.title}</p>)
//       ) : (
//         <p>Loading...</p>
//       )}
//     </div>
//   );
// };

// export default ProductList;
