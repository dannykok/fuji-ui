import React from 'react';
import DocPage from '../components/doc-page';
import { withTheme } from 'styled-components';
import { Typography as T, Row, Column } from '@fuji-ui/core';

import ColorPlate from '../components/color-plate';

const ColorsPage = props => {
  const theme = props.theme;

  const {
    primary,
    primaryLightVariant,
    primaryDarkVariant,
    secondary,
    secondaryLightVariant,
    secondaryDarkVariant,
    link,
    background,
    surface,
    input,
    error,
    errorLightVariant,
    errorDarkVariant,
    onPrimary,
    onSecondary,
    onBackground,
    onSurface,
    onInput,
    onError,
    border,
    borderLightVariant,
  } = theme.colors;

  return (
    <DocPage>
      <T.H1>Colors</T.H1>
      <T.P>
        Fuji use a color systems similar to what material design has adopted.
      </T.P>

      <Column alignItems="stretch" m="l">
        <Row minHeight={100}>
          <ColorPlate codeKey="primary" bgCode={primary} textCode={onPrimary} />
          <ColorPlate
            codeKey="primaryLightVariant"
            bgCode={primaryLightVariant}
            textCode={onPrimary}
          />
          <ColorPlate
            codeKey="primaryDarkVariant"
            bgCode={primaryDarkVariant}
            textCode={onPrimary}
          />
        </Row>
        <Row minHeight={100} mt="l">
          <ColorPlate
            codeKey="secondary"
            bgCode={secondary}
            textCode={onSecondary}
          />
          <ColorPlate
            codeKey="secondaryLightVariant"
            bgCode={secondaryLightVariant}
            textCode={onSecondary}
          />
          <ColorPlate
            codeKey="secondaryDarkVariant"
            bgCode={secondaryDarkVariant}
            textCode={onSecondary}
          />
        </Row>
        <Row minHeight={100} mt="l">
          <ColorPlate codeKey="error" bgCode={error} textCode={onError} />
          <ColorPlate
            codeKey="errorLightVariant"
            bgCode={errorLightVariant}
            textCode={onError}
          />
          <ColorPlate
            codeKey="errorDarkVariant"
            bgCode={errorDarkVariant}
            textCode={onError}
          />
        </Row>
        <Row minHeight={100} mt="l">
          <ColorPlate
            codeKey="link (on background)"
            bgCode={background}
            textCode={link}
            displayCode={link}
          />
          <ColorPlate
            codeKey="link (on surface)"
            bgCode={surface}
            textCode={link}
            displayCode={link}
          />
        </Row>
        <Row minHeight={100} mt="l">
          <ColorPlate
            codeKey="background"
            bgCode={background}
            textCode={onBackground}
          />
          <ColorPlate codeKey="surface" bgCode={surface} textCode={onSurface} />
          <ColorPlate codeKey="input" bgCode={input} textCode={onInput} />
          <ColorPlate codeKey="error" bgCode={error} textCode={onError} />
        </Row>
        <Row minHeight={100} mt="l">
          <ColorPlate
            codeKey="border"
            bgCode={background}
            textCode={border}
            displayCode={border}
          />
          <ColorPlate
            codeKey="borderLightVariant"
            bgCode="#222222"
            textCode={borderLightVariant}
            displayCode={borderLightVariant}
          />
        </Row>
      </Column>
    </DocPage>
  );
};

export default withTheme(ColorsPage);
