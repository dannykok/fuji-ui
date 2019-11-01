import React from 'react';
import DocPage from '../components/doc-page';
import { Typography as T, Code, CodeBlock } from '@fuji-ui/core';

const UsePropsFilterPage = props => {
  return (
    <DocPage>
      <T.H1>usePropsFilter / usePropsExclude</T.H1>
      <T.P>
        <Code>usePropsFilter</Code> and <Code>usePropsExclude</Code> can be used
        to include only, or exclude certain props from given props object.
        Useful when dealing with handler function starting with 'on' (e.g.
        onChange) to avoid propagate them to encapsulated styled-components.
      </T.P>
      {/* prettier-ignore */}
      <CodeBlock>
      {`
// filter only the onClick props      
const props = usePropsFilter(props, [onClick]);      
// filter exclude the onClick props
const props = usePropsExclude(props, [onClick]);

// filter only the component proptypes
const props = usePropsFilter(props, Button.propTypes);
`}
      </CodeBlock>
      <T.P>
        An example component to make use of <Code>usePropsExclude</Code>
      </T.P>
      {/* prettier-ignore */}
      <CodeBlock>
{`
import { usePropsExclude } from '@fuji-ui/core';

const Wrapper = styled(Box);

const Button = props => {

    // pass all props to Wrapper except onClick
    const wrapperProps = usePropsExclude(props, ['onClick']);
    
    return <Wrapper {...wrapperProps}>
        <button onClick={prop.onClick}/>
    </Wrapper>;
}

Button.propTypes = { ...Box.propTypes, onClick: PropTypes.func.isRequired };
`}
      </CodeBlock>
    </DocPage>
  );
};

export default UsePropsFilterPage;
