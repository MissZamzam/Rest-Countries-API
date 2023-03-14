import React from 'react'
import { Link } from 'react-router-dom'
import './Country.css'

const Country = () => {
  return (

    <>
    <section className="country">
      <Link to="/" className="btn btn-light">
        <i className="fas fa-arrow-left"></i> Back Home
      </Link>
      

          <article>
            <div className="country-inner">
              <div className="flag">
                <img src="https://images.unsplash.com/photo-1678753713297-3cca1ed50c91?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" className='flag' alt />
              </div>

              <div className="country-details">
                <div>
                  <h2>ssssssssv</h2>
                  <h5>
                    Native Name: <span>nativeName</span>
                  </h5>
                  <h5>
                    Population: <span>population.toLocaleString</span>
                  </h5>
                  <h5>
                    Region: <span>llllllllllll</span>
                  </h5>
                  <h5>
                    Sub Region: <span>jooooooooooo</span>
                  </h5>
                  <h5>
                    Capital: <span>iiiiiiiiimk</span>
                  </h5>
                </div>

                <div>
                  <h5>
                    Top Level Domain: <span>sbihkivhbk</span>
                  </h5>
                  <h5>
                    Currencies: <span>dr6yfvhil</span>
                  </h5>
                  <h5>
                    Languages: <span>sernk</span>
                  </h5>
                </div>
              </div>
            </div>

            <div>
              <h3>Border Countries: </h3>
              <div className="borders">
               
                    <ul>
                      <li>cssscc</li>
                      <li>cssscc</li>

                    </ul>
                  
              
              </div>
            </div>
          </article>
      
    </section>
</>

  )
}

export default Country
