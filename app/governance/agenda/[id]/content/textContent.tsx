import {
  TextContentSubject,
  TextContentWrapper,
  TextContentBody,
} from "../styled/page.styled"

const TextContent = ({
  subject,
  content,
}: {
  subject: string
  content: string
}) => (
  <TextContentWrapper>
    <TextContentSubject>{subject}</TextContentSubject>
    <TextContentBody>{content}</TextContentBody>
  </TextContentWrapper>
)

export default TextContent
