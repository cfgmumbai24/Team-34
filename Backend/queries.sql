INSERT INTO college_opportunity (id, university, college_name, college_type, state_name, district_name) VALUES
(2, 'IIT Delhi', 'Indian Institute of Technology Delhi', 'Engineering', 'Delhi', 'New Delhi');
INSERT INTO college_opportunity (id, university, college_name, college_type, state_name, district_name) VALUES
(1, 'AIIMS', 'All India Institute of Medical Sciences (AIIMS)', 'Medical', 'Delhi', 'New Delhi');
INSERT INTO college_opportunity (id, university, college_name, college_type, state_name, district_name) VALUES
(3, 'IIT Madras', 'Indian Institute of Technology Madras', 'Engineering', 'Tamil Nadu', 'Chennai');
INSERT INTO college_opportunity (id, university, college_name, college_type, state_name, district_name) VALUES
(4, 'AFMC', 'Armed Forces Medical College', 'Medical', 'Maharashtra', 'Pune');
INSERT INTO college_opportunity (id, university, college_name, college_type, state_name, district_name) VALUES
(5, 'NLSIU', 'National Law School of India University', 'Law', 'Karnataka', 'Bengaluru');
INSERT INTO college_opportunity (id, university, college_name, college_type, state_name, district_name) VALUES
(6, 'NALSAR', 'National Academy of Legal Studies and Research University of Law', 'Law', 'Telangana', 'Hyderabad');
INSERT INTO college_opportunity (id, university, college_name, college_type, state_name, district_name) VALUES
(7, 'NLU Delhi', 'National Law University', 'Law', 'Delhi', 'New Delhi');
INSERT INTO college_opportunity (id, university, college_name, college_type, state_name, district_name) VALUES
(8, 'WBNUJS', 'The West Bengal National University of Juridical Sciences', 'Law', 'West Bengal', 'Kolkata');
INSERT INTO college_opportunity (id, university, college_name, college_type, state_name, district_name) VALUES
(9, 'Savitribai Phule Pune University', 'College of Engineering, Pune', 'Engineering', 'Maharashtra', 'Pune');
INSERT INTO college_opportunity (id, university, college_name, college_type, state_name, district_name) VALUES
(10, 'Institute of Chemical Technology', 'Institute of Chemical Technology (ICT)', 'Engineering, Technology', 'Maharashtra', 'Mumbai');


INSERT INTO opportunity (cid, opportunity, type_of_opportunity) VALUES
(2, 'Summer Internship at XYZ Tech', 'Engineering');

INSERT INTO opportunity (cid, opportunity, type_of_opportunity) VALUES
(3, 'Research Assistant Position in AI Lab', 'Engineering');

INSERT INTO opportunity (cid, opportunity, type_of_opportunity) VALUES
(9, 'Machine Learning Workshop', 'Engineering');

INSERT INTO opportunity (cid, opportunity, type_of_opportunity) VALUES
(10, 'Industry Partnership Program with ABC Corp', 'Engineering');

-- Medical Opportunities
INSERT INTO opportunity (cid, opportunity, type_of_opportunity) VALUES
(1, 'Clinical Research Internship', 'Medical');

INSERT INTO opportunity (cid, opportunity, type_of_opportunity) VALUES
(4, 'Medical Equipment Training Program', 'Medical');

-- Law Opportunities
INSERT INTO opportunity (cid, opportunity, type_of_opportunity) VALUES
(5, 'Moot Court Competition', 'Law');

INSERT INTO opportunity (cid, opportunity, type_of_opportunity) VALUES
(6, 'Legal Research Fellowship', 'Law');

INSERT INTO opportunity (cid, opportunity, type_of_opportunity) VALUES
(7, 'Internship at Supreme Court of India', 'Law');

INSERT INTO opportunity (cid, opportunity, type_of_opportunity) VALUES
(8, 'Workshop on Cyber Law', 'Law');


SELECT
    student.id AS student_id,
    student.name AS student_name,
    student.mentor_id,
    student.mentor_name,
    student.mentor_phone,
    student.attendance,
    student.quiz_no AS student_quiz_no,
    student.phase,
    student.course_id AS student_course_id,
    course.course_id,
    course.course_name,
    course.quiz_no AS course_quiz_no,
    users.id AS user_id,
    users.username,
    users.password,
    users.type,
    users.email
FROM
    student
JOIN
    users ON student.id = users.id
JOIN
    course ON student.course_id = course.course_id;

SELECT
    student.id AS student_id,
    student.name AS student_name,
    student.mentor_id,
    student.mentor_name,
    student.mentor_phone,
    student.attendance,
    student.quiz_no AS student_quiz_no,
    student.phase,
    student.course_id AS student_course_id,
    users.id AS user_id,
    users.username,
    users.password,
    users.type,
    users.email
FROM
    student
JOIN
    users ON student.id = users.id