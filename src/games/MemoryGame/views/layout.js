import React,{Component} from 'react'
import Header from '../components/header'
import Copyright from '../components/copyright'
import './layout.css'

class Layout extends Component{
  render () {
    return (
      <div className='layout'>
        <Header />
        <main>
          {this.props.children}
        </main>
        <footer>
          <Copyright />
        </footer>
      </div>
    )
  }
}

export default Layout
