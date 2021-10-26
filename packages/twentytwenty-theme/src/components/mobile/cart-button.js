import { connect } from "frontity";
import {
  CartToggle,
  ToggleWrapper,
} from "../navigation/nav-toggle";

const MobileCartButton = ({ state, actions }) => {
  // Get the state of the search modal

  return (
    <ToggleWrapper>
      <CartToggle>
        <button class="snipcart-checkout">🛒</button>
      </CartToggle>
    </ToggleWrapper>
  );
};

export default connect(MobileCartButton);