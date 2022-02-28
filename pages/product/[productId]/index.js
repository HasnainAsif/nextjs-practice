import { useRouter } from 'next/router';
import React from 'react';

// Dynamic Routing
const ProductItem = () => {
  const router = useRouter();
  const { productId } = router.query;

  return <h2>This is product No. {productId}</h2>;
};

export default ProductItem;
