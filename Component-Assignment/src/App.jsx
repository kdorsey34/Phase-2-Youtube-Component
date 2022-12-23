import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function ConditionalComponent(props){
  return (
    <div>
      {props.showComponent1 ? 
        <div>Component 1</div>
      :
        <div>Component 2</div>
      }
    </div>
  )
}

function YoutubeComponent(props){
  return(
    <div className="container">
      <img src={props.thumbnailImg} />
      <div className="content">
        <p>{props.videoTitle}</p>
        <p>{props.uploader}</p>
        <p>{props.videoUploaded}</p>
        <p>{props.videoViews}</p>

      </div>
    </div>
  )
}

function App() {
  let sampleData = [
    {
      thumbnailImg:"https://via.placeholder.com/600x400",
      videoTitle:"HE DID WHAT???!!! (My initial reaction)",
      uploader:"JonJones123",
      videoUploaded:"11/30/2022",
      videoViews:"230",
    },

    {
      thumbnailImg:"https://via.placeholder.com/600x400",
      videoTitle:"Why a cheeseburger?",
      uploader:"Mark",
      videoUploaded:"11/29/2022",
      videoViews:"3654"
    },

    {
      thumbnailImg:"https://via.placeholder.com/600x400", 
      videoTitle:"Luis' big break!",
      uploader:"Luis", 
      videoUploaded:"11/28/2022",
      videoViews:"797",
    }
  ];

  const list = [1, 2, 3, 4];
  const newList = list.map(num => {
    return num +2;
  })

  [3, 4, 5, 6];

  return (
    <div className="app-container">
      {
        sampleData.map((element, index) => {
          return (
          <YoutubeComponent 
          key={index}
          thumbnailImg={element.thumbnailImg}
          videoTitle={element.videoTitle}
          uploader={element.uploader}
          videoUploaded={element.videoUploaded}
          videoViews={element.videoViews}
          />
        
          )  
})
}
    </div>
  )

 return (
    <div classname="app-container">

      <YoutubeComponent
      thumbnailImg="https://via.placeholder.com/600x400"
      videoTitle="HE DID WHAT???!!! (My initial reaction)"
      uploader="JonJones123" 
      videoUploaded="11/30/2022"
      videoViews="230"/>

      <YoutubeComponent
      thumbnailImg="https://via.placeholder.com/600x400"
      videoTitle="Why a cheeseburger?"
      uploader="Mark" 
      videoUploaded="11/29/2022"
      videoViews="3654" />

      <YoutubeComponent
      thumbnailImg="https://via.placeholder.com/600x400" 
      videoTitle="Luis' big break!"
      uploader="Luis" 
      videoUploaded="11/28/2022"
      videoViews="797"/>


    </div>
  )
}

export default App
