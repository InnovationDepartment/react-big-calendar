import React from 'react'
import BigCalendar from 'react-big-calendar'
import events from '../events'

let allViews = Object.keys(BigCalendar.Views).map(k => BigCalendar.Views[k])

let Basic = () => (
  <BigCalendar
    events={events}
    views={allViews}
    step={60}
    showMultiDayTimes
    infinityScroll={true}
    defaultDate={new Date(2018, 5, 1)}
  />
)

export default Basic
