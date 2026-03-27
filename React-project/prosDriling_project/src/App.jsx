import { useState } from 'react'
import { Bookmark } from 'lucide-react';



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='parent'>
        <div className="card">
          <div className="top">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSuRzDbn-FOUmczn6SvN_MaszwmQDnDhqNRw&s" alt="" />
            <button>save <Bookmark /></button>
          </div>
          <div className="center">
              <h3>amazon <span>5 days ago</span></h3>
              <h2>Senior Devloper</h2>
              <div>
                <h4>part time</h4>
                <h4>senior level</h4>
              </div>
          </div>
          <div className="bottom">
            
            <div>
                <h3>120$/hr</h3>
                <p>Mumbai,India</p>
            </div>
            <div>
                <button>Apply Now</button>
            </div>
              
          </div>
        </div>
      </div>
    </>
  )
}

export default App
