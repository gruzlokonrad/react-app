import React from 'react'
import PageTitle from '../PageTitle/PageTitle'
import styles from './About.module.scss'

const About = () => {
  return (
    <>
      <h2>
        <PageTitle>About</PageTitle>
      </h2>
      <div className={styles.card}>
        <ol>
          <li>
            <p>
              Notes help keep things organized and make it easier to find necessary information. They allow us to organize our thoughts and avoid chaos in our minds. Notes also allow us to track our progress and achievements, which can be very motivating.
            </p>
          </li>
          <li>
            <p>
              Notes are essential for learning and work. They help remember important information and also enable better preparation for exams and meetings. Notes also allow for creating plans and schedules, which helps in efficient time management.
            </p>
          </li>
          <li>
            <p>
              Notes help in personal and creative development. They allow us to write down our ideas and inspirations, and also create lists of things to do and goals to achieve. Notes also allow for reflection and introspection, which can lead to a better understanding of ourselves and our needs.
            </p>
          </li>
        </ol>
      </div>
    </>
  )
}

export default About