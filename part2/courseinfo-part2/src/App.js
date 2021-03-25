import React from 'react';
import Course from './components/Course'

const Header = (props) => {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  );
}

const Content = ({ courses }) => {

  return (
    <div>
      {
        courses.map((course) => {
          return (
            <div>
              <Header course={course.name} />
              {course.parts.map((part) => {
                return (
                  <Part part={part.name} exercises={part.exercises} />
                )
              })}
              <Total parts={courses} />
            </div>
          )
        })
      }
    </div>
  )
}

const Total = ({ courses }) => {
  return (
    <p>

    </p>
  )
}

const Part = (props) => {
  return (
    <p>{props.part} {props.exercises}</p>
  )
}
function App() {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    },
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return (
    <div>
      <Course courses={courses} />
    </div>
  );
}

export default App;
export { Header, Content, Total };
