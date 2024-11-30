import { Link } from 'react-router-dom'
import './CSS/NotFound.css'

const NotFound = () => {
  return (
    <div className='not-found'>
        <h1>PAGE NOT FOUND</h1>
        <p>Oops! This page is not part of our website!</p>
        <Link to='/'>Back to homepage</Link>
    </div>
  )
}

export default NotFound