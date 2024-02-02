import React from 'react'
import './about.scss';

const About = () => {
  return (
    <div className="container">
      <div className="about">
        <p>
          This is a chatting app where user can register using username, email Id and password and can upload an avtar as well.
          after registering it will automatically redirect to home page of the application where you can search users by there names
          if they are registered users and chat with them in real time.
          if you are already a registered user you can login to the application using your registered email id and password.
        </p>
      </div>
      <div className='owner'>
        <h4>
          contact to owner
        </h4>
      </div>
      <div className='contact'>
        <a href='https://github.com/Shakti7746'>
          <img src='https://w7.pngwing.com/pngs/914/758/png-transparent-github-social-media-computer-icons-logo-android-github-logo-computer-wallpaper-banner-thumbnail.png' alt='github'></img>
        </a>
        <a href='https://www.instagram.com/_shakti.kushwaha_/'>
          <img src='data:image/jpeg;base64,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' alt='Instagram'></img>
        </a>
      </div>
    </div>
  )
}

export default About
