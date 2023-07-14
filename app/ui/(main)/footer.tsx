"use client"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faGithub,
  faTwitter,
  faDiscord,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons"
import { Container, Developer, Logos, TeamName } from "./styled/footer.styled"

const icons = [
  {
    name: faGithub,
  },
  {
    name: faTwitter,
  },
  {
    name: faDiscord,
  },
  {
    name: faInstagram,
  },
  {
    name: faYoutube,
  },
]

const Footer = () => {
  return (
    <Container>
      <TeamName>
        <strong>team DDD </strong>
        <span>ⓒ Don't Defy Defi</span>
      </TeamName>
      <Developer>
        <strong>Developer</strong>
        <span>박경철</span>
        <span>장경호</span>
        <span>이정민</span>
      </Developer>
      <Logos>
        {icons.map((icon) => (
          <FontAwesomeIcon icon={icon.name} style={{ color: "#b8add2" }} />
        ))}
      </Logos>
    </Container>
  )
}

export default Footer
