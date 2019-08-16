import React, {useState} from "react";
import { DatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from "@date-io/date-fns";



export function DateMod() {
    const [selectedDate, handleDateChange] = useState(new Date());


    return (
      <div className="HeaderBar">
        <MuiPickersUtilsProvider utils={DateFnsUtils} >
          <DatePicker value={selectedDate} onChange={handleDateChange} />
        </MuiPickersUtilsProvider>
      </div>
    )
  };

