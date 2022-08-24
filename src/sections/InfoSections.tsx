import Section from '../components/Section';
import Store1stImageS from '../statics/store-1st-small.png';
import WhatImage from '../statics/what-mathking-does.png';
import ImprovingGraphS from '../statics/improving-graph-small.png';
import styled from 'styled-components';
import Text from '../components/Text';
import mediaQuery from '../styles/mediaQuery';

const Image = styled.img`
  width: 100%;
  border-radius: 5px;
`;

const Highlight = styled.span`
  color: ${({ theme }) => theme.highlight};
`;

const VideoContainer = styled.div`
  margin: 24px -2px 0;
`;

const WhatMathKingDoesLayout = styled.span`
  ${mediaQuery.large} {
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    justify-content: center;
  }

  & > * {
    flex: 1 1 0;
  }
`;

const GraphDescription = styled.div`
  margin-top: 16px;
  color: ${({ theme }) => theme.description};
  text-align: center;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;

  div {
    font-size: 10px;
    line-height: 15px;
  }
`;

const WhatMathKingDoesHeadline = styled.h3`
  margin-bottom: 24px;

  ${mediaQuery.large} {
    span {
      font-size: 20px;
      line-height: 30px;
    }
  }
`;
const WhatMathKingDoesImage = styled.div`
  margin: 0 -40px 80px 0;

  ${mediaQuery.large} {
    margin: 0;

    img {
      width: auto;
      height: 280px;
    }
  }
`;


const InfoSections = () => {
  return (
    <>
      <Section bgColor="bg1" paddingT={60}>
        {/*TODO responsive*/}
        <Section.Title>
          {'국내 교육 1위 '}
          <span>
          {'인공지능 학습앱 '}
            <Highlight>
            수학대왕
            </Highlight>
          </span>
        </Section.Title>
        <Section.Content>
          <a href="https://platum.kr/archives/171236">
            관련 기사 보러가기
          </a>
        </Section.Content>
        <Section.Card>
          <Image alt="store-1st-app" src={Store1stImageS}/>
        </Section.Card>
      </Section>
      <Section bgColor="bg1" paddingT={60} paddingB={20}>
        <Section.Title>
          {'우리 아이 수학성적 '}
          {'왜 안오를까요?'}
        </Section.Title>
        <Section.Content>
          {'서울대 출신 대표와 연구진이 만든 '}
          {'인공지능 수학 학습앱'}
        </Section.Content>
        <VideoContainer>
          {/*<Video url="https://www.youtube-nocookie.com/embed/kb2fdVLIkSU"/>*/}
        </VideoContainer>
      </Section>
      <Section bgColor="bg2" paddingT={40} paddingB={40}>
        <WhatMathKingDoesLayout>
          <WhatMathKingDoesImage>
            <Image src={WhatImage}/>
          </WhatMathKingDoesImage>
          <div style={{ textAlign: 'center' }}>
            <WhatMathKingDoesHeadline>
              <Text type="textMB">
                시간을 어떻게 쓰는지 보다 중요한 건,<br/>
                시간을 <Highlight>어떻게</Highlight> 쓰느냐입니다.
              </Text>
            </WhatMathKingDoesHeadline>
            <Text type="textMR">
              수천만건의 데이터는 자녀분의 시간을 더욱<br/>
              효율적으로 사용할 수 있도록 만들어줍니다.
            </Text>
          </div>
        </WhatMathKingDoesLayout>
      </Section>
      <Section bgColor="bg1" paddingT={60} paddingB={40}>
        {/*TODO responsive*/}
        <Section.Title>
          {'데이터로 검증된 '}
          {'성적향상'}
        </Section.Title>
        <Section.Content>
          누적된 데이터를 통해 증명된 자녀의 성적 향상
        </Section.Content>
        <Section.Card>
          <Image src={ImprovingGraphS}/>
        </Section.Card>
        <GraphDescription>
          *6개월간의 누적 데이터를 기준으로 산출됨
          <div>
            (2021-04-01 ~ 09-30)
          </div>
        </GraphDescription>
      </Section>
    </>
  );
};

export default InfoSections;
