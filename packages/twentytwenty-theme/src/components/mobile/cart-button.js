import { connect, styled } from "frontity";
import {
  CartToggle,
  ToggleWrapper,
} from "../navigation/nav-toggle";

const MobileCartButton = ({ state, actions }) => {
  // Get the state of the search modal

  return (
    <ToggleWrapper>
      <ShowMobile>
        <CartToggle>
          <button class="snipcart-checkout">🛒</button>
        </CartToggle>
      </ShowMobile>
    </ToggleWrapper>
  );
};

export const ShowMobile = styled.div`
  display: inline-block;

  @media (min-width: 1000px) {
    display: none;
  }
`;
export default connect(MobileCartButton);