import Link from 'next/link';

// Dynamic Routing
const ProductList = () => {
  return (
    <>
      <Link href={'/'}>Go to home</Link>
      <div>
        <h2>
          <Link href={'/product/1'}>Product 1</Link>
        </h2>
        <h2>
          <Link href={'/product/2'}>Product 2</Link>
        </h2>
        <h2>
          {/* It works like history.replace in Reactjs
            -- When we go to Product 3 page and then press browser back button,
            it push as back to previous route other than /product
          */}
          <Link href={'/product/3'} replace>
            Product 3
          </Link>
        </h2>
      </div>
    </>
  );
};

export default ProductList;
