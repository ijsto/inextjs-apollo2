import Jumbo from '../components/dataDisplay/Jumbo';

import styled from 'styled-components';
import { white, primary } from '../utils/Colors';

const GradientHeading = styled.h2`
  background-image: radial-gradient(
    circle farthest-corner at 10% 20%,
    rgba(246, 133, 133, 1) 16.3%,
    rgba(172, 131, 241, 1) 90%
  );
  text-align: center;
  padding: 1em;
  a {
    color: ${white};
    &:hover {
      color: ${primary};
    }
  }
`;

export default () => (
  <>
    <Jumbo>
      <h1>20Casting</h1>
    </Jumbo>

    <div className="content">Talent listing</div>

    <style jsx>{`
      li {
        padding: 1em;
      }
    `}</style>
  </>
);
