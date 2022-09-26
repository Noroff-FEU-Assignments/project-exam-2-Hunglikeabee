import styled from "styled-components"
import { useState, useEffect } from "react"
import axios from "axios"
import SubheadingStyle from "../general/SubheadingStyle";

const cheerio = require("cheerio");


const StyledActivitiesContainer = styled.div`
`

export default function Activities() {

  const [bergenActivities, setActivities] = useState([])

    useEffect(() => {
      const getActivities = async () => {
        try {
          const response = await axios.get("https://noroffcors.herokuapp.com/https://www.visitbergen.com/ting-a-gjore/aktiviteter")
          const html = response.data
          const $ = cheerio.load(html)
          const activities = []
          $(".Highlight", html).each(function() {
            const title = $(this).find(".Name").find("a").text()
            const text = $(this).find(".details").find("p").text()
            const url = $(this).find("a").attr("href")
            const img = $(this).find("img").attr("src")
            const fullImage = "https://www.visitbergen.com/" + img
            activities.push({title,text,url,fullImage})

          })
          console.log(activities)
          setActivities(activities)

        }
        catch(e) {
          console.log(e)
        }
      }
      getActivities();
    }, [])


  return (
    <StyledActivitiesContainer>
     {bergenActivities && bergenActivities.map(item => {
        <SubheadingStyle>{item.title}</SubheadingStyle>
     })}
    </StyledActivitiesContainer>
  )

}