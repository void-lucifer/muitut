import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot,TimelineOppositeContent } from '@mui/lab'

function MuiTimeline() {
    return(
        <Timeline position='left' /*alternate*/>
            <TimelineItem>
                <TimelineOppositeContent color='text.secondary'>09:30 AM</TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot color='secondary' variant='outlined' />
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                    City A
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
            <TimelineOppositeContent color='text.secondary'>10:30 AM</TimelineOppositeContent>

                <TimelineSeparator>
                    <TimelineDot color='secondary' variant='outlined' />
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                    City B
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
            <TimelineOppositeContent color='text.secondary'>12:00 PM</TimelineOppositeContent>

                <TimelineSeparator>
                    <TimelineDot color='secondary' variant='outlined' />
                    {/* Last item doen't require connector */}
                </TimelineSeparator>
                <TimelineContent>
                    City C
                </TimelineContent>
            </TimelineItem>
        </Timeline>
    )
}

export default MuiTimeline