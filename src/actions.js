export const inc = () => ({type: 'INC'})  //! returns object

export const dec = () => ({type: 'DEC'})  //! returns object

export const rnd = (payload) => ({  //! returns object  
  type: 'RND',
  payload
})