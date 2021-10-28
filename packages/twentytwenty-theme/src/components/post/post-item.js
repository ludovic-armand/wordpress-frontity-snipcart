import { connect, styled } from "frontity";
import Link from "../link";
import FeaturedMedia from "./featured-media";

/**
 * Article Component.
 *
 * It renders the preview of a blog post. Each blog post contains:
 * - Title: clickable title of the post.
 * - FeaturedMedia: the featured image/video of the post.
 *
 * @param props.state - The Frontity state.
 * @param props.libraries - The Frontity libraries.
 * @param props.item - The post entity.
 * @param props.showExcerpt - If the post excerpt should be rendered.
 * @param props.showMedia - If the featured media should be rendered.
 *
 * @returns React element.
 */
const PostItem = ({
  state,
  libraries,
  item,
  showMedia = true,
}) => {

  const post = state.source[item.type][item.id];
  const { Component: Html2React } = libraries.html2react;
  return (
    <Post>
      <PostHeader>
        <SectionContainer>
          {/* The clickable heading for the post */}
          <PostLink link={item.link}>
            <PostItemTitle
              className="heading-size-1"
              dangerouslySetInnerHTML={{ __html: item.title.rendered }}
            />
          </PostLink>
        </SectionContainer>
      </PostHeader>

      {/*
       * If the want to show featured media in the
       * list of featured posts, we render the media.
       */}
      {state.theme.featuredMedia.showOnArchive && showMedia && (
        <FeaturedMedia id={item.featured_media} />
      )}

      {post && post.content && (
        <PostInner size="thin">
          <EntryContent>
            <article>
              <img src={post.acf.image} />
              <div> {post.acf.description} </div>
              <div>
                <strong> ${post.acf.price} </strong>
              </div>
              <button className="snipcart-add-item"
                data-item-name={post.acf.product_name}
                data-item-price={post.acf.price}
                data-item-image={post.acf.image}
                data-item-id={post.id}
                data-item-description={post.acf.description}
              >Add to cart</button>
            </article>
          </EntryContent>
        </PostInner>
      )}
    </Post>
  );
};

// Connect the Item to gain access to `state` as a prop
export default connect(PostItem);

// All styles :)

export const Post = styled.article`
  &:first-of-type {
    padding: 4rem 0 0;
  }

  @media (min-width: 700px) {
    &:first-of-type {
      padding: 8rem 0 0;
    }
  }
`;

export const PostHeader = styled.header`
  text-align: center;
`;

// Header sizes bases on style.css
const maxWidths = {
  thin: "58rem",
  small: "80rem",
  medium: "100rem",
};

/**
 * Return a CSS size depending on the value of the `size` prop received (see
 * {@link maxWidths}).
 *
 * @param props - Component props, including a `size` one.
 * @returns Size in CSS units.
 */
const getMaxWidth = (props) => maxWidths[props.size] || maxWidths["medium"];

export const SectionContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: calc(100% - 4rem);
  max-width: ${getMaxWidth};

  @media (min-width: 700px) {
    width: calc(100% - 8rem);
  }
`;

export const PostItemTitle = styled.h2`
  margin: 0;
  @media (min-width: 700px) {
    font-size: 6.4rem;
  }
`;

export const PostTitle = styled.h1`
  margin: 0;
`;

export const PostCaption = styled(SectionContainer)`
  /* .section-inner.max-percentage */
  margin-left: auto;
  margin-right: auto;
  max-width: ${getMaxWidth({ size: "small" })};
  width: 100%;

  /* .singular .intro-text */
  margin-top: 2rem;
  font-size: 2rem;
  letter-spacing: -0.0315em;
  line-height: 1.4;

  @media (min-width: 700px) {
    margin-top: 2.5rem;
    font-size: 2.6rem;
  }
  @media (min-width: 1000px) {
    font-size: 2.8rem;
  }
  @media (min-width: 1220px) {
    font-size: 3.2rem;
    letter-spacing: -0.03125em;
    line-height: 1.375;
  }
`;

const PostLink = styled(Link)`
  color: #000000;
  text-decoration: none;
  display: inline-block;
  &:hover {
    text-decoration: underline;
  }
`;

export const PostInner = styled(SectionContainer)`
  padding-top: 5rem;
  @media (min-width: 700px) {
    padding-top: 8rem;
  }
`;

export const EntryContent = styled.div`
  line-height: 1.5;
  max-width: 58rem;
  font-family: "Hoefler Text", Garamond, "Times New Roman", serif;
  letter-spacing: normal;

  @media (min-width: 700px) {
    font-size: 2.1rem;
  }

  > *:first-of-type {
    margin-top: 0;
  }

  figure {
    margin: 2em 0;
    max-width: 100%;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  cite,
  figcaption,
  table,
  address,
  .wp-caption-text,
  .wp-block-file {
    font-family: "Inter", -apple-system, BlinkMacSystemFont, "Helvetica Neue",
      Helvetica, sans-serif;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 3.5rem auto 2rem;
  }

  @media (min-width: 700px) {
    h1,
    h2,
    h3 {
      margin: 6rem auto 3rem;
    }

    h4,
    h5,
    h6 {
      margin: 4.5rem auto 2.5rem;
    }
  }
`;
