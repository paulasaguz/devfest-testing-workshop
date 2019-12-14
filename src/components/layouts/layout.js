import React from 'react';
import './layout.css'

function Layout(props) {
  return (
    <section className="layout">
      {props.children}
    </section>
  )
}

export default Layout;