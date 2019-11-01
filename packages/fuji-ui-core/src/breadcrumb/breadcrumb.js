import styled from 'styled-components';
import { Box } from '../box';
import { Row } from '../flex';

const Breadcrumb = styled(Row)`
  display: flex;
  align-items: center;
`;

const BreadcrumbItem = styled(Box)`
  &:not(:first-child):before {
    content: '›';
    margin: 0 0.8rem;
    opacity: 0.6;
    font-weight: 700;
  }
`;

Breadcrumb.Item = BreadcrumbItem;

export { Breadcrumb };
