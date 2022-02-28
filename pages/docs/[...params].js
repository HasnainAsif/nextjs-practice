// Its a catch-all route, i.e; it catches all url segments and maps into one single file
// Just like in react-router-dom(less than version 6) without exact keyword

/*
    It will match any url that contains docs segment in url
    i.e; url can be /docs/a, /docs/g, /docs/feature1, /docs/feature1/concept1,
    /docs/feature1/concept1/example1 etc.
*/

/* 
  Currently, '/docs' url gives 404 but we can change file name to [[...params]].js and
  '/docs' route will also access this page 
*/

import { useRouter } from 'next/router';

const Doc = () => {
  const router = useRouter();
  const { params = [] } = router.query;
  // console.log(params);

  if (params.length === 2) {
    return (
      <h1>
        Viewing docs for feature {params[0]} and concept {params[1]}
      </h1>
    );
  }
  if (params.length === 1) {
    return <h1>Viewing docs for feature {params[0]}</h1>;
  }

  // if params.length > 2
  return <h1>Docs Home Page</h1>;
};

export default Doc;
