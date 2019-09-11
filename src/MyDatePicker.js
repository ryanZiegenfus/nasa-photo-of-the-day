import React, {useState} from "react";
import { DatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from "@date-io/date-fns";
import styled from "styled-components";

const StyledDiv = styled.div`
  background: lightgrey;
  margin-bottom: 20px;
  padding-bottom: 5px;
`;

export function DateMod() {
    const [selectedDate, handleDateChange] = useState(new Date());


    return (
      <StyledDiv className="HeaderBar">
        <MuiPickersUtilsProvider utils={DateFnsUtils} >
          <DatePicker value={selectedDate} onChange={handleDateChange} />
        </MuiPickersUtilsProvider>
      </StyledDiv>
    )
  };

