/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import Link from 'next/link'
import styled from 'styled-components'
import Hero from '../components/Hero'
import Button from '../components/Button'

export default function Home() {
  return (
    <>
      <Hero
        backgroundImage="images/asphalt-seo-cover-img.jpg"
        backgroundHeight="100vh"
        heroText="Search Engine Optimization for Asphalt Paving Companies and Contractors"
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
                You're tired of struggling to get leads with Facebook ads and
                pay-paer-click ads, and you're tired of paying lead generation
                companies for bad leads.
              </p>
              <p>
                You've followed so-called experts who promise great things, and
                get mediocore results.
              </p>
              <p>
                You need leads and customers to keep your business running and
                you need a system to keep those leads and customers coming in.
              </p>
              <p>
                That's why we started our business - to help asphalt paving
                companies like yours build your own lead generating system and
                to help grow your company.
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
                Our local SEO services for asphlat companies can help your
                website rank higher for local searches, leading to more
                customers, increased traffic and higher conversions.
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
                We optimize your Google My Business listing to make sure that
                your business is appearing in local search results and work to
                increase your online reviews and ratings.
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
              <h3>SEO Audit Service</h3>
              <p>
                Identify areas affecting your SEO performance. You get a
                detailed report and actionable recommendations to help improve
                your website's ranking and visibility.
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
                  Your time is best spent running your business, not learning
                  about search engine optimization. Let us take care of the
                  grunt work while you focus on what you do best: growing your
                  business.
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
                <h3>Increased Online Visibility</h3>
                <p>
                  Get your business in front of potential customers precisely
                  when they search for your services. Increased visibility leads
                  to increased traffic and, ultimately, more customers and
                  increased sales.
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
                  Get free expert advice and support from our team of SEO
                  experts, available to answer all your questions via email or
                  on a call. We’re here to help you grow your business, boost
                  your ranking, and increase your online presence.
                </p>
              </div>
            </Deliverable>
            <Deliverable>
              <div className="check"></div>
              <div>
                <h3>Weekly Updates</h3>
                <p>
                  We keep you in the light with weekly progress reports, showing
                  you exactly what we’ve done and how it’s helped your website
                  grow. We let you know your SEO progress so you can be
                  confident that your investment is paying off.
                </p>
              </div>
            </Deliverable>
            <Deliverable>
              <div className="check"></div>
              <div>
                <h3>Keyword Research and Optimization</h3>
                <p>
                  Choose the right keywords and increase your traffic with our
                  comprehensive keyword research service. We’ll help you
                  identify high-value, relevant keywords that will improve your
                  ranking and attract more visitors to your site.
                </p>
              </div>
            </Deliverable>
            <Deliverable>
              <div className="check"></div>
              <div>
                <h3>Content / Service Page Updates and Optimization</h3>
                <p>
                  We update and optimize your content to ensure it’s aligned
                  with your keywords and attracts more visitors. We also make
                  sure your website’s pages are error-free and loading quickly
                  so users have a positive experience on your site.
                </p>
              </div>
            </Deliverable>
            <Deliverable>
              <div className="check"></div>
              <div>
                <h3>GMB Creation and Optimization</h3>
                <p>
                  Dominate your local area with a GMB listing. We’ll create and
                  optimize your GMB profile, helping you attract more customers
                  and grow your business. Show up for near-me searches and make
                  it easy for customers to find you online.
                </p>
              </div>
            </Deliverable>
            <Deliverable>
              <div className="check"></div>
              <div>
                <h3>Competitor Analysis and Monitoring</h3>
                <p>
                  We research your competitors and track their SEO progress so
                  you always know where you stand in the SERPs. We’ll help you
                  Identify opportunities to outrank your competition and take
                  your website to the next level.
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
                  We set up Google Analytics and Google Console to track your
                  website’s performance and get insights into your traffic,
                  keywords, and more. Monitor your progress and adjust your SEO
                  strategy accordingly.
                </p>
              </div>
            </Deliverable>
            <Deliverable>
              <div className="check"></div>
              <div>
                <h3>Local SEO</h3>
                <p>
                  Let customers find your business, not someone else. We’ll
                  optimize your website and online listings for local search, so
                  you can attract more leads and customers in your area.
                </p>
              </div>
            </Deliverable>
            <Deliverable>
              <div className="check"></div>
              <div>
                <h3>SEO Audits</h3>
                <p>
                  Not sure where to start with SEO? Our comprehensive website
                  audits will point you in the right direction. We’ll analyze
                  your website and create a personalized plan to help you
                  achieve your SEO goals.
                </p>
              </div>
            </Deliverable>
            <Deliverable>
              <div className="check"></div>
              <div>
                <h3>100% Transparency</h3>
                <p>
                  You deserve to know what we’re doing and how it’s helping your
                  website grow. We provide full transparency with our work,
                  sending you weekly reports so you can see exactly what we’ve
                  done and how it’s helped your website rank higher in the
                  SERPs.
                </p>
              </div>
            </Deliverable>
          </Deliverables>
        </div>
        <div className="btn">
          <Link href="/contact" passHref>
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
              Local SEO is the process of optimizing your website for local
              search. This includes optimizing your site for both mobile and
              desktop users, as well as making sure your website appears in
              local search results.
            </p>
          </div>
          <div className="faqs">
            <h3>What's the difference between SEO and local SEO?</h3>
            <p>
              The main difference between SEO and local SEO is that local SEO is
              focused on optimizing your website for local search. This includes
              things like making sure your website appears in local search
              results and optimizing your site for mobile users. SEO, on the
              other hand, is a broader term that can refer to any type of search
              engine optimization, including both local and global optimization.
            </p>
          </div>
          <div className="faqs">
            <h3>Why is Local SEO Important for My Asphalt Paving Business?</h3>
            <p>
              There are several reasons why Local SEO is important for your
              asphalt paving business, including:
            </p>
            <p>
              It helps you reach a wider audience of potential customers who are
              searching for businesses like yours in their local area. It makes
              it easier for potential customers to find your business when
              they’re searching for asphalt paving companies in your area. It
              helps you attract more leads and customers in your area. It
              increases visibility in the local search results
            </p>
          </div>
          <div className="faqs">
            <h3>
              What is the Cost of Local SEO for an Asphalt Paving Company?
            </h3>
            <p>
              The cost of Local SEO depends on different factors, including your
              business’s location, size, and competition. Usually, the average
              cost of local SEO ranges from $1000 to $5,000 per month.{' '}
            </p>
            <p>
              <Link href="/contact" passHref>
                <a>Contact us</a>
              </Link>{' '}
              for a free consultaion.
            </p>
          </div>
          <div className="faqs">
            <h3>How Long Does It Take to See Results from Local SEO?</h3>
            <p>
              It typically takes 3-6 months to see results from Local SEO,
              although it can sometimes take longer depending on your business’s
              location and competition in your area.
            </p>
          </div>
          <div className="faqs">
            <h3>Can I Do SEO Myself?</h3>
            <p>
              Yes, you can do SEO yourself, but it’s often a good idea to hire
              an experienced SEO company to help you. This is because SEO is
              complex and ever-changing, and it can be difficult to keep up with
              the latest changes and best practices. An experienced SEO company
              will be able to help you maximize your chances of success with
              SEO.
            </p>
          </div>
          <div className="faqs">
            <h3>Can You Guarantee #1 Rankings?</h3>
            <p>No, we can’t guarantee first-place rankings.</p>
            <p>
              But we can guarantee that we will do our best to help you succeed
              with your local SEO campaign. We have a proven track record of
              helping businesses improve their organic search rankings.
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
