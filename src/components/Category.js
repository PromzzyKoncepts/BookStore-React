import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import checkStatus from '../redux/Categories/categories';

const Update = {
  backgroundColor: '#0290FF',
  padding: '15px 20px',
  border: 'none',
  color: '#fff',
  borderRadius: '4px',
  cursor: 'pointer',
};

const Category = () => {
  const Status = useSelector((state) => state.status);
  const dispatch = useDispatch();
  const display = () => {
    dispatch(checkStatus());
  };
  return (
    <>
      <p>
        {Status}
      </p>
      <button onClick={() => display()} type="button" style={Update}>Check Status</button>
    </>
  );
};
export default Category;
