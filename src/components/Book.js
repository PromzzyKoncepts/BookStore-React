import React from 'react';

const Update = {
  backgroundColor: '#0290FF',
  padding: '15px 20px',
  border: 'none',
  color: '#fff',
  borderRadius: '4px',
  cursor: 'pointer',
};
const Book = (obj) => {
  const { title, author } = obj;
  return (
    <div className="card">
      <div className="card-1">
        <p style={{ fontWeight: 600, opacity: 0.5 }}>Action</p>
        <h2 style={{ marginTop: '-10px', fontWeight: '800' }}>{title}</h2>
        <p style={{ marginTop: '-15px', color: '#4386bf' }}>{author}</p>
        <div className="functions">
          <p>Comments</p>
          <hr />
          <p>Remove</p>
          <hr />
          <p>Edit</p>
        </div>
      </div>
      <div className="card-2">
        <p className="progress-percent">64%</p>
        <p className="progress-complete">Completed</p>
      </div>
      <div className="hr" />
      <div className="card-3">
        <p style={{ opacity: 0.5, fontSize: '13px' }}>CURRENT CHAPTER</p>
        <p className="chapter">CHAPTER 17</p>
        <button style={Update} type="button">UPDATE PROGRESS</button>
      </div>
    </div>
  );
};
export default Book;
