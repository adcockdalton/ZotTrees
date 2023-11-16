import react, {useState} from 'react'

function Habit({propTitle, propFrequency, propDescription, setCurrentHabits }) {
    const [title, setTitle] = useState(title)
    const [frequency, setFrequency] = useState(frequency)
    const [description, setDescription] = useState(description)
    const [editMode, setEditMode] = useState(false) // controls whether the pop-up modal for editing the tasks in the list is being displayed currently or not
  
    return (
      <div>
        <div>
            <input type="checkbox" />
          {/* check box for checking off if the task was completed */}
          
        </div>
        <div> 
          {/* div containing the task name and frequency */}
            <h1>
              {title}
            </h1>
            <div>
              {frequency} 
              {/* formatted in the tag-like display with css */}
            </div>
        </div>
        <div> 
          {/* <button> </button> */}
          {/* right-arrow button for expanding into pop up modal to edit task */}
          {/* button changes the editMode state to True, causing the pop up  */}
          {/* modal to appear where task can be edited.  */}
  
          {/* pop up modal will be in another react component */}
          {/* {editMode == true ? <PopUpModal title={title}, etc../> : <>} */}
          {/* above displays Pop up modal if the edit mode state is true  */}
        </div>
      </div>
    )
    
  }

export default Habit