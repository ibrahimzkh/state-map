import React  from 'react'
import Header from './Header'
import Products from './Products'
import Footer from './Footer'

function App () {
  return(
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-12 col-md-8">
          <Header />
          <Products />
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default App
