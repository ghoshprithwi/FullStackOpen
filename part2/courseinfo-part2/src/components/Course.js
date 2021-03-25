import React from 'react'
import { Content } from '../App';

function Course({ courses }) {
  return (
    <div>
      <Content courses={courses} />
    </div>
  )
}

export default Course;
