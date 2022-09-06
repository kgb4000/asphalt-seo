import React from 'react'
import styled from 'styled-components'

export const Footer = () => {
  return (
    <FooterSection>
      Asphalt Paver SEO &copy; {new Date().getFullYear()}
    </FooterSection>
  )
}

const FooterSection = styled.footer`
  padding: 2rem 0;
  text-align: center;
  background-color: #000;
  color: #ff6600;
`
