import React, { useState, useEffect } from "react";
import axios from "axios";
import YoutubeEmbed from "./YoutubeEmbed"; // Adjust the path as necessary
import "./Courses.css";
const Courses = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get("http://192.168.43.21:3000/courses"); // Adjust the API route as necessary
        console.log("Courses response:", response.data)
        setCourses(response.data);
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    };

    fetchCourses();
  }, []);

  return (
    <div className="courses-container">
      {courses.map((course) => (
        <div className="course-item" key={course.course_id}>
          <YoutubeEmbed embedId={course.video1} desc={course.disc1} />
        </div>
      ))}
    </div>
  );
};

export default Courses;
