import React from 'react'

function Searchbar({value,isLoading,onChange, handlesubmit}) {
  return (
   <>
    <form onSubmit={handlesubmit}>
      <input 
      value={value} 
      disabled={isLoading}
      onChange={onChange}
      placeholder='Search Recipe'
      className='form-control'
      />
      <input disabled={isLoading} type="submit" className='btn' value="search " />
      
    </form>
    
    
   </>
  )
}

export default Searchbar