const courses = ["Introduction to Ethical Hacking", "Penetration Testing", "Network Security"];
let courseList = document.getElementById('course-list');

courses.forEach(course => {
    let li = document.createElement('li');
    li.innerText = course;
    courseList.appendChild(li);
});
