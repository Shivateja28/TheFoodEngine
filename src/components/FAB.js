import React from 'react'
import './fab.css'
import {BsFillChatFill} from 'react-icons/bs'
import {VscFeedback} from 'react-icons/vsc'
import {IoHelpSharp} from 'react-icons/io5'
import {Link, useNavigate} from 'react-router-dom'

function FAB() {

  let navigate = useNavigate()

  return (

	<div className="fab-container">
		<div className="fab fab-icon-holder">
            <IoHelpSharp className="fas fa-video"/>
		</div>

		<ul className="fab-options">
			<li>
				<span className="fab-label h5">Chat with us</span>
				<div className="fab-icon-holder">
					<a href= "http://wa.me/+919704401708" className =  "text-white" target="_blank">
						<BsFillChatFill className="fas fa-video"/>
					</a>
				</div>
			</li>
			<li>
				<span className="fab-label h5">Feedback</span>
				<div className="fab-icon-holder">
					<button className='btn p-0 text-white btnicon' onClick={()=>navigate('/home')}>
						<VscFeedback className="fas fa-video"/>
					</button>
				</div>
			</li>
		</ul>
	</div>
  )
}

export default FAB