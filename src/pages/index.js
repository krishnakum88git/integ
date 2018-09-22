import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Magnet from "../components/Magnet";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { debounce } from "lodash";
import Img from "gatsby-image";
import styled from "styled-components";
import { font } from "../styles/typography";

const Magnets = styled.section`
  display: flex;
  justify-content: center;
`;

const GreyBar = styled.div`
  background-color: #d1d8df;
  height: 256px;
  width: 100%;
  position: absolute;
  bottom: 0;
  z-index: -1;
`;

const MiddleSection = styled.section`
  position: relative;
  min-height: 524px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 20px;
`;

const HeroSection = styled.section`
  position: relative;
  height: 636px;
  width: 100%;
  display: flex;
  flex-shrink: 0;
  align-items: flex-end;
  justify-content: center;
`;

const CenterCopy = styled.div`
  ${font} text-align: center;
  max-width: 856px;
  margin: 0 auto 40px;
  text-align: center;
  font-weight: normal;
`;

const CenterTitle = styled.h3`
  color: #333333;
  font-size: 45px;
  font-weight: normal;
  margin-bottom: 10px;
`;

const CenterBody = styled.p`
  color: #333333;
  font-size: 22px;
  font-weight: normal;
  margin: 0;
`;

const HeroWrapper = styled.div`
  height: 8000px;
  width: 8000px;
  border-radius: 8000px;
  overflow: hidden;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  flex-shrink: 0;
`;

const IconWrapper = styled.div`
  background-color: #ffffff;
  height: 128px;
  width: 128px;
  border-radius: 128px;
  position: absolute;
  bottom: -60px;
  left: 50%;
  margin-left: -64px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Icon = styled(FontAwesomeIcon)`
  && {
    width: 48px;
    height: 64px;
  }
`;

export default class IndexPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      browserWidth: 1600
    };
  }
  componentDidMount() {
    window.addEventListener(
      "resize",
      debounce(this.handleResize, 100, { maxWait: 250 })
    );
  }
  componentWillUnmount() {
    this.handleResize();
    window.removeEventListener("resize", this.handleResize);
  }
  handleResize = () => {
    this.setState({
      browserWidth: document.body.getBoundingClientRect().width
    });
  };
  render() {
    return (
      <Layout>
        <HeroSection>
          <HeroWrapper>
            <Img
              style={{ width: this.state.browserWidth, height: 636 }}
              fluid={this.props.data.file.childImageSharp.fluid}
            />
          </HeroWrapper>
          <IconWrapper>
            <Icon style={{ color: "red" }} icon="heart" />
          </IconWrapper>
        </HeroSection>
        <MiddleSection>
          <CenterCopy>
            <CenterTitle>Dolor Sit Amet</CenterTitle>
            <CenterBody>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              convallis cursus lectus eu iaculis. Mauris pulvinar nisi metus,
              vitae facilisis risus aliquam at.
            </CenterBody>
          </CenterCopy>
          <Magnets>
            {this.props.data.allMarkdownRemark.edges.map(({ node }) => (
              <Magnet key={node.id} {...node.frontmatter} />
            ))}
          </Magnets>
          <GreyBar />
        </MiddleSection>
      </Layout>
    );
  }
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array
    })
  })
};

export const pageQuery = graphql`
  query IndexQuery {
    file(relativePath: { regex: "/home.png/" }) {
      childImageSharp {
        fluid(maxWidth: 1440) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    allMarkdownRemark(
      filter: { frontmatter: { isHomepageMagnet: { eq: true } } }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            slug
            iconName
            indicatorColor
            banner {
              childImageSharp {
                fixed(width: 300) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }
      }
    }
  }
`;
