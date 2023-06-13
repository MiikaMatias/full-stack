const Course = ({course}) => {
    return (
      <div>
        <h1>{course.name}</h1>
        {course.parts.map(part => <p key={part.id}>{part.name} {part.exercises}</p>)}
        <p><b>Total of {course.parts.reduce((prev, curr, id)=>prev+curr.exercises,0)} exercises</b></p>
      </div>
  
      )
  }

const Courses = ({courses}) => {
return (  
    <div>
        {courses.map(course => <div key={course.id}> <Course course={course}/></div>)}
    </div>
)
}

export default Courses