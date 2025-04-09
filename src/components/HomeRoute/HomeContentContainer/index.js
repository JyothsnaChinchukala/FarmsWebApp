import {Link} from 'react-router-dom'
import {useEffect, useRef, useState} from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import {PiFarmFill} from 'react-icons/pi'
import {RiHealthBookFill} from 'react-icons/ri'
import {GiSheep} from 'react-icons/gi'
import Footer from '../../Footer'
import ThemeContext from '../../../context/ThemeContext'
import {
  HomeBottomBgContainer,
  DisplayNavItems,
  NavItemListLg,
  SlideContainer,
  CorousalImg,
  CorousalImgContainer,
  HomeHeroSection,
  HomeHeroSecMainHeading,
  HomeHeroSecSubHeading,
  HomeHeroSecContactUsBtn,
  HomeAboutSection,
  HomeAboutImgContainer,
  HomeAboutImg,
  HomeAboutContent,
  AboutUsEl,
  AboutContentHeading,
  AboutContentEl,
  AboutListItems,
  FarmSpreadContainer,
  FarmSpreadText,
  HomeAbtSecKnowMorwBtn,
  HomeLiveStockSection,
  HomeLiveStockTextEl,
  BreedsListContainer,
  EachBreedContainer,
  BreedImg,
  BreedNameEl,
  ReadMoreBtn,
  BreadDescription,
} from './styledComponents'

