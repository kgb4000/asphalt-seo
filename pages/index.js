/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import Link from 'next/link'
import styled from 'styled-components'
import Hero from '../components/Hero'
import Button from '../components/Button'
import { DefaultSeo } from 'next-seo'

export default function Home() {
  return (
    <>
      <Hero
        backgroundImage="images/asphalt-seo-cover-img.jpg"
        backgroundHeight="100vh"
        heroText="Search Engine Optimization for Asphalt Paving Companies"
        subText="Our team of SEO experts can take control of your SEO, so you can concentrate on growing your asphalt paving business."
        buttonText="Call us today!"
      />
      <section>
        <div className="container">
          <IndexSection>
            <div>
              <h2>
                Digital Marketing is Tough, But Try Succeeding Without It!
              </h2>
              <p>
                You need leads and customers to keep your business running and
                you need a system to keep those leads and customers coming in.
              </p>
              <p>
                You're tired of struggling to get leads with Facebook and PPC
                ads, following so-called experts that promise great things, and
                not get any results.
              </p>
              <p>
                That's why we started our business - to help asphalt paving
                companies like yours build your own lead genrating system and to
                help grow your company.
              </p>
              <p>We got you covered.</p>
              <p>
                No more trying online marketing that does't work or paying for
                ads and leads.
              </p>
              <p>
                We'll handle everything for you so you can concentrate on
                growing your business.
              </p>
              <p>Call us for a free website evaluation.</p>
              <div className="left">
                <Link href="/gmb-optimization" passHref>
                  <a>
                    <Button>Call (240) 266-0588</Button>
                  </a>
                </Link>
              </div>
            </div>
            <img
              src="images/seo-for-asphalt-companies.jpg"
              alt="SEO for asphalt companies | Asphalt  Paver SEO"
              title="This man has finally decided it's time to do SEO for his asphalt paving company or go out of business."
            />
          </IndexSection>
        </div>
      </section>
      <section className="city-lights">
        <div className="service-container">
          <h2>Our Services</h2>
          <Services>
            <Service>
              <img
                src="/images/asphalt-seo-cover-img.jpg"
                alt="Local SEO for asphalt companies"
                title="Local SEO for asphalt companies"
              />
              <h3>Local SEO</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex
                omnis officia ipsa natus id quia consequuntur, sed optio dolore
                esse alias inventore dolorem! Beatae eos delectus veniam,
                laboriosam tenetur rerum.
              </p>
              <div className="left">
                <Link href="/local-seo-for-pavers" passHref>
                  <a>
                    <Button>Local SEO for Pavers</Button>
                  </a>
                </Link>
              </div>
            </Service>
            <Service>
              <img
                src="/images/asphalt-seo-cover-img.jpg"
                alt="Local SEO for asphalt companies"
                title="Local SEO for asphalt companies"
              />
              <h3>GMB Optimization</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex
                omnis officia ipsa natus id quia consequuntur, sed optio dolore
                esse alias inventore dolorem! Beatae eos delectus veniam,
                laboriosam tenetur rerum.
              </p>
              <div className="left">
                <Link href="/gmb-optimization" passHref>
                  <a>
                    <Button>GMB Optimization</Button>
                  </a>
                </Link>
              </div>
            </Service>
            <Service>
              <img
                src="/images/asphalt-seo-cover-img.jpg"
                alt="Local SEO for asphalt companies"
                title="Local SEO for asphalt companies"
              />
              <h3>SEO Audits</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex
                omnis officia ipsa natus id quia consequuntur, sed optio dolore
                esse alias inventore dolorem! Beatae eos delectus veniam,
                laboriosam tenetur rerum.
              </p>
              <div className="left">
                <Link href="/seo-audits" passHref>
                  <a>
                    <Button>SEO Audit Service</Button>
                  </a>
                </Link>
              </div>
            </Service>
          </Services>
        </div>
      </section>
      <section>
        <div className="container">
          <h2>Why Choose Us?</h2>
          <p>Why work with Asphalt Paver SEO to help grow your business?</p>
          <p>Because we can help you:</p>
          <Reasons>
            <Reason>
              <img
                src="/images/asphalt-seo-cover-img.jpg"
                alt="Local SEO for asphalt companies"
                title="Local SEO for asphalt companies"
              />
              <div>
                <h3>Save Time</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex
                  omnis officia ipsa natus id quia consequuntur, sed optio
                  dolore esse alias inventore dolorem! Beatae eos delectus
                  veniam, laboriosam tenetur rerum.
                </p>
              </div>
            </Reason>
            <Reason>
              <img
                src="/images/asphalt-seo-cover-img.jpg"
                alt="Local SEO for asphalt companies"
                title="Local SEO for asphalt companies"
              />
              <div>
                <h3>Increase Your Online Visibility</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex
                  omnis officia ipsa natus id quia consequuntur, sed optio
                  dolore esse alias inventore dolorem! Beatae eos delectus
                  veniam, laboriosam tenetur rerum.
                </p>
              </div>
              <img
                src="/images/asphalt-seo-cover-img.jpg"
                alt="Local SEO for asphalt companies"
                title="Local SEO for asphalt companies"
                className="phone"
              />
            </Reason>
            <Reason>
              <img
                src="/images/asphalt-seo-cover-img.jpg"
                alt="Local SEO for asphalt companies"
                title="Local SEO for asphalt companies"
              />
              <div>
                <h3>Make More Money</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex
                  omnis officia ipsa natus id quia consequuntur, sed optio
                  dolore esse alias inventore dolorem! Beatae eos delectus
                  veniam, laboriosam tenetur rerum.
                </p>
              </div>
            </Reason>
          </Reasons>
          <div className="btn">
            <Link href="/seo-audits" passHref>
              <a>
                <Button>Contact us today!</Button>
              </a>
            </Link>
          </div>
        </div>
      </section>
      <section className="city-lights">
        <div className="service-container">
          <h2>What You Get with Our SEO Services</h2>
          <p>What you get when you work with Asphalt Paver SEO.</p>
          <Deliverables>
            <Deliverable>
              <div className="check"></div>
              <div>
                <h3 className="deliverable">One-on-one Expert Support</h3>
                <p>
                  Get free expert advice on how to improve your website for the
                  search engines, and increase your online presence.
                </p>
              </div>
            </Deliverable>
            <Deliverable>
              <div className="check"></div>
              <div>
                <h3>Weekly Updates</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Cumque quaerat cum officia, doloremque itaque tempora dolor
                  dignissimos nam doloribus quae mollitia nesciunt pariatur,
                  voluptates, consequatur accusantium. Cumque enim voluptatum
                  magni!
                </p>
              </div>
            </Deliverable>
            <Deliverable>
              <div className="check"></div>
              <div>
                <h3>Keyword Research and Optimization</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Cumque quaerat cum officia, doloremque itaque tempora dolor
                  dignissimos nam doloribus quae mollitia nesciunt pariatur,
                  voluptates, consequatur accusantium. Cumque enim voluptatum
                  magni!
                </p>
              </div>
            </Deliverable>
            <Deliverable>
              <div className="check"></div>
              <div>
                <h3>Content / Service Page Updates and Optimization</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Cumque quaerat cum officia, doloremque itaque tempora dolor
                  dignissimos nam doloribus quae mollitia nesciunt pariatur,
                  voluptates, consequatur accusantium. Cumque enim voluptatum
                  magni!
                </p>
              </div>
            </Deliverable>
            <Deliverable>
              <div className="check"></div>
              <div>
                <h3>GMB Creation and Optimization</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Cumque quaerat cum officia, doloremque itaque tempora dolor
                  dignissimos nam doloribus quae mollitia nesciunt pariatur,
                  voluptates, consequatur accusantium. Cumque enim voluptatum
                  magni!
                </p>
              </div>
            </Deliverable>
            <Deliverable>
              <div className="check"></div>
              <div>
                <h3>Competitor Analysis and Monitoring</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Cumque quaerat cum officia, doloremque itaque tempora dolor
                  dignissimos nam doloribus quae mollitia nesciunt pariatur,
                  voluptates, consequatur accusantium. Cumque enim voluptatum
                  magni!
                </p>
              </div>
            </Deliverable>
          </Deliverables>
          <Deliverables>
            <Deliverable>
              <div className="check"></div>
              <div>
                <h3>Google Analytics and Google Console Setup</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Cumque quaerat cum officia, doloremque itaque tempora dolor
                  dignissimos nam doloribus quae mollitia nesciunt pariatur,
                  voluptates, consequatur accusantium. Cumque enim voluptatum
                  magni!
                </p>
              </div>
            </Deliverable>
            <Deliverable>
              <div className="check"></div>
              <div>
                <h3>Local SEO</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Cumque quaerat cum officia, doloremque itaque tempora dolor
                  dignissimos nam doloribus quae mollitia nesciunt pariatur,
                  voluptates, consequatur accusantium. Cumque enim voluptatum
                  magni!
                </p>
              </div>
            </Deliverable>
            <Deliverable>
              <div className="check"></div>
              <div>
                <h3>SEO Audits</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Cumque quaerat cum officia, doloremque itaque tempora dolor
                  dignissimos nam doloribus quae mollitia nesciunt pariatur,
                  voluptates, consequatur accusantium. Cumque enim voluptatum
                  magni!
                </p>
              </div>
            </Deliverable>
          </Deliverables>
        </div>
        <div className="btn">
          <Link href="/seo-audits" passHref>
            <a>
              <Button>Contact us today!</Button>
            </a>
          </Link>
        </div>
      </section>
      <section>
        <div className="container">
          <h2>Frequently Asked Questions</h2>
          <div className="faqs">
            <h3>What is Local SEO?</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi,
              sint ipsa sunt maxime eaque exercitationem neque doloremque earum
              ea perspiciatis consectetur quo, soluta distinctio quis laboriosam
              molestiae. Earum, alias suscipit!
            </p>
          </div>
          <div className="faqs">
            <h3>What's the difference between SEO and local SEO?</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi,
              sint ipsa sunt maxime eaque exercitationem neque doloremque earum
              ea perspiciatis consectetur quo, soluta distinctio quis laboriosam
              molestiae. Earum, alias suscipit!
            </p>
          </div>
          <div className="faqs">
            <h3>Why is Local SEO Important for My Asphalt Paving Business?</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi,
              sint ipsa sunt maxime eaque exercitationem neque doloremque earum
              ea perspiciatis consectetur quo, soluta distinctio quis laboriosam
              molestiae. Earum, alias suscipit!
            </p>
          </div>
          <div className="faqs">
            <h3>What is the Cost of Local SEO?</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi,
              sint ipsa sunt maxime eaque exercitationem neque doloremque earum
              ea perspiciatis consectetur quo, soluta distinctio quis laboriosam
              molestiae. Earum, alias suscipit!
            </p>
          </div>
          <div className="faqs">
            <h3>How Does Local SEO Work?</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi,
              sint ipsa sunt maxime eaque exercitationem neque doloremque earum
              ea perspiciatis consectetur quo, soluta distinctio quis laboriosam
              molestiae. Earum, alias suscipit!
            </p>
          </div>
          <div className="faqs">
            <h3>Can I Do SEO Myself?</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi,
              sint ipsa sunt maxime eaque exercitationem neque doloremque earum
              ea perspiciatis consectetur quo, soluta distinctio quis laboriosam
              molestiae. Earum, alias suscipit!
            </p>
          </div>
          <div className="faqs">
            <h3>Can You Guarantee #1 Rankings?</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi,
              sint ipsa sunt maxime eaque exercitationem neque doloremque earum
              ea perspiciatis consectetur quo, soluta distinctio quis laboriosam
              molestiae. Earum, alias suscipit!
            </p>
          </div>
        </div>
        <div className="btn">
          <Link href="/seo-audits" passHref>
            <a>
              <Button>Get a Free Seo Audit!</Button>
            </a>
          </Link>
        </div>
      </section>
      <CallToAction
        backgroundImage="https://images.unsplash.com/photo-1573335553610-a871dfd95bf5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"
        backgroundHeight="30rem"
      >
        <div className="container">
          <div className="content">
            <h2>
              Ready to Get More Leads and Customers for Your Asphalt Paving
              Business?
            </h2>
            <div className="btn">
              <Link href="/seo-audits" passHref>
                <a>
                  <Button>Call us today!</Button>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </CallToAction>
    </>
  )
}

