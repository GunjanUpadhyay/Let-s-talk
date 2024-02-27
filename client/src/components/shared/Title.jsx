import React from 'react'
import {Helmet} from "react-helmet-async";

const Title = ( {title='Lets talk',
description="This is the chattingg app",}) => {
   
  return (
    <Helmet>
        <title>{title}</title>
        <meta name='description' content={description}/>
    </Helmet>
  )
}

export default Title