import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'

import { fetchAdDetail } from '../store/actions'
import Flex from './common/Flex'
import PrimaryButton from './common/PrimaryButton'
import Dialog from './common/Dialog'

const Container = styled(Flex)`
  padding-left: 20%;
  padding-top: 6rem;
  height: 600px;
  width: 80%;
`

const ImageColumn = styled(Flex)`
  width: 55%;
  height: 100%;
  position: r;
  margin-left: 36px;
  padding: 1.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
`

const Image = styled.div`
  width: 100%;
  height: 400px;
  background-image: ${(props) => `url(${props.src})`};
  background-size: cover;
  background-repeat: no-repeat;
  margin-bottom: 2rem;
  border: 1px solid #b0bec5;
`

const DescriptionWrapper = styled(Flex)`
  color: #797979;

  span {
    font-size: 24px;
    font-weight: 700;
    color: #111;
  }
`

const PriceColumn = styled(Flex)`
  width: 30%;
  height: 100%;
  padding: 1.5rem;
  margin-left: 1rem;
`

const PriceWrapper = styled(Flex)`
  width: 100%;
  height: 160px;
  padding: 1rem;
  margin-bottom: 2rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  color: #797979;

  span {
    display: flex;
    align-items: center;
    font-size: 40px;
    font-weight: 700;
    color: #86b817;
    height: 100%;
    padding-right: 1rem;
    border-right: 1px solid #797979;
  }
  p {
    padding: 2rem;
  }
`

const Details = ({ location: { pathname } }) => {
  const [isDialogOpen, handleDialogVisibility] = useState(false)
  const adId = pathname.split('/').reverse()[0]
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchAdDetail(adId))
  }, [dispatch, adId])

  const setDialogVisibility = () => {
    handleDialogVisibility(!isDialogOpen)
  }

  const details = useSelector((state) => state.activeAdDetail)

  return (
    <Container justify="flex-start" alignItems="center">
      {isDialogOpen && (
        <Dialog
          title="Copy link from here"
          handleClick={setDialogVisibility}
          message={window.location.href}
        />
      )}
      <ImageColumn direction="column">
        <Image src={details.imageUrl}></Image>
        <DescriptionWrapper direction="column" justify="flex-start">
          <span>{details.title}</span>
          <p>{details.description}</p>
        </DescriptionWrapper>
      </ImageColumn>
      <PriceColumn alignItems="flex-start" direction="column" justify="center">
        <PrimaryButton text="Write a Message" id='message' />
        <PrimaryButton text="Add to watch list" id='watchList'/>
        <PrimaryButton
          id="shareAd"
          handleClick={setDialogVisibility}
          text="Share ad"
        />
        <PriceWrapper direction="row" alignItems="center">
          <span>$422</span>
          <p>some description text</p>
        </PriceWrapper>
      </PriceColumn>
    </Container>
  )
}

export default Details
