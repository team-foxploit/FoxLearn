import React from "react";
import style from './Wall.module.css';
import Card from '../UI/Card/Card';
import CardReveal from '../UI/Card/CardReveal';

// import { Link } from "react-router-dom";
// TODO : Insert Link rather than a components

const Wall = (props) => {
  // console.log(match);
  return (
    <div className="row">
        <div className="col s12 m4">
            <Card
                style={style}
                icon="multiline_chart"
                title="View your history"
                description="View your attempted quizzes and thier results.
                The results are displayed in more user friendly way and hence, it's easy
                to track your progress through out the Foxlearn quizz system."
                button="My Progress"
                link="/myhistory"
                color="green"
            />
        </div>
      <div className="col s12 m4">
          <CardReveal
              style={style}
              icon="whatshot"
              title="Time for a quizz!"
              description="Test your knowledge by attending for a quizz with a subject
              of your choice. A random quizz will be generated for each time, just for you.
              Test and learn from it, embrace the result and develop your skills."
              button="take a quiz"
              color="amber"
          />
      </div>
      <div className="col s12 m4">
          <Card
              style={style}
              icon="school"
              title="What's new?"
              description="I am a very simple card. I am good at containing small bits of
              information. I am convenient because I require little markup to
              use effectively."
              button="Explore Subjects"
              link="/subjects"
              color="pink"
              />
      </div>
    </div>
  );
};

export default Wall;
