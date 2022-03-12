import React, { useContext, useEffect } from 'react'
import Item from '../components/Item'
import Context from '../context/Context'

export default function Home() {
  useEffect(()=>{
    getProducts()
  },[])
  const {getProducts, products} = useContext(Context)
  return (
    <>
    <div className="container">
      <div className="wraper">
        <div className="home">
            {products.map((item, i)=>(
              <Item {...item} key={i}/>
            ))}
        </div>
      </div>
      </div>
    </>
  )
}
