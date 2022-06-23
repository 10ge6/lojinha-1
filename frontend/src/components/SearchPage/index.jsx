import React from 'react';
import { useSearchParams } from 'react-router-dom';

function SearchPage() {
   const [searchParams, setSearchParams] = useSearchParams({ query: '' });
   return <div>Search</div>;
}

export default SearchPage;
