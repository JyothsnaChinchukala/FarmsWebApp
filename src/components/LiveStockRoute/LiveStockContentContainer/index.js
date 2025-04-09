import {Link} from 'react-router-dom'
import Footer from '../../Footer'
import ThemeContext from '../../../context/ThemeContext'
import {
  HomeBottomBgContainer,
  DisplayNavItems,
  NavItemListLg,
  LiveStockHeroSection,
  LiveStockHeroSectionHeader,
  LiveStockTextContainer,
  LiveStockQuote,
  LiveStockIntroductionContainer,
  LiveStockImgContainer,
  LiveStockImg,
  LiveStockIntroContent,
  OurCompnyText,
  LiveStockIntroText,
  LiveStockEachPoint,
  SpanEl,
  LiveStockPointsContainer,
} from './styledComponents'

const LiveStockContentContainer = props => {
  const {menuStatus, onClickMenu} = props

  const onClickNavItem = () => {
    onClickMenu()
  }

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
            <LiveStockHeroSection>
              <LiveStockHeroSectionHeader>
                What We Do
              </LiveStockHeroSectionHeader>
            </LiveStockHeroSection>
            <LiveStockTextContainer>
              <LiveStockQuote theme={isLightTheme}>
                &#34;Empathy in farming grows more than livestock — it
                cultivates hope, trust, and community.&#34;
              </LiveStockQuote>
              <LiveStockIntroductionContainer>
                <LiveStockImgContainer>
                  <LiveStockImg
                    src="https://res.cloudinary.com/dikncs8sp/image/upload/v1744109553/pexels-katlovessteve-568020_crdqju.jpg"
                    alt="LiveStock Image"
                  />
                </LiveStockImgContainer>
                <LiveStockIntroContent>
                  <OurCompnyText>OUR COMPANY</OurCompnyText>
                  <LiveStockQuote
                    theme={isLightTheme}
                    style={{textAlign: 'start', fontFamily: 'Roboto'}}
                  >
                    Empowering Agri-Livestock & Animal Husbandry through
                    Sathvick Sheep & Goat Farms.
                  </LiveStockQuote>
                  <LiveStockIntroText>
                    Animal husbandry is the branch of agriculture concerned with
                    the breeding, care, and management of livestock animals for
                    various purposes, including food production, fiber, labor,
                    and companionship. It encompasses a wide range of practices
                    aimed at ensuring the health, welfare, and productivity of
                    domesticated animals. Here&apos;s an overview of key aspects
                    of animal husbandry:
                  </LiveStockIntroText>
                </LiveStockIntroContent>
              </LiveStockIntroductionContainer>
              <LiveStockPointsContainer>
                <LiveStockEachPoint>
                  <SpanEl theme={isLightTheme}>
                    1. *Breeding and Genetics*
                  </SpanEl>
                  : Selective breeding is used to improve desirable traits in
                  animals, such as meat quality, milk yield, wool production, or
                  resistance to diseases. Genetic selection, artificial
                  insemination, and sometimes assisted reproductive technologies
                  are employed to achieve breeding goals.
                </LiveStockEachPoint>
                <LiveStockEachPoint>
                  <SpanEl theme={isLightTheme}>
                    2. *Housing and Facilities*
                  </SpanEl>
                  : Proper housing and facilities are essential for providing
                  animals with shelter, protection from harsh weather
                  conditions, and a comfortable environment. Housing systems
                  vary depending on the species and production goals, ranging
                  from barns and shelters to open pasture systems.
                </LiveStockEachPoint>
                <LiveStockEachPoint>
                  <SpanEl theme={isLightTheme}>
                    3. *Feeding and Nutrition*
                  </SpanEl>
                  : Animals require a balanced diet to support growth,
                  reproduction, and overall health. Nutritional requirements
                  vary depending on factors such as species, age, breed,
                  physiological status, and production goals. Feed management
                  involves providing access to quality forage, grains,
                  supplements, and clean water.
                </LiveStockEachPoint>
                <LiveStockEachPoint>
                  <SpanEl theme={isLightTheme}>
                    4. *Healthcare and Disease Management*
                  </SpanEl>
                  : Preventive healthcare measures, such as vaccinations,
                  deworming, and parasite control, are essential for maintaining
                  animal health and preventing disease outbreaks. Regular health
                  monitoring, prompt diagnosis, and appropriate treatment of
                  illnesses or injuries are also critical aspects of animal
                  care.
                </LiveStockEachPoint>
                <LiveStockEachPoint>
                  <SpanEl theme={isLightTheme}>
                    5. *Environmental Considerations*
                  </SpanEl>
                  : Sustainable animal husbandry practices aim to minimize
                  environmental impact, promote resource efficiency, and enhance
                  animal welfare. This may involve implementing measures such as
                  waste management, pasture rotation, water conservation, and
                  biodiversity conservation.
                </LiveStockEachPoint>
                <LiveStockEachPoint>
                  <SpanEl theme={isLightTheme}>
                    6. *Economic and Business Management*
                  </SpanEl>
                  : Animal husbandry enterprises require careful financial
                  planning, budgeting, and management to ensure profitability
                  and long-term sustainability. Considerations include
                  production costs, market demand, pricing strategies, and risk
                  management.
                </LiveStockEachPoint>
                <LiveStockEachPoint>
                  Overall, animal husbandry plays a crucial role in global food
                  security, rural livelihoods, and the sustainable use of
                  natural resources. Effective management practices, coupled
                  with advances in technology and research, continue to drive
                  innovation and improvements in the field of animal
                  agriculture.
                </LiveStockEachPoint>
              </LiveStockPointsContainer>
              <LiveStockQuote theme={isLightTheme}>
                &#34;Nurture your herd, cultivate your future—watch your animal
                husbandry dreams take root and rise.&#34;
              </LiveStockQuote>
            </LiveStockTextContainer>
            <Footer />
          </HomeBottomBgContainer>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default LiveStockContentContainer
