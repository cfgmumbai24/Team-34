import React from 'react'
import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from '../theme';

export default function About() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
   
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
      >
       <Box
          gridColumn="span 12"
          gridRow="span 7"
          backgroundColor={colors.primary[400]}
        >
          <Box>
            <Typography
              color={colors.grey[100]}
              variant="h3"
              fontWeight="600"
              p="10px"
            >
              About Us
            </Typography>
          </Box>

          <Box p="30px">
            <Box mb="20px">
              <Typography
                color={colors.grey[100]}
                variant="h5"
                fontWeight="600"
                mb="10px"
              >
                Our Mission
              </Typography>
              <Typography color={colors.grey[100]}>
                Eklavya is dedicated to empowering first-generation learners
                with the education and resources they need to excel in
                university-level exams. Our mission is to bridge the gap between
                ambition and achievement by providing comprehensive educational
                support and mentorship. We strive to create an inclusive
                environment where students from diverse backgrounds can thrive
                academically and personally.
              </Typography>
            </Box>
            <Box mb="20px">
              <Typography
                color={colors.grey[100]}
                variant="h5"
                fontWeight="600"
                mb="10px"
              >
                Our Vision
              </Typography>
              <Typography color={colors.grey[100]}>
                Our vision is to become a leading educational platform that
                transforms the lives of first-generation learners across the
                globe. We aim to cultivate a generation of well-rounded
                individuals who are not only academically proficient but also
                socially responsible and capable of making significant
                contributions to society.
              </Typography>
            </Box>
            <Box mb="20px">
              <Typography
                color={colors.grey[100]}
                variant="h5"
                fontWeight="600"
                mb="10px"
              >
                Our Approach
              </Typography>
              <Typography color={colors.grey[100]}>
                At Eklavya, we believe that every student deserves the
                opportunity to succeed. Our programs are designed to equip
                learners with the knowledge and skills required to navigate the
                academic challenges they face. Through personalized mentorship
                and a robust curriculum, we ensure that our students are
                well-prepared to reach their educational goals. We adopt a
                holistic approach to education, focusing not only on academic
                excellence but also on developing critical thinking,
                problem-solving abilities, and emotional intelligence.
              </Typography>
            </Box>
            <Box mb="20px">
              <Typography
                color={colors.grey[100]}
                variant="h5"
                fontWeight="600"
                mb="10px"
              >
                Mentorship
              </Typography>
              <Typography color={colors.grey[100]}>
                We connect our learners with experienced mentors who guide them
                throughout their educational journey. Our mentors provide
                invaluable insights, advice, and support, helping students to
                overcome obstacles and achieve their full potential. Our
                mentorship program is tailored to meet the unique needs of each
                student, ensuring personalized guidance and encouragement at
                every step.
              </Typography>
            </Box>

            <Box mb="20px">
              <Typography
                color={colors.grey[100]}
                variant="h5"
                fontWeight="600"
                mb="10px"
              >
                Community Engagement
              </Typography>
              <Typography color={colors.grey[100]}>
                Eklavya actively engages with local communities to identify and
                support first-generation learners. We organize workshops,
                seminars, and outreach programs to raise awareness about
                educational opportunities and provide essential resources to
                students and their families. Our community engagement
                initiatives aim to create a supportive network that encourages
                lifelong learning and personal growth.
              </Typography>
            </Box>
            <Box mb="20px">
              <Typography
                color={colors.grey[100]}
                variant="h5"
                fontWeight="600"
                mb="10px"
              >
                Success Stories
              </Typography>
              <Typography color={colors.grey[100]}>
                We take pride in the success of our students, many of whom have
                gone on to achieve remarkable feats in their academic and
                professional careers. Their stories of determination,
                resilience, and accomplishment serve as a testament to the
                effectiveness of our programs and the transformative power of
                education. These success stories inspire us to continue our work
                and expand our reach to more students in need.
              </Typography>
              <Typography
                color={colors.grey[100]}
                variant="h5"
                fontWeight="600"
                mb="10px"
              >
                Future Plans
              </Typography>
              <Typography color={colors.grey[100]}>
                Looking ahead, Eklavya plans to expand its programs to include
                more subjects and grade levels, develop online learning
                platforms, and establish partnerships with educational
                institutions and organizations worldwide. Our goal is to reach
                more first-generation learners and provide them with the tools
                and support they need to succeed in an increasingly complex and
                competitive world.
              </Typography>
            </Box>
          </Box>
        </Box>
    </Box>
  )
}
