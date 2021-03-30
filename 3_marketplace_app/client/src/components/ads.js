import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { fetchAdList } from '../store/actions'

import Flex from './common/Flex'

const Container = styled(Flex)`
  position: relative;
  z-index: 9;
  padding-top: 8rem;
  padding-left: 28%;
  flex-wrap: wrap;
`
const Navigation = styled(Link)`
  text-decoration: none;
`

const Card = styled(Flex)`
  width: 220px;
  margin-left: 0.25rem;
  margin-bottom: 0.5rem;
  flex-wrap: wrap;
`

const ImageWrapper = styled.div`
  height: 250px;
  width: 100%;
`

const BackgroundOverlay = styled(Flex)`
  position: relative;
  background-image: radial-gradient(
    50% 50%,
    rgba(55, 62, 62, 0) 50%,
    rgba(55, 62, 62, 0.01) 74%,
    rgba(55, 62, 62, 0.05) 100%
  );
  height: 100%;
  padding: 0.5rem 0;
`

const Image = styled.div`
  position: relative;
  background-image: ${(props) => `url(${props.src})`};
  background-size: cover;
  background-repeat: no-repeat;
  width: 160px;
  height: 100%;
  background-position: center center;
  border: 1px solid #b0bec5;
`

const ContentWrapper = styled(Flex)`
  background-color: #fafafa;
  margin-top: 16px;
  padding: 16px 16px 15px;
  padding-bottom: 15px !important;
  height: 80px;
  width: 100%;
  color: #0f1111;

  p {
    margin: 0;
  }

  span {
    line-height: 28px;
    color: #111;
    font-weight: 500;
    font-size: 18px;
    margin-bottom: 10px;
  }
`

const Title = styled.span``

const Ads = (props) => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchAdList(0))
  }, [dispatch])

  const adList = useSelector((state) => state.allAds) || []

  return (
    <Container justify="flex-start" alignItems="flex-start">
      {adList.map((ad) => (
        <Navigation
          to={`/details/${ad.id}`}
          data-testid={`navigateToAd-${ad.id}`}
          key={ad.id}
        >
          <Card>
            <ImageWrapper>
              <BackgroundOverlay justify="center">
                <Image src={ad.imageUrl} />
              </BackgroundOverlay>
            </ImageWrapper>
            <ContentWrapper direction="column" alignItems="flex-start">
              <Title>{ad.title}</Title>
              <p>{ad.description}</p>
            </ContentWrapper>
          </Card>
        </Navigation>
      ))}
    </Container>
  )
}

export default Ads
