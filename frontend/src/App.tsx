import React from 'react'
import { css, cx } from 'emotion'

export default function App() {
    return (
        <div className={css`
        padding: 32px;
        background-color: hotpink;
        font-size: 24px;
        border-radius: 4px;
        &:hover {
          color: white;
        }
      `}>
            test
        </div>
    )
}
