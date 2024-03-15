import React from 'react'

function Footer () {
  return (
    <div className="mt-2 text-muted small text-center">
      &copy; Baysarov.web, {(new Date()).getFullYear()}.
    </div>
  )
}

export default Footer
