import React from 'react'
import {Link} from "react-router-dom"

export default function HomePage() {
    return (
        <div className="home-page">
            <img
        src="http://www.staysky.com/wp-content/uploads/shopping_banner.jpg"
        alt="shopping bags in lennys store"
      />
      <Link to="/shoppingpage">
        {" "}
        <button>Shop Now!</button>
      </Link>
        </div>
    )
}
