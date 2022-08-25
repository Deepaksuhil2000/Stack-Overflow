import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
// import Questions from '../../pages/Questions/Questions'
import './HomeMainbar.css'
import QuestionList from './QuestionList'
import { useSelector } from 'react-redux'

const HomeMainbar = () => {

  const location = useLocation()
  const user = 1;
  const navigate = useNavigate()

  const questionList = useSelector(state => state.questionsReducer)
  // console.log(questionList)

  // var questionList = [{
  //   _id: 1,
  //   upVotes: 3,
  //   downVotes: 2,
  //   noOfAnswer: 2,
  //   questionTitle: "What is a function?",
  //   questionBody: "It mean to be",
  //   questionTags: ["java", "node js", "react js", "mongodb"],
  //   userPosted: "mano",
  //   userId: 1,
  //   askedOn: "jan 1",
  //   answer:[{
  //     answerBody: "Answer",
  //     userAnswered: 'kumar',
  //     answeredOn: 'jan 2',
  //     userId: 2,
  //   }]
  // },{
  //   _id: 1,
  //   upVotes: 3,
  //   downVotes: 2,
  //   noOfAnswer: 2,
  //   questionTitle: "What is a function?",
  //   questionBody: "It mean to be",
  //   questionTags: ["java", "node js", "react js", "mongodb"],
  //   userPosted: "mano",
  //   userId: 1,
  //   askedOn: "jan 1",
  //   answer:[{
  //     answerBody: "Answer",
  //     userAnswered: 'kumar',
  //     answeredOn: 'jan 2',
  //     userId: 2,
  //   }]
  // },{
  //   _id: 1,
  //   upVotes: 3,
  //   downVotes: 2,
  //   noOfAnswer: 2,
  //   questionTitle: "What is a function?",
  //   questionBody: "It mean to be",
  //   questionTags: ["java", "node js", "react js", "mongodb"],
  //   userPosted: "mano",
  //   userId: 1,
  //   askedOn: "jan 1",
  //   answer:[{
  //     answerBody: "Answer",
  //     userAnswered: 'kumar',
  //     answeredOn: 'jan 2',
  //     userId: 2,
  //   }]
  // }]

  // const location = useLocation()
  // const user = 1
  // const navigate = useNavigate()

  const redirect = () => {
    alert("Login or signup to ask a question")
    navigate('/Auth')
  }

  const checkAuth = () => {
    if(user === null){
      alert("login or signup to ask question")
      navigate('/Auth')
    }else{
      navigate('/AskQuestion')
    }
  }

  return (
    <div className='main-bar'>
      <div className='main-bar-header'>
        {
          location.pathname === '/' ? <h1>Top Questions</h1> : <h1>All Questions</h1>
        }
        <button to='/AskQuestion' onClick={checkAuth} className='ask-btn'>Ask Question</button>
      </div>
      <div>
        {
          questionList.data === null ?
          <h1>Loading...</h1> : 
          <>
            <p>{ questionList.data.length } questions</p>
            <QuestionList questionList={questionList.data} />
          </>
        } 
      </div>
    </div>
  )
}

export default HomeMainbar
