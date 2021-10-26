import { connect, styled } from "frontity";
import {
  BaseToggle,
  ToggleWrapper,
} from "./navigation/nav-toggle";

const CartButton = ({ state, actions }) => {
  // Get the state of the search modal

  return (
    <HeaderToggle>
      <ToggleWrapper>
        <BaseToggle>
            <button class="snipcart-checkout">🛒</button>
        </BaseToggle>
      </ToggleWrapper>
    </HeaderToggle>
  );
};

export default connect(CartButton);

const HeaderToggle = styled.div`
  display: none;

  @media (min-width: 1000px) {
    display: flex;
    flex-shrink: 0;
    margin-right: -3rem;
    margin-left: 3rem;
  }

  @media (min-width: 1220px) {
    margin-right: -4rem;
    margin-left: 4rem;
  }
`;
