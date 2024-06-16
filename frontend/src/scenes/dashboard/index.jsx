import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { mockTransactions } from "../../data/mockData";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import Icon from "@mui/icons-material/Email";
import PhoneIcon from '@mui/icons-material/Phone';
import BookIcon from '@mui/icons-material/Book';
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
import Header from "../../components/Header";
import LineChart from "../../components/LineChart";
import GeographyChart from "../../components/GeographyChart";
import BarChart from "../../components/BarChart";
import StatBox from "../../components/StatBox";
import ProgressCircle from "../../components/ProgressCircle";
import HorizontalLinearStepper from "../progress_track/HorizontalLinearStepper";
import { useEffect, useState } from "react";
import PieChart from "../../components/PieChart";
import {Medical,colleges} from "../../data/mockData";


const Dashboard = ({props}) => {
  const theme = useTheme();
  
  const colors = tokens(theme.palette.mode);
  
  
  return (
    <Box m="20px">
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />

        <Box>
          <Button
            sx={{
              backgroundColor: colors.blueAccent[700],
              color: colors.grey[100],
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
            }}
          >
            <DownloadOutlinedIcon sx={{ mr: "10px" }} />
            Download Reports
          </Button>
        </Box>
      </Box>

      {/* GRID & CHARTS */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
      >
        {/* ROW 1 */}
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          
              <div className="flex">
              <PhoneIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
              <div>Mentor information</div>
              <div>
              <div>{props.mentor_name}</div>  
              <div>{props.mentor_phone}</div>
              </div>
              </div>
              
             

        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
            <div className="flex">
              <BookIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
              <div>Attendance</div>
              <div>
              <div>{props.attendance}%</div>  

              {/* // if attendance is less than 50% then color red */}
              </div>
              </div>
              
          
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <div className="flex">
              <BookIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
              <div>Course</div>
              <div>
              <div>{props.course_name}</div>  

        
              </div>
              </div>
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <div className="flex">
              <BookIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
              <div>Quiz</div>
              <div>
              <div>{props.student_quiz_no}/5</div>  

        
              </div>
              </div>
        </Box>

        {/* ROW 2 */}
        <Box
          gridColumn="span 12"
          gridRow="span 1"
          backgroundColor={colors.primary[400]}
        >
         <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            borderBottom={`4px solid ${colors.primary[500]}`}
            colors={colors.grey[100]}
            p="15px"
            mx="528px"
          >
            <Typography color={colors.grey[100]} variant="h5" fontWeight="600">
              Progress Tracker
            </Typography>
          </Box>
          
          
          <Box height="0px" m="20px 0 0 0">
            <HorizontalLinearStepper props={props.phase}/>
            
          </Box>
        </Box>
        

        {/* ROW 3 */}
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          p="30px"
        >
          <Typography variant="h5" fontWeight="600">
            Attendance for last 3 months
          </Typography>
          <PieChart props={props.attendance}/>
        </Box>
        <Box
          gridColumn="span 8"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
        >
          <Typography
            variant="h5"
            fontWeight="600"
            sx={{ padding: "30px 30px 0 30px" }}
          >
            Results
          </Typography>
          <Box height="250px" mt="-20px">
            <BarChart isDashboard={true} />
          </Box>
        </Box>
        <Box>
            <Typography
              color={colors.grey[100]}
              variant="h3"
              fontWeight="600"
              p="8px"
            >
             OPPORTUNITIES
            </Typography>
          </Box>
        </Box>

       <Box
          gridColumn="span 4"
          gridRow="span 3"
          backgroundColor={colors.primary[400]}
          overflow="auto"
          marginBottom="50px"
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            colors={colors.grey[100]}
            p="15px"
          >
            <Typography
              color={colors.greenAccent[600]}
              variant="h5"
              fontWeight="600"
            >
              Top Medical colleges
            </Typography>
          </Box>
          {Medical.map((med, i) => (
            <Box
              display="flex"
              justifyContent="space-between"
              // gap="25px"
              alignItems="center"
              p="15px"
            >
              <Box width="170px">
                <Typography>{med.name}</Typography>
              </Box>
              <Box color={colors.grey[100]}>{med.entrance_test}</Box>
              <Box
                backgroundColor={colors.greenAccent[500]}
                p="5px 10px"
                borderRadius="4px"
              >
                view
              </Box>
            </Box>
          ))}
        </Box>

        <Box
          gridColumn="span 4"
          gridRow="span 3"
          backgroundColor={colors.primary[400]}
          overflow="auto"
          marginBottom="50px"
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            colors={colors.grey[100]}
            p="15px"
          >
            <Typography
              color={colors.greenAccent[600]}
              variant="h5"
              fontWeight="600"
            >
              Top Medical colleges
            </Typography>
          </Box>
          {Medical.map((med, i) => (
            <Box
              display="flex"
              justifyContent="space-between"
              // gap="25px"
              alignItems="center"
              p="15px"
            >
              <Box width="170px">
                <Typography>{med.name}</Typography>
              </Box>
              <Box color={colors.grey[100]}>{med.entrance_test}</Box>
              <Box
                backgroundColor={colors.greenAccent[500]}
                p="5px 10px"
                borderRadius="4px"
              >
                view
              </Box>
            </Box>
          ))}
        </Box>
        <Box
          gridColumn="span 4"
          gridRow="span 3"
          backgroundColor={colors.primary[400]}
          overflow="auto"
          marginBottom="50px"
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            colors={colors.grey[100]}
            p="15px"
          >
            <Typography
              color={colors.greenAccent[600]}
              variant="h5"
              fontWeight="600"
            >
              Top Law meds
            </Typography>
          </Box>
          {colleges.map((college, i) => (
            <Box
              display="flex"
              justifyContent="space-between"
              // gap="25px"
              alignItems="center"
              p="15px"
            >
              <Box width="170px">
                <Typography>{college.name}</Typography>
              </Box>
              <Box color={colors.grey[100]}>{college.entrance_test}</Box>
              <Box
                backgroundColor={colors.greenAccent[500]}
                p="5px 10px"
                borderRadius="4px"
              >
                view
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
  );
};

export default Dashboard;
