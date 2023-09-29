import React from 'react'
import { Breadcrumb } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

const CrumbItem = ({to, glyph, ...props}) => (
  <LinkContainer to={to} className='mb-0'>
    <Breadcrumb.Item {...props}>
    </Breadcrumb.Item>
  </LinkContainer>
)

export default CrumbItem