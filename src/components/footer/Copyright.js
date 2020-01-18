/** @jsx jsx */
import React from "react"
import { jsx, css } from "@emotion/core"

import THEMES from "../../styles/themes"
const primary = THEMES.colors.primary

const Copyright = () => {
  return (
    <div>
      Copyright ©2020 All rights Reserved |{" "}
      <a
        href="mailto:ashley.ansell@gmail.com"
        css={css`
          color: ${primary};
        `}
      >
        Ashley
      </a>
    </div>
  )
}

export default Copyright
