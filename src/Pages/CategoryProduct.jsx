import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Loading from "../assets/Loading4.webm";
import { ChevronLeft } from 'lucide-react';
import ProductListView from '../Components/ProductListView';

const CategoryProduct = () => {
  const [searchData, setSearchData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const params = useParams();
  const category = params.category;
  const navigate = useNavigate();

  const getFilterData = async () => {
    setLoading(true);
    setError('');
    try {
      const res = await axios.get(`https://fakestoreapi.in/api/products/category?type=${category}`);
      const data = res.data.products; // ✅ Corrected from "productS" to "products"
      setSearchData(data);
    } catch (error) {
      console.log(error);
      setError('Something went wrong while fetching products.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getFilterData();
    window.scrollTo(0, 0);
  }, [category]); // ✅ Add category to re-fetch when route changes

  if (loading) {
    return (
      <div className='flex items-center justify-center h-[400px]'>
        <video muted autoPlay loop>
          <source src={Loading} type='video/webm' />
        </video>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-[400px] text-red-500 font-bold">
        {error}
      </div>
    );
  }

  if (searchData.length === 0) {
    return (
      <div className="flex items-center justify-center h-[400px] text-gray-700 font-bold">
        No products found for category: <span className="ml-2 text-blue-500">{category}</span>
      </div>
    );
  }

  return (
    <div className='max-w-6xl mx-auto mt-10 mb-10 px-4'>
      <button
        onClick={() => navigate('/')}
        className='bg-gray-800 mb-5 text-white px-3 py-1 rounded-md cursor-pointer flex gap-1 items-center'
      >
        <ChevronLeft /> Back
      </button>

      {searchData.map((product, index) => (
        <ProductListView key={index} product={product} />
      ))}
    </div>
  );
};

export default CategoryProduct;
