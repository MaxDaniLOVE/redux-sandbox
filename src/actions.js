export const inc = () => ({type: 'INC'})  //! returns object

export const dec = () => ({type: 'DEC'})  //! returns object

export const rnd = () => ({  //! returns object  
  type: 'RND',
  payload: Math.ceil(Math.random() * 10)
})