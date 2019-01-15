import React from 'react';
import { Redirect } from 'react-router-dom';
import StudentDash from './Dashboard';
import TeacherDash from './dashboard_teacher'

class HandleDashboard extends React.Component {
    render () {
        if (sessionStorage.getItem('type') === 'Student') {
            return (
                <StudentDash />
            )
        } else if(sessionStorage.getItem('type') === 'Teacher') {
            return (
                <TeacherDash />
            );
        }else{
            return (
                <Redirect to='/signin' />
            );
        }
    }
}

export default HandleDashboard;
