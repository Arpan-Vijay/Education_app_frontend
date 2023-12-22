import React, { useEffect, useState } from "react";
import axios from "axios";

const PublishCourse = () => {
  const [userCourses, setUserCourses] = useState([]);

  useEffect(() => {
    try {
      // Retrieve the JWT token from localStorage
      const userId = localStorage.getItem("auth");

      if (userId) {
        axios
          .post("http://localhost:3001/api/fetch-user-data", {
            user_id: userId,
          })
          .then((res) => {
            setUserCourses(res.data.userData || []);
          })
          .catch((error) => {
            console.error("Error fetching user courses:", error);
          });
      }
    } catch (error) {
      console.error("Error parsing JWT token:", error);
    }
  }, []); // Empty dependency array to trigger the effect once on mount

  // JSX rendering of the component
  return (
    <div className="publish__course-container section__padding">
      <div className="content__card-full-length">
        <h3 className="content__card-heading">Published Course</h3>

        <div className="cards">
          <table className="content__card-table">
            <tbody>
              <tr>
                <th className="content__table-col-heading">Subject</th>
                <th className="content__table-col-heading">Course Name</th>
                <th className="content__table-col-heading">Total Chapters</th>
                {/* Add other headers for additional data if needed */}
              </tr>
              {userCourses.map((course, index) => (
                <tr key={index}>
                  <td className="content__table-data">{course.subject_name}</td>
                  <td className="content__table-data">{course.course_name}</td>
                  <td className="content__table-data">
                    {course.total_chapters}
                  </td>
                  {/* Add other cells for additional data if needed */}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PublishCourse;

// import React from 'react'

// const PublishCourse = () => {
//     const courses = [
//         {
//             subject: 'Biology',
//             course_name: 'Introduction to Biology',
//             totalChapters: 12,
//             studentsEnrolled: 150,
//             completionRate: '85%',
//         },

// enrollment_id
// course_id
// student_id

//         {
//             subject: 'Mathematics',
//             course_name: 'Algebra I',
//             totalChapters: 10,
//             studentsEnrolled: 120,
//             completionRate: '90%',
//         },
//         {
//             subject: 'Computer Science',
//             course_name: 'Computer Science 101',
//             totalChapters: 15,
//             studentsEnrolled: 200,
//             completionRate: '78%',
//         },
//         {
//             subject: 'Literature',
//             course_name: 'English Literature',
//             totalChapters: 8,
//             studentsEnrolled: 100,
//             completionRate: '92%',
//         },
//         {
//             subject: 'History',
//             course_name: 'History of Civilization',
//             totalChapters: 14,
//             studentsEnrolled: 180,
//             completionRate: '80%',
//         },
//         {
//             subject: 'Physics',
//             course_name: 'Physics Fundamentals',
//             totalChapters: 11,
//             studentsEnrolled: 160,
//             completionRate: '88%',
//         },
//         {
//             subject: 'Fine Arts',
//             course_name: 'Art Appreciation',
//             totalChapters: 6,
//             studentsEnrolled: 80,
//             completionRate: '95%',
//         },
//         {
//             subject: 'Chemistry',
//             course_name: 'Chemistry Basics',
//             totalChapters: 9,
//             studentsEnrolled: 130,
//             completionRate: '87%',
//         },
//         {
//             subject: 'Economics',
//             course_name: 'Principles of Economics',
//             totalChapters: 13,
//             studentsEnrolled: 170,
//             completionRate: '82%',
//         },
//         {
//             subject: 'Psychology',
//             course_name: 'Introduction to Psychology',
//             totalChapters: 10,
//             studentsEnrolled: 140,
//             completionRate: '89%',
//         },
//     ];

//     return (
//         <div className='publish__course-container section__padding'>
//             <div className="content__card-full-length">
//                 <h3 className="content__card-heading">Published Course</h3>

//                 <div className="cards">
//                     <table className='content__card-table'>
//                         <tbody>
//                             <tr >
//                                 <th className='content__table-col-heading'>Subject</th>
//                                 <th className='content__table-col-heading'>Course Name</th>
//                                 <th className='content__table-col-heading'>Total Chapters</th>
//                                 <th className='content__table-col-heading'>Students Enrolled</th>
//                                 <th className='content__table-col-heading'>Completion Rate</th>
//                             </tr>
//                             {courses.map((course, index) => (
//                                 <tr key={index}>
//                                     <td className='content__table-data'>{course.subject}</td>
//                                     <td className='content__table-data'>{course.course_name}</td>
//                                     <td className='content__table-data'>{course.totalChapters}</td>
//                                     <td className='content__table-data' >{course.studentsEnrolled}</td>
//                                     <td className='content__table-data'>{course.completionRate}</td>
//                                     {/* Add other cells for additional data if needed */}
//                                 </tr>
//                             ))}
//                         </tbody>
//                     </table>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default PublishCourse
