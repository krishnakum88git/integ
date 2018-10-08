import React, { Component } from "react";
import { graphql } from "gatsby";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Layout from "../components/Layout";
import { HTMLContent } from "../components/Content";
import { font } from "../styles/typography";
import { visuallyHidden } from "../styles/a11y";
import Button from "../components/Button";
import Lists from "../components/Lists";

const Icon = styled(FontAwesomeIcon)`
  && {
    color: #d1d8df;
    height: 24px;
    width: 24px;
    margin: 0 16px 0 24px;
  }
`;

const SuccessIcon = styled(FontAwesomeIcon)`
  && {
    color: #20be6b;
    height: 64px;
    width: 64px;
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

const ContactSuccess = styled.div`
  margin-top: 63px;
  height: 442px;
  width: 600px;
  background-color: rgba(209, 216, 223, 0.1);
  border: 2px solid #d1d8df;
  border-radius: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  h4 {
    font-weight: normal;
    font-size: 32px;
    margin: 40px 0 20px;
  }

  p {
    text-align: center;
    font-size: 16px;
  }
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
  renderSuccess = _ => (
    <ContactSuccess>
      <SuccessIcon icon="check-circle" />
      <h4>Request Submitted</h4>
      <p>
        Thank you for submitting a request for more information.
        <br />
        An associate will contact you at the phone number or email provided.
      </p>
    </ContactSuccess>
  );
  renderForm = _ => (
    <ContactForm
      action="/contact-us?success=true"
      name="contact"
      data-netlify="true"
      method="POST"
    >
      <input type="hidden" name="form-name" value="contact" />
      <h3>Request Additional Information</h3>
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
  );
  render() {
    const isSuccess =
      typeof window !== "undefined" &&
      window.location.search.indexOf("success") !== -1;
    return (
      <section id="content">
        <ContactColumns>
          {isSuccess ? this.renderSuccess() : this.renderForm()}
          <Lists items={this.props.contactLists} />
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
      title={post.frontmatter.title}
      hero={hero}
      introduction={post.frontmatter.introduction}
      magnets={magnets}
      disclaimers={post.frontmatter.disclaimers}
      navContact={data.contactInfo.edges[0].node.frontmatter}
    >
      <ContactUsTemplate
        contentComponent={HTMLContent}
        content={post.html}
        contactLists={data.contactInfo.edges[0].node.frontmatter.lists}
        {...post.frontmatter}
      />
    </Layout>
  );
};

export default ContactUs;

export const contactUsQuery = graphql`
  query ContactUs($id: String!) {
    contactInfo: allMarkdownRemark(
      filter: { fields: { slug: { eq: "/contact-info/" } } }
    ) {
      edges {
        node {
          frontmatter {
            enrollmentContactNumber
            abbreviatedHours
            enrollNowURL
            lists {
              title
              items {
                title
                icon
              }
            }
          }
        }
      }
    }

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
