import React from 'react';
import DocPage from '../components/doc-page';
import { Typography as T, Row, Box, List } from '@fuji-ui/core';

const { Item } = List;

const TypeItem = ({ type, render }) => {
  return (
    <Item bordered>
      <Row alignItems="center" minHeight={40}>
        <Box width={100}>{type}</Box>
        <Box flex={1}>{render()}</Box>
      </Row>
    </Item>
  );
};

const headingPreviewText = 'The spectacle before us was indeed sublime.';

const TypographyPage = props => {
  return (
    <DocPage>
      <T.H1>Typography</T.H1>
      <T.P>Summary on different available text types from Fuji.</T.P>
      <T.H3>List of types</T.H3>
      <List>
        <TypeItem type="H1" render={() => <T.H1>{headingPreviewText}</T.H1>} />
        <TypeItem type="H2" render={() => <T.H2>{headingPreviewText}</T.H2>} />
        <TypeItem type="H3" render={() => <T.H3>{headingPreviewText}</T.H3>} />
        <TypeItem type="H4" render={() => <T.H4>{headingPreviewText}</T.H4>} />
        <TypeItem type="H5" render={() => <T.H5>{headingPreviewText}</T.H5>} />
        <TypeItem type="H6" render={() => <T.H6>{headingPreviewText}</T.H6>} />
        <TypeItem
          type="Subtitle1"
          render={() => <T.Subtitle1>{headingPreviewText}</T.Subtitle1>}
        />
        <TypeItem
          type="Subtitle2"
          render={() => <T.Subtitle2>{headingPreviewText}</T.Subtitle2>}
        />
        <TypeItem
          type="P"
          render={() => (
            <T.P>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </T.P>
          )}
        />
      </List>
      <Box mt="l">
        <T.H1>Mathematical Web Typography</T.H1>
        <T.Subtitle1>
          Copied from{' '}
          <a href="https://jxnblk.com/blog/mathematical-web-typography/">
            Jxnblk
          </a>
        </T.Subtitle1>
        <T.P>
          When it comes to designing for the Web I like to follow a handful of
          general principles. First, design for the medium, or as Frank Chimero
          puts it, follow “the grain of the Web”. The Web is fluid - based on
          screens and devices of varying sizes – and typography on the Web
          should reflect that. Second, design content-out, which usually means
          designing around a strong typographical base since the large majority
          of Web content and UI is text. And last, design with modular scales.
          Things built on the Web should be fluid and infinitely scalable. Using
          modular scales in a design compliments that idea and keeps things
          organized in the face of growing complexity.
        </T.P>
        <T.H2>Handling Complexity</T.H2>
        <T.P>
          Often when looking at how different sites have handled typography, I
          see similar problems arise. Instead of sticking to a limited, modular
          scale, any one site might have hundreds of font sizes declared and
          many more margin and padding declarations affecting the white space.
          Instead of conforming to a common convention that could help users
          make sense of the underlying complexity, these sites have added to the
          cognitive overhead with little to no benefit for the user. In my
          experience, a page rarely needs more than six font sizes to
          effectively convey its information hierarchy, and that’s exactly how
          many font sizes are provided with HTML headings.
        </T.P>
        <T.P>
          Instead of focusing on systems that enhance the content, design
          solutions often focus on singular context-specific problems and
          introduce magic numbers that quickly grow out of hand. These
          context-specific problems should inform the larger system, not break
          it. While these one-off cases may seem harmless in isolation, they
          often cause increasing complexity in a code base, and can lead to
          unintended side effects – increasing technical debt and slowing down
          development speed. While there may not be any one way to solve these
          problems, many sites try to address them with a style guide and
          well-defined typographic systems.
        </T.P>
      </Box>
    </DocPage>
  );
};

export default TypographyPage;
