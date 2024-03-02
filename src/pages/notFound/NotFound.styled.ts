import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const NotFoundContainer = styled.div`
  text-align: center;
  margin-top: 50px;
`;

export const NotFoundTitle = styled.h1`
  font-size: 2rem;
  color: #777
`;

export const NotFoundText = styled.p`
  font-size: 1rem;
  color: #777;
  margin-bottom: 15px;
`;

export const NotFoundLink = styled(Link)`
  color: #007bff;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;