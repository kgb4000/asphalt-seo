import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import Button from './Button'
import { FaBars } from 'react-icons/fa'

export const Navbar = ({ toggle }) => {
  return (
    <NavbarSection>
      <div className="logo">
        <Link href="/" passHref>
          <a>Asphalt Paver SEO</a>
        </Link>
      </div>
      <MobileIcon onClick={toggle}>
        <FaBars />
      </MobileIcon>
      <nav>
        <ul className="nav">
          <li>
            <Link href="/services" passHref>
              <a>Services</a>
            </Link>
          </li>
          <li>
            <Link href="/blog" passHref>
              <a>Blog</a>
            </Link>
          </li>
          <li>Testimonials</li>
          <li>About us</li>
          <li>
            <Link href="/contact" passHref>
              <a>Contact</a>
            </Link>
          </li>
          <li>
            <NavButton>(240) 266-0588</NavButton>
          </li>
        </ul>
      </nav>
    </NavbarSection>
  )
}

const NavbarSection = styled.header`
  height: 100px;
  line-height: 100px;
  padding: 0 1.2rem;
  display: flex;
  justify-content: space-between;
  color: #fff;
  background-color: #000;

  .logo {
    display: inline-block;
    font-weight: 900;
    font-size: 1.2rem;
  }

  nav,
  ul.nav {
    display: none;
    @media (min-width: 1024px) {
      display: flex;
    }

    li {
      list-style-type: none;
      margin: 0 1rem;
    }
  }
`

const NavButton = styled(Button)`
  margin: 0;
  padding: 0.5rem 1rem;
  font-weight: 700;
`

const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 1023px) {
    display: block;
    transform: translate(-100%. 60%);
    font-size: 1.8rem;
    cursor: pointer;
    align-item: center;
    color: #fff;
  }
`
