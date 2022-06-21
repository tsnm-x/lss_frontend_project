import React from 'react'
import ErrorMessage from '../ErrorMessage/ErrorMessage'
import ErrorDetails from '../ErrorDetails/ErrorDetails'

const ErrorComponent = (props) => {
  return (
      <section className={`bg-card-&-content-box ${props.className}`}>
          <div className="container px-1">
              <ErrorMessage />
              <ErrorDetails />
          </div>
      </section>
  );
}

export default ErrorComponent