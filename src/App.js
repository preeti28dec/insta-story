import { useState } from 'react';
import Stories from 'react-insta-stories';

import "./App.css"

const App = () => {
  const [currentId, setCurrentId] = useState(0);
  const data = [
    {
      key: 1,
      name: "preeti thakur",
      active_time: "9 hours ago",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5kNnKTHXlkSIDHdzQ89vUh72T6lN1O7qIfA&usqp=CAU"
    },
    {
      key: 2,
      name: "kumkum thakur",
      active_time: "9 hours ago",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5kNnKTHXlkSIDHdzQ89vUh72T6lN1O7qIfA&usqp=CAU"
    },
    {
      key: 3,
      name: "rahul kumar",
      active_time: "9 hours ago",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5kNnKTHXlkSIDHdzQ89vUh72T6lN1O7qIfA&usqp=CAU"
    }, {
      key: 4,
      name: "megha ",
      active_time: "9 hours ago",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5kNnKTHXlkSIDHdzQ89vUh72T6lN1O7qIfA&usqp=CAU"
    }]
  const stories2 = ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLwriAEAWpDYqcxEPbkfBDFRNucm-faqbFaA&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5kNnKTHXlkSIDHdzQ89vUh72T6lN1O7qIfA&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLwriAEAWpDYqcxEPbkfBDFRNucm-faqbFaA&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5kNnKTHXlkSIDHdzQ89vUh72T6lN1O7qIfA&usqp=CAU"]



  return (

    <>
      <div class="App">
        <div class="row main">
          <div class="story">
            <Stories
              currentIndex={currentId}
              loop
              keyboardNavigation
              defaultInterval={3000}
              stories={stories2}
              onStoryEnd={(s, st) => {
                // console.log('story ended', s, st);
                setCurrentId(currentId => currentId + 1);
              }}
              onAllStoriesEnd={(s, st) => {
                // console.log('all stories ended', s, st);
                setCurrentId(currentId => 0);
              }}
              onStoryStart={(s, st) => {
                // console.log('story started', s, st);
                setCurrentId(currentId => (currentId + 1) - 1);
              }}
            />
            <div className='emoji'>
              <div>&#x2764;&#xfe0f;</div>
              <div>&#128293;</div>
              <div>&#128077;</div>
              <div>&#x1F923;</div>
              <div>&#x1F62F;</div>
              <div>&#x1F624;</div>
              <div>&#x1F621;</div>
            </div>
          </div>

          <div class="story-sidebar" >
            <div className='sidebar-heading'>
              <h4 >Telent Spolight</h4>
              <div className='storybar'>
                <button type='button' className="button btn btn-outline-primary">
                  + Add Spolight
                </button>

                <div className='start-story'>All Spolight
                  {data.map((item) => {
                    return (
                      <div>
                        <img className="sidebar-story" src={item.image} alt="grgr" />
                        <span className='profile_name'>{item.name}</span>
                        <div className='active_time'>{item.active_time}</div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>


  );
}

export default App






