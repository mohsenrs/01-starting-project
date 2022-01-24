import React from 'react'
import { Route } from 'react-router-dom'

function Welcome() {
  return (
    <>
      <div>Welcome page is here</div>
      <Route path='/welcome/new-user'>
        <p>hello new user</p>
      </Route>
    </>
  )
}

export default Welcome