const HomeContentContainer = props => {
  const {menuStatus, onClickMenu} = props

  const settings = {
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
  }

  const onClickNavItem = () => {
    onClickMenu()
  }

  const ref = useRef()
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const currentRef = ref.current
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      {threshold: 0.2},
    )

    if (ref.current) {
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
            <SlideContainer>
              <Slider {...settings}>
                <CorousalImgContainer>
                  <CorousalImg
                    src="https://res.cloudinary.com/dikncs8sp/image/upload/v1743676109/f08b60bb-2bfe-428c-9a02-9fc60161ec8b_b06w3u.jpg"
                    alt="corousalImg1"
                  />
                </CorousalImgContainer>
                <CorousalImgContainer>
                  <CorousalImg
                    src="https://res.cloudinary.com/dikncs8sp/image/upload/v1743676109/8749701c-f292-45a3-a7cd-edacaca1714b_zyosqa.jpg"
                    alt="corousalImg2"
                  />
                </CorousalImgContainer>
                <CorousalImgContainer>
                  <CorousalImg
                    src="https://res.cloudinary.com/dikncs8sp/image/upload/v1743676111/375b1e58-00f0-4f11-a50a-e2441072a816_wqthve.jpg"
                    alt="corousalImg3"
                  />
                </CorousalImgContainer>
                <CorousalImgContainer>
                  <CorousalImg
                    src="https://res.cloudinary.com/dikncs8sp/image/upload/v1743676111/5ee4a5b7-c902-4ed6-932f-72794989fd6f_hxmkvn.jpg"
                    alt="corousalImg4"
                  />
                </CorousalImgContainer>
                <CorousalImgContainer>
                  <CorousalImg
                    src="https://res.cloudinary.com/dikncs8sp/image/upload/v1743676111/e403480e-5c7c-45de-9373-5a9760ea1ae0_q15hi8.jpg"
                    alt="corousalImg5"
                  />
                </CorousalImgContainer>
              </Slider>
            </SlideContainer>
            <HomeHeroSection theme={isLightTheme}>
              <HomeHeroSecMainHeading theme={isLightTheme}>
                Healthy Sheep & Goats, Naturally Raised for You!
              </HomeHeroSecMainHeading>
              <HomeHeroSecSubHeading theme={isLightTheme}>
                Dedicated to Raising Healthy, High-Quality Sheep & Goats for
                Sustainable Agriculture and Wholesome Living.
              </HomeHeroSecSubHeading>
              <Link to="/contactUs" style={{marginTop: 'auto'}}>
                <HomeHeroSecContactUsBtn theme={isLightTheme}>
                  Explore Our Farm
                </HomeHeroSecContactUsBtn>
              </Link>
            </HomeHeroSection>
            <HomeAboutSection>
              <HomeAboutImgContainer>
                <HomeAboutImg
                  src="https://res.cloudinary.com/dikncs8sp/image/upload/v1744030929/pexels-dan-hamill-144328-436796_lejbjc.jpg"
                  alt="homeAboutImg"
                />
              </HomeAboutImgContainer>
              <HomeAboutContent>
                <AboutUsEl>About Us</AboutUsEl>
                <AboutContentHeading theme={isLightTheme}>
                  Why Choose SATHVICK SHEEP AND GOAT Farms?
                </AboutContentHeading>
                <AboutContentEl>
                  At Sathvick Sheep and Goat Farms, we take immense pride in
                  setting new benchmarks in livestock farming by combining
                  traditional wisdom with modern innovations. Our farm is
                  equipped with advanced facilities and follows ethical and
                  sustainable practices to ensure the highest quality standards
                  in goat and sheep farming. With years of experience, we
                  meticulously nurture our herds, prioritizing their health,
                  well-being, and natural growth. Our commitment goes beyond
                  farming. we aim to provide premium-quality, ethically sourced
                  sheep and goat meat. With a strong emphasis on sustainable and
                  humane farming practices, we ensure that our livestock is
                  raised with the utmost care, resulting in meat that is both
                  nutritious and of the highest quality
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
                <Link to="/about" style={{marginTop: 'auto'}}>
                  <HomeAbtSecKnowMorwBtn theme={isLightTheme}>
                    Know More
                  </HomeAbtSecKnowMorwBtn>
                </Link>
              </HomeAboutContent>
            </HomeAboutSection>
            <HomeLiveStockSection>
              <HomeLiveStockTextEl>The Heart of Our Farm</HomeLiveStockTextEl>
              <BreedsListContainer>
                <EachBreedContainer
                  ref={ref}
                  className={isVisible ? 'visible' : ''}
                >
                  <BreedImg
                    src="https://res.cloudinary.com/dikncs8sp/image/upload/v1743676111/e403480e-5c7c-45de-9373-5a9760ea1ae0_q15hi8.jpg"
                    alt="Macharla Breed"
                  />
                  <BreedNameEl theme={isLightTheme}>Macharla Breed</BreedNameEl>
                  <BreadDescription>
                    Macharla sheep from AndhraPradesh are valued for their
                    tender, flavorful meat, making them a preferred choice among
                    local consumers.
                  </BreadDescription>
                  <Link to="/live-stock">
                    <ReadMoreBtn theme={isLightTheme}>Read More</ReadMoreBtn>
                  </Link>
                </EachBreedContainer>
                <EachBreedContainer
                  ref={ref}
                  className={isVisible ? 'visible' : ''}
                >
                  <BreedImg
                    src="https://res.cloudinary.com/dikncs8sp/image/upload/v1743676111/375b1e58-00f0-4f11-a50a-e2441072a816_wqthve.jpg"
                    alt="Vembur Breed"
                  />
                  <BreedNameEl theme={isLightTheme}>Vembur Breed</BreedNameEl>
                  <BreadDescription>
                    Vembur sheep from TamilNadu are prized for their lean,
                    high-quality meat, widely favored in traditional South
                    Indian cuisine.
                  </BreadDescription>
                  <Link to="/live-stock">
                    <ReadMoreBtn theme={isLightTheme}>Read More</ReadMoreBtn>
                  </Link>
                </EachBreedContainer>
                <EachBreedContainer
                  ref={ref}
                  className={isVisible ? 'visible' : ''}
                >
                  <BreedImg
                    src="https://res.cloudinary.com/dikncs8sp/image/upload/v1743676109/8749701c-f292-45a3-a7cd-edacaca1714b_zyosqa.jpg"
                    alt="Yalaga Breed"
                  />
                  <BreedNameEl theme={isLightTheme}>Yalaga Breed</BreedNameEl>
                  <BreadDescription>
                    Yalaga sheep from Karnataka are known for their rich,
                    succulent meat, making them a popular choice in regional
                    delicacies.
                  </BreadDescription>
                  <Link to="/live-stock">
                    <ReadMoreBtn theme={isLightTheme}>Read More</ReadMoreBtn>
                  </Link>
                </EachBreedContainer>
              </BreedsListContainer>
            </HomeLiveStockSection>
            <Footer />
          </HomeBottomBgContainer>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default HomeContentContainer
