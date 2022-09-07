import { useState } from 'react'
import styled from 'styled-components'
import Hero from '../components/Hero'
import Button from '../components/Button'

const Blog = () => {
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: {
      error: false,
      msg: null,
    },
  })

  const [inputs, setInputs] = useState({
    email: '',
  })

  const handleOnChange = (e) => {
    e.persist()
    setInputs((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }))
    setStatus({
      submitted: false,
      submitting: false,
      info: { error: false, msg: null },
    })
  }

  const isEnabled = inputs.email.length && inputs.name > 0

  const handleResponse = (status, msg) => {
    if (status === 200) {
      setStatus({
        submitted: true,
        submitting: false,
        info: {
          error: false,
          msg: msg,
        },
      })
      setInputs({
        email: '',
      })
    } else {
      setStatus({
        info: {
          error: true,
          msg: msg,
        },
      })
    }
  }

  const handleOnSubmit = async (e) => {
    e.preventDefault()

    setStatus((prevStatus) => ({
      ...prevStatus,
      submitting: true,
    }))

    const endpoint =
      'https://gjkpiayn2a.execute-api.us-east-1.amazonaws.com/production/freeminiseoaudit'

    const body = JSON.stringify({
      email: inputs.email,
    })

    console.log(body)

    const res = await fetch(endpoint, {
      method: 'POST',
      body,
    })

    const text = await res.text()
    handleResponse(res.status, text)
  }

  return (
    <BlogPage>
      <section>
        <div className="container">
          <h1 className="center">Asphalt SEO Blog</h1>
          <div className="content">
            <p className="center">
              Practical Tips for Your Asphalt Paving Company on How to Get More
              Leads and Customers to Grow Your Business.
            </p>
            <form>
              <input
                type="text"
                value={inputs.email}
                onChange={handleOnChange}
                placeholder="Email*"
                required
              />
              <FormButton type="submit">Subscribe</FormButton>
            </form>
            <p className="center">
              Join fellow asphalt paving business owners and get SEO tips and
              updates every two weeks.
            </p>
          </div>
        </div>
      </section>
    </BlogPage>
  )
}

export default Blog

const BlogPage = styled.div`
  .content {
    max-width: 600px;
    margin: 0 auto;
    p {
      font-size: 1.6rem;
    }
  }
  form {
    max-width: 400px;
    margin: 2rem auto;
  }
  input {
    height: 50px;
    padding: 1rem;
    width: 100%;
    border: 2px solid #ddd;
    border-radius: 0;
    margin-bottom: 0.5rem;
  }
`

const FormButton = styled(Button)`
  height: 50px;
  text-align: center;
  padding: 0;
  width: 100%;
  border: 2px solid #ff6600;
  border-radius: 0;
  margin: 0;
`
