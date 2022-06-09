import '../App.css';
import React, {useEffect, useState} from 'react';

export const Selection = () => {
    const [courseprefix, setCourseprefix] = useState('AN');
    const [courses, setCourses] = useState([]);
    console.log("Selected Course Prefix is: " + courseprefix);

    // useEffect(
    //     () => {
    const fetchCourses = async(courseprefix) => {
        const response = await fetch("http://oldcourses-env-1.eba-nm6qxtew.us-east-2.elasticbeanstalk.com/courses/" + courseprefix);
        const data = await response.json();
        console.log(data);
        setCourses(data);
    };
    
    return (
        <div className="selection">
            <label for="course">Course Prefix: </label>
            <select className="course" onChange={evt => setCourseprefix(evt.target.value)}>
                <option value="AN">AN: Anthropology</option>
                <option value="ART">ART: ART</option>
                <option value="CS">CS: Computer Science</option>
                <option value="EC">EC: Economics</option>
            </select>
            <button type="submit" className="submit" onClick={() => fetchCourses(courseprefix)}>Submit</button>

            <div className="coursedisplay">
                {courses.map (course => (
                    <table className="coursetable">
                        <tr>
                            <td className="firstfield">{course.coursecode} {course.coursenumber}</td> 
                            <td className="secondfield">{course.coursetitle}</td>
                        </tr>
                    </table>
                ))}
            </div>
        </div>
    );
    //}

}