const IndexSection = styled.div`
  margin: 2rem 0;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 40px;
    align-items: center;
  }
`

const Services = styled.div`
  margin: 2rem 0;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 20px;
  }
`

const Service = styled.div`
  margin: 2rem 0;
`

const Reasons = styled.div`
  margin: 2rem 0;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 20px;
  }
`

const Reason = styled.div`
  margin: 2rem 0;

  .phone {
    display: none;
  }

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 40px;
    align-items: center;
  }
`

const Deliverable = styled.div`
  margin: 1rem 0;
  display: flex;

  .check {
    background-image: url('images/tick.png');
    background-repeat: no-repeat;
    padding-left: 30px;
    display: block;
    height: 64px;
    width: 64px;
    margin-right: 0.5rem;
  }
`

// &::before {
//     content: url('images/tick.png');
//     position: relative; /*or absolute*/
//     z-index: 100000; /*a number that's more than the modal box*/
//     left: -10px;
//     top: 5px;
//   }
const Deliverables = styled.div`
  margin: 2rem 0;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 40px;
  }
`

const CallToAction = styled.div`
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
  margin-top: 4rem;
  padding: 5rem 0;

  .content {
    margin: 0 auto;
    text-align: center;
    font-weight: 700;

    @media (min-width: 768px) {
      max-width: 60%;
    }
  }
`
