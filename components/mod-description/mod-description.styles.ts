import ReactMarkdown from 'react-markdown';
import styled from 'styled-components';

import { borderRadius, colors, spacing } from '../../styles/variables';
import { PageSectionTitle } from '../page-section/page-section-title';

export const Wrapper = styled.div`
  flex: 1;
`;

export const Markdown = styled(ReactMarkdown)`
  font-size: 1rem;
  border-radius: ${borderRadius};

  pre {
    padding: ${spacing.medium};
    overflow: auto;
  }

  pre,
  code {
    background: ${colors.dark};
    border-radius: ${borderRadius};
    padding: ${spacing.small};
    white-space: pre-wrap;
    word-break: break-all;
  }

  table {
    border-collapse: collapse;
    width: 100%;
  }

  table,
  th,
  td {
    border: 1px solid ${colors.light};
  }

  td {
    padding: ${spacing.medium};
  }

  img {
    max-width: 100%;
    object-fit: scale-down;
  }
`;
