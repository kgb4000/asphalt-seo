import React from 'react'
import styled from 'styled-components'
import Button from './Button'

const Hero = ({
  backgroundImage,
  backgroundHeight,
  heroText,
  subText,
  buttonText,
  buttonLink,
}) => {
  return (
    <>
      <HeroSection
        backgroundImage={backgroundImage}
        backgroundHeight={backgroundHeight}
      >
        <div className="content">
          <h1 className="heroText">{heroText}</h1>
          <p className="subText">{subText}</p>
          {buttonText && (
            <a href={buttonLink}>
              <HeroButton>{buttonText}</HeroButton>
            </a>
          )}
        </div>
      </HeroSection>
    </>
  )
}

export default Hero

const HeroSection = styled.div`
  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.42),
      rgba(0, 0, 0, 0.75)
    ),
    url(${(props) => props.backgroundImage});
  background-position: center;
  height: ${(props) => props.backgroundHeight};
  background-size: cover;
  margin: 0 auto;
  margin-top: -100px;
  max-width: 100vw;

  @media (min-width: 812px) {
    margin-bottom: 4rem;
  }

  .content {
    max-width: 80%;
    text-align: center;
    font-weight: 700;

    @media (min-width: 812px) {
      margin-top: 100px;
    }

    h1 {
      font-size: 2.7rem;
    }

    .subText {
      margin-top: 1rem;
      font-weight: normal;
    }

    @media only screen and (min-width: 1024px) {
      h1 {
        font-size: 5rem;
      }

      .subText {
        margin-top: 1rem;
        font-size: 2rem;
        font-weight: normal;
        max-width: 70%;
        margin: 0 auto;
      }
    }
  }
`

const HeroButton = styled(Button)``
