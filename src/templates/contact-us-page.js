import React, { Component } from "react";
import { graphql } from "gatsby";
import styled, { css } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Layout from "../components/Layout";
import { HTMLContent } from "../components/Content";
import { font } from "../styles/typography";
import { visuallyHidden } from "../styles/a11y";
import Button from "../components/Button";

const ColumnBody = css`
  ${font} color: #333333;
  font-size: 22px;
  font-weight: normal;
  margin: 0;
`;

const Copy = styled.p`
  ${ColumnBody};
`;
const Address = styled.address`
  ${ColumnBody} font-style: normal;
`;

const ColumnHeading = styled.h3`
  ${font} color: #333333;
  font-size: 32px;
  font-weight: normal;
  margin: 10px 0;
`;

const Icon = styled(FontAwesomeIcon)`
  && {
    color: #d1d8df;
    height: 24px;
    width: 24px;
    margin: 0 16px 0 24px;
  }
`;

const OfficeIcon = styled(FontAwesomeIcon)`
  && {
    color: #bbbbbb;
    height: 24px;
    width: 24px;
    margin: 5px 10px 0 0;
  }
`;

const Field = styled.div`
  border: 2px solid ${props => (props.isFocused ? "#45aaf2" : "#d1d8df")};
  border-radius: 32px;
  height: 64px;
  width: 100%;
  display: flex;
  overflow: hidden;
  align-items: center;
  margin-bottom: 16px;
`;

const FieldInput = styled.input`
  ${font} font-size: 16px;
  color: #34383e;
  height: 100%;
  width: 100%;
  border: none;
  box-sizing: border-box;
  outline: none;

  &::placeholder {
    color: #6e7580;
    font-size: 16px;
  }
`;

const FieldLabel = styled.label`
  ${visuallyHidden};
`;

const ContactForm = styled.form`
  h3 {
    margin-bottom: 16px;
  }
`;
const ContactColumns = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 100px;
`;

const OfficeSection = styled.div`
  margin: 0 0 0 64px;

  h3 {
    margin-bottom: 26px;
  }
`;

const OfficeRow = styled.div`
  display: flex;
  margin: 0 0 20px 13px;
`;

const fields = [
  { title: "First Name", slug: "firstName", type: "text", iconName: "user" },
  { title: "Last Name", slug: "lastName", type: "text", iconName: "user" },
  { title: "Email", slug: "email", type: "email", iconName: "envelope" },
  { title: "Phone", slug: "phone", type: "phone", iconName: "phone" }
];

class ContactUsTemplate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      focusedField: undefined
    };
  }
  handleFocus = focusedField => _ => this.setState({ focusedField });
  handleBlur = _ => this.setState({ focusedField: undefined });
  render() {
    return (
      <section>
        <ContactColumns>
          <ContactForm>
            <ColumnHeading>Request Additional Information</ColumnHeading>
            {fields.map(field => (
              <div key={field.slug}>
                <FieldLabel htmlFor={field.slug}>{field.title}</FieldLabel>
                <Field isFocused={this.state.focusedField === field.slug}>
                  <Icon icon={field.iconName} />
                  <FieldInput
                    onFocus={this.handleFocus(field.slug)}
                    onBlur={this.handleBlur}
                    type={field.type}
                    id={field.slug}
                    name={field.slug}
                    placeholder={field.title}
                  />
                </Field>
              </div>
            ))}
            <Button isPrimary={true} fullWidth={true}>
              Submit
            </Button>
          </ContactForm>
          <OfficeSection>
            <ColumnHeading>Our Offices</ColumnHeading>
            <OfficeRow>
              <OfficeIcon icon="map-marker" />
              <Address>
                1981 Marcus Avenue, Suite 100
                <br />
                Lake Success, New York 11042
              </Address>
            </OfficeRow>
            <OfficeRow>
              <OfficeIcon icon="phone" />
              <Copy>
                +1 855-800-4683
                <br />
                TTY: 711
              </Copy>
            </OfficeRow>
          </OfficeSection>
        </ContactColumns>
      </section>
    );
  }
}

const ContactUs = ({ data }) => {
  const { markdownRemark: post } = data;

  const hero = {
    title: post.frontmatter.title,
    subTitle: post.frontmatter.subTitle,
    image: post.frontmatter.banner.childImageSharp.fluid,
    iconColor: post.frontmatter.indicatorColor,
    iconName: post.frontmatter.iconName,
    isLarge: false
  };
  const magnets = (post.frontmatter.magnets || []).map(magnet => ({
    node: magnet
  }));
  return (
    <Layout
      hero={hero}
      introduction={post.frontmatter.introduction}
      magnets={magnets}
      disclaimers={post.frontmatter.disclaimers}
    >
      <ContactUsTemplate
        contentComponent={HTMLContent}
        content={post.html}
        instructionsTitle="Dolor Sit Amet"
        instructionsBody="For more information call and speak with one of our associates, or fill out the form below to have an associate contact you. There is no obligation to enroll."
        {...post.frontmatter}
      />
    </Layout>
  );
};

export default ContactUs;

export const contactUsQuery = graphql`
  query ContactUs($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        subTitle
        iconName
        indicatorColor
        disclaimers
        banner {
          childImageSharp {
            fluid(maxWidth: 1440) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        introduction {
          title
          body
          action {
            text
            icon
            url
            target
          }
        }
        magnets {
          id
          frontmatter {
            title
            iconName
            indicatorColor
            slug
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
