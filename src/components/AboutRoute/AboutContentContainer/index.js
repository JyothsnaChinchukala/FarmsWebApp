import {useState, useRef, useEffect} from 'react'
import {Link} from 'react-router-dom'
import {PiFarmFill} from 'react-icons/pi'
import {RiHealthBookFill} from 'react-icons/ri'
import {GiSheep, GiChestnutLeaf} from 'react-icons/gi'
import {FaHandHoldingHeart} from 'react-icons/fa'
import {TiTick} from 'react-icons/ti'
import ThemeContext from '../../../context/ThemeContext'
import Footer from '../../Footer'
import {
  HomeBottomBgContainer,
  DisplayNavItems,
  NavItemListLg,
  AboutUsHeadingContainer,
  AboutUsEl,
  AboutSectionVisionContainer,
  OurVisionImgContainer,
  HomeAboutContent,
  AboutContentHeading,
  AboutContentEl,
  AboutUsEll,
  AboutListItems,
  FarmSpreadContainer,
  FarmSpreadText,
  AboutSectionJourneyContainer,
  JouneryImg,
  AboutUsElll,
  AboutSectionValuesContainer,
  AboutSecOurValuesText,
  ValuesListContainer,
  EachValueContainer,
  EachValueHeading,
  ValueCardHeaderContainer,
  ValueContentText,
  ReadMoreBtn,
} from './styledComponents'

const AboutVideo = () => (
  <div style={{width: '100%', height: '90%', display: 'flex'}}>
    <video
      style={{width: '100%', height: '100%', marginTop: 'auto'}}
      autoPlay
      loop
      muted
      playsInline
    >
      <source
        src="https://res.cloudinary.com/dikncs8sp/video/upload/v1744023708/1557401-hd_1920_1080_30fps_xdmj3p.mp4"
        type="video/mp4"
      />
      Your browser does not support the video tag.
    </video>
  </div>
)

