import React from 'react'
import './RightSidebar.css'
import comment from '../../assets/comment.svg'
import pen from '../../assets/pen.svg'
import blacklogo from '../../assets/blacklogo.png'

const Widget = () => {
  return (
    <div className='widget'>
        <h4>The overflow blog</h4>
        <div className='right-sidebar-div-1'>
           <div className='right-sidebar-div-2'>
              <img src={pen} alt='pen' width={18}/>
              <p>Observability is the key to the future of software (and your DevOps career)</p>
           </div>
           <div className='right-sidebar-div-2'>
              <img src={pen} alt='pen' width={18}/>
              <p>Observability is the key to the future of software (and your DevOps career)</p>
           </div>
        </div>

        <h4>Features on Meta</h4>
        <div className='right-sidebar-div-1'>
           <div className='right-sidebar-div-2'>
              <img src={comment} alt='comment' width={18}/>
              <p>Review Queue workFlows - Final realise...</p>
           </div>
           <div className='right-sidebar-div-2'>
              <img src={comment} alt='comment' width={18}/>
              <p>Please welcome value Associates: #958 v2Blast #959-SpencerG</p>
           </div>
           <div className='right-sidebar-div-2'>
              <img src={blacklogo} alt='blacklogo' width={18}/>
              <p>Outdated Answer: acceped answer is now unpinned on Stack Overflow</p>
           </div>
        </div>

        <h4>Hot Meta Posts</h4>
        <div className='right-sidebar-div-1'>
           <div className='right-sidebar-div-2'>
              <p>38</p>
              <p>Why was this spam flag declined, yet the question mark as a spam</p>
           </div>
           <div className='right-sidebar-div-2'>
              <p>20</p>
              <p>What is the best course of action when a user has high enough rep to...</p>
           </div>
           <div className='right-sidebar-div-2'>
              <p>14</p>
              <p>Is a link to the "how to ask" help page a useful comment?</p>
           </div>
        </div>
    </div>
  )
}

export default Widget
