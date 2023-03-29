import React from 'react'

function DefaultLayout(props) {       

    return(
        <html>
            <head>
                <title>{props.title}</title>
                <link rel="stylesheet" href="/css/styles.css" />
            </head>
            <body>
       <div>
        <div> {props.children}
        </div>
       </div>
       </body>
       </html>
    )
}

export default DefaultLayout

