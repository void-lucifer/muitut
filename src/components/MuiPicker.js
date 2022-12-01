import { Box, Stack, TextField } from "@mui/material";
import dayjs from 'dayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import { TimePicker } from '@mui/x-date-pickers/TimePicker'
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker'
import { StaticDateRangePicker } from '@mui/x-date-pickers-pro/StaticDateRangePicker'
import { useState } from "react";

function MuiPicker() {
    const [selectedDate, setSelectedDate] = useState(dayjs('1997-01-01'))
    const [selectedTime, setSelectedTime] = useState(dayjs('1997-01-01'))
    const [selectedDateTime, setSelectedDateTime] = useState(dayjs('1997-01-01'))
    const [selectedDateRange, setSelectedDateRange] = useState([null, null])
    // console.log({selectedTime : selectedTime && selectedTime.toLocaleTimeString()})
    return (
        <>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <Stack spacing={4} sx={{ width: '250px' }}>
                    <DatePicker label='Date Picker'
                        value={selectedDate}
                        onChange={(newValue) => setSelectedDate(newValue)}
                        renderInput={(params) => <TextField {...params} />}
                    />
                    <TimePicker label='Time Picker'
                        value={selectedTime}
                        onChange={(newValue) => setSelectedTime(newValue)}
                        renderInput={(params) => <TextField {...params} />}
                    />
                    <DateTimePicker label='Date Time Picker'
                        value={selectedDateTime}
                        onChange={(newValue) => setSelectedDateTime(newValue)}
                        renderInput={(params) => <TextField {...params} />}
                    />
                </Stack>
            </LocalizationProvider>
            <LocalizationProvider dateAdapter={AdapterDayjs} localeText={{ start: 'Check-in', end:'Check-out'}}>
                <Box width='500px' sx={{ mt: 3 }}>
                    <StaticDateRangePicker
                        startText='Check-in'
                        endText='Check-out'
                        value={selectedDateRange}
                        onChange={(newValue) => setSelectedDateRange(newValue)}
                        renderInput={(startProps, endProps) =>
                            <>
                                <TextField {...startProps} />
                                <Box sx={{ mx: 2 }}>to</Box>
                                <TextField {...endProps} />
                            </>}
                    />
                </Box>
            </LocalizationProvider>
        </>
    )
}

export default MuiPicker