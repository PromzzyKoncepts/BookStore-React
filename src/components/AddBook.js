import React from 'react'

const inputStyle = {
  padding: '10px',
  width: '28.5rem',
  border: '1px solid #e8e8e8',
  marginRight:'20px',
}

const form = {
  display: 'flex',
  flexDirection: 'row',
  width:'100%'
}
const AddBooks = () => (
  <>
    <form>
      <label>ADD NEW BOOK</label>
      <div style={form}>
        <input
          type='text'
          name='title'
          required
          placeholder='Book title'
          style={inputStyle}
        >
        </input>
        <input
            type='text'
            name='author'
            required
            placeholder='Author'
            style={inputStyle}
          >
        </input>
        <button style={{color:'#fff',border:'none', padding:'0 30px', background:'#0290FF', borderRadius:'5px', fontWeight:'600', cursor: 'pointer'}} type='submit'>Add Book</button>
      </div>
    </form>
  </>
)
export default AddBooks