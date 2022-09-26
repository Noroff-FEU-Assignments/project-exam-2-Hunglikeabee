import { useState, useEffect } from "react"
import axios from "axios"
import { StyledContainer, StyledActivitiesContainer, StyledActivityContainer, StyledTitle, StyledImage, StyledDescription, StyledButton } from "./StyledActivities";
import SubheadingStyle from './../general/SubheadingStyle';
import LoadingWheel from './../general/LoadingWheel';
import DisplayMessage from "../general/DisplayMessage";
const cheerio = require("cheerio");

export default function Activities() {
  const [bergenActivities, setActivities] = useState(null)
  const [error, setError] = useState(null)
    useEffect(() => {
      setError(null)
      const getActivities = async () => {
        try {
          const response = await axios.get("https://noroffcors.herokuapp.com/https://www.visitbergen.com/ting-a-gjore/aktiviteter")
          const html = response.data
          const $ = cheerio.load(html)
          const activities = []
          $(".Highlight", html).each(function() {
            const title = $(this).find(".Name").find("a").text()
            const text = $(this).find(".Desc").text()
            const url = $(this).find("a").attr("href")
            const img = $(this).find("img").attr("src")
            const fullUrl = "https://www.visitbergen.com/" + url
            const fullImage = "https://www.visitbergen.com/" + img
            activities.push({title,text,fullUrl,fullImage})

          })
          setActivities(activities)
        }
        catch(e) {
          console.log(e)
          setError(e.response.data)
        }
      }
      getActivities();
    }, [])

  return (
    <StyledContainer>
    <SubheadingStyle>DISCOVER BERGEN</SubheadingStyle>
    {error && <DisplayMessage>There seems to be an error retrieving activities: {error}</DisplayMessage>}
      <StyledActivitiesContainer>
      {bergenActivities ? bergenActivities.map((activity, key) => {
        return <StyledActivityContainer key={key} href={activity.fullUrl}>
                  <StyledImage style={{backgroundImage: `url(${activity.fullImage})`}} />
                  <StyledTitle>{activity.title}</StyledTitle>
                  <StyledDescription>{activity.text}</StyledDescription>
                  <StyledButton>Les mer</StyledButton>
               </StyledActivityContainer>

     }) : <LoadingWheel />}
    </StyledActivitiesContainer>
    </StyledContainer>

  )
}