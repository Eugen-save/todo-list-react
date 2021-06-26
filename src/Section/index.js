import {Segment, Header, Title, SectionBody} from "./styled";

const Section = ({ title, body, extraHeaderContent }) => (
  <Segment>
    <Header>
      <Title>{title}</Title>
      <div>
        {extraHeaderContent}
      </div>
    </Header>
    <SectionBody>
      {body}
    </SectionBody>
  </Segment>
);

export default Section;