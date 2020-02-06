/** @jsx jsx */
import React from "react"
import { jsx, css } from "@emotion/core"

const Scheduling = () => {
  return (
    <>
      <iframe
        src="https://app.acuityscheduling.com/schedule.php?owner=18872914"
        width="100%"
        height="1300px"
        frameBorder="0"
        title="Everything Is Pawsible scheduling calendar"
        style={{ overflow: "hidden" }}
      ></iframe>
      <script
        src="https://embed.acuityscheduling.com/js/embed.js"
        type="text/javascript"
      ></script>
    </>
  )
}

export default Scheduling
