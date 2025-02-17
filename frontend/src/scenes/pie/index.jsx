import { Box } from "@mui/material";
import Header from "../../components/Header";
import PieChart from "../../components/PieChart";

const Pie = ({props}) => {
  return (
    <Box m="20px">
      <Header title="Attendance" subtitle="Pie Chart" />
      <Box height="75vh">
        <PieChart props={props}/>
      </Box>
    </Box>
  );
};

export default Pie;
