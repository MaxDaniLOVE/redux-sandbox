const inc = () => ({type: 'INC'})  //! returns object

const dec = () => ({type: 'DEC'})  //! returns object

const rnd = (payload) => ({  //! returns object  
  type: 'RND',
  payload
})

export {inc, dec, rnd}