const AboutContentContainer = props => {
  const {menuStatus, onClickMenu} = props

  const onClickNavItem = () => {
    onClickMenu()
  }

  const ref1 = useRef()
  const ref2 = useRef()
  const [isVisible1, setIsVisible1] = useState(false)
  const [isVisible2, setIsVisible2] = useState(false)

  useEffect(() => {
    const currentRef = ref1.current
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible1(true)
        }
      },
      {threshold: 0.2},
    )

    if (ref1.current) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) observer.unobserve(currentRef)
    }
  }, [])
  useEffect(() => {
    const currentRef = ref2.current
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible2(true)
        }
      },
      {threshold: 0.2},
    )

    if (ref2.current) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) observer.unobserve(currentRef)
    }
  }, [])

  return (
    <ThemeContext.Consumer>
      {value => {
        const {isLightTheme} = value
        return (
          <HomeBottomBgContainer>
            {menuStatus === true ? (
              <DisplayNavItems theme={isLightTheme}>
                <Link to="/" style={{textDecoration: 'none', height: '25%'}}>
                  <NavItemListLg
                    theme={isLightTheme}
                    type="button"
                    onClick={onClickNavItem}
                  >
                    Home
                  </NavItemListLg>
                </Link>
                <Link
                  to="/about"
                  style={{textDecoration: 'none', height: '25%'}}
                >
                  <NavItemListLg
                    theme={isLightTheme}
                    type="button"
                    onClick={onClickNavItem}
                  >
                    About
                  </NavItemListLg>
                </Link>
                <Link
                  to="/live-stock"
                  style={{textDecoration: 'none', height: '25%'}}
                >
                  <NavItemListLg
                    theme={isLightTheme}
                    type="button"
                    onClick={onClickNavItem}
                  >
                    LiveStock
                  </NavItemListLg>
                </Link>
                <Link
                  to="/contactUs"
                  style={{textDecoration: 'none', height: '25%'}}
                >
                  <NavItemListLg
                    theme={isLightTheme}
                    type="button"
                    onClick={onClickNavItem}
                  >
                    ContactUs
                  </NavItemListLg>
                </Link>
              </DisplayNavItems>
            ) : null}
            <AboutUsHeadingContainer>
              <AboutUsEl theme={isLightTheme}>About Us</AboutUsEl>
            </AboutUsHeadingContainer>
            <AboutSectionVisionContainer
              ref={ref1}
              className={isVisible1 ? 'visible' : ''}
            >
              <OurVisionImgContainer>
                <AboutVideo />
              </OurVisionImgContainer>
              <HomeAboutContent>
                <AboutUsEll>Sathvick Sheep & Goat Farms</AboutUsEll>
                <AboutContentHeading theme={isLightTheme}>
                  OUR VISION
                </AboutContentHeading>
                <AboutContentEl>
                  At Sathvick Sheep and Goat Farms, our mission is to develop
                  goat farming into a large-scale, well-organized, and
                  commercially viable industry at the national level. This
                  vision can only be realized through the collective efforts of
                  agriculture farmers, goat farmers, business partners, market
                  networks, and public support. Our farm is home to 9+ superior
                  goat breeds, raised with a focus on organic practices, animal
                  welfare, and scientific management. We are committed to
                  producing high-quality meat and, in the coming years, aim to
                  offer fresh meat year-round to meet growing demand. With the
                  right approach, guided by research and sustainable practices,
                  we believe goat farming is not only a profitable venture but
                  also a transformative one — one that creates livelihoods and
                  supports healthier food systems.
                </AboutContentEl>
                <AboutListItems>
                  <FarmSpreadContainer>
                    <PiFarmFill
                      style={{
                        color: isLightTheme
                          ? 'rgb(34, 139, 34)'
                          : 'rgb(255, 255, 240)',
                        width: '30px',
                        height: '30px',
                      }}
                    />
                    <FarmSpreadText>
                      Farm Spread across 10+ Acres
                    </FarmSpreadText>
                  </FarmSpreadContainer>
                  <FarmSpreadContainer>
                    <RiHealthBookFill
                      style={{
                        color: isLightTheme
                          ? 'rgb(34, 139, 34)'
                          : 'rgb(255, 255, 240)',
                        width: '30px',
                        height: '30px',
                      }}
                    />
                    <FarmSpreadText>
                      Under the guidance of health experts and doctors.
                    </FarmSpreadText>
                  </FarmSpreadContainer>
                  <FarmSpreadContainer>
                    <GiSheep
                      style={{
                        color: isLightTheme
                          ? 'rgb(34, 139, 34)'
                          : 'rgb(255, 255, 240)',
                        width: '30px',
                        height: '30px',
                      }}
                    />
                    <FarmSpreadText>
                      300+ Sheeps raised with expert care.
                    </FarmSpreadText>
                  </FarmSpreadContainer>
                </AboutListItems>
              </HomeAboutContent>
            </AboutSectionVisionContainer>
            <AboutSectionJourneyContainer>
              <OurVisionImgContainer>
                <JouneryImg
                  src="https://res.cloudinary.com/dikncs8sp/image/upload/v1744092347/pexels-cottonbro-4921179_b62r9y.jpg"
                  alt="Our Journey"
                />
              </OurVisionImgContainer>
              <HomeAboutContent>
                <AboutUsElll>Our Journey</AboutUsElll>
                <AboutContentHeading theme={isLightTheme}>
                  From Vision to Reality
                </AboutContentHeading>
                <AboutContentEl>
                  From humble beginnings to a growing, respected name in
                  livestock farming, our journey has been shaped by passion,
                  perseverance, and purpose. What began as a small farm with a
                  few goats has blossomed into a thriving operation with
                  multiple breeds, a dedicated team, and a growing network of
                  farmers and partners. Every step has been a learning
                  experience—from understanding breed behavior to mastering
                  organic feeding techniques. We&#39;ve faced challenges,
                  celebrated milestones, and continued to evolve with a single
                  goal in mind: to create a farm that values animals, the land,
                  and the people we serve. Today, Sathvick Sheep and Goat Farms
                  stands as a symbol of trust, innovation, and community in the
                  world of animal husbandry.
                </AboutContentEl>
              </HomeAboutContent>
            </AboutSectionJourneyContainer>
            <AboutSectionValuesContainer>
              <AboutSecOurValuesText>Our Values</AboutSecOurValuesText>
              <ValuesListContainer
                ref={ref2}
                className={isVisible2 ? 'visible' : ''}
              >
                <EachValueContainer>
                  <ValueCardHeaderContainer>
                    <GiChestnutLeaf
                      style={{
                        color: 'green',
                        height: '28px',
                        width: '28px',
                        alignSelf: 'center',
                      }}
                    />
                    <EachValueHeading>Sustainability</EachValueHeading>
                  </ValueCardHeaderContainer>
                  <ValueContentText>
                    We believe in farming that gives back to nature. From using
                    organic feed to managing waste responsibly, sustainability
                    is at the heart of everything we do. We&#39;re committed to
                    protecting the environment while raising livestock in a way
                    that ensures long-term ecological balance.
                  </ValueContentText>
                  <Link to="/live-stock">
                    <ReadMoreBtn theme={isLightTheme}>Read More</ReadMoreBtn>
                  </Link>
                </EachValueContainer>
                <EachValueContainer>
                  <ValueCardHeaderContainer>
                    <FaHandHoldingHeart
                      style={{
                        color: 'red',
                        height: '28px',
                        width: '28px',
                        alignSelf: 'center',
                      }}
                    />
                    <EachValueHeading>Animal Welfare</EachValueHeading>
                  </ValueCardHeaderContainer>
                  <ValueContentText>
                    Our animals are more than just livestock — they&#39;re
                    family. We ensure they live in clean, spacious, and
                    stress-free environments. With proper nutrition, regular
                    health checks, and humane treatment, we put the well-being
                    of every goat and sheep first.
                  </ValueContentText>
                  <Link to="/live-stock">
                    <ReadMoreBtn theme={isLightTheme}>Read More</ReadMoreBtn>
                  </Link>
                </EachValueContainer>
                <EachValueContainer>
                  <ValueCardHeaderContainer>
                    <TiTick
                      style={{
                        color: 'green',
                        height: '28px',
                        width: '28px',
                        alignSelf: 'center',
                      }}
                    />
                    <EachValueHeading>Quality First</EachValueHeading>
                  </ValueCardHeaderContainer>
                  <ValueContentText>
                    From breeding to butchering, every step is handled with care
                    and precision. We focus on premium-quality meat that&#39;s
                    fresh, hygienic, and naturally raised. No shortcuts, no
                    compromises — just the best for our customers.
                  </ValueContentText>
                  <Link to="/live-stock">
                    <ReadMoreBtn theme={isLightTheme}>Read More</ReadMoreBtn>
                  </Link>
                </EachValueContainer>
              </ValuesListContainer>
            </AboutSectionValuesContainer>
            <Footer />
          </HomeBottomBgContainer>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default AboutContentContainer
