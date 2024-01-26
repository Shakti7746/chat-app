import React from 'react'

const Search = () => {
  return (
    <div className='search'>
      <div className="searchForm">
        <input type="text" placeholder='Search a user' />
      </div>
      <div className="userChat">
        <img src="https://pixels.com/images/overview/apparel/womensTshirts002.jpg" alt="" />
        <div className="userChatInfo">
          <span>Jane</span>
        </div>
      </div>
    </div>
  )
}

export default Search
