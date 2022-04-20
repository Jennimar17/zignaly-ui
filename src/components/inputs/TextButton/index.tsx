// Dependencies
import * as React from "react";
import { ReactElement, useMemo } from "react";

// Styled Components
import * as styled from "./styles";

type ButtonProps = {
  caption?: String | null;
  icon?: ReactElement<any> | String | null;
  leftElement?: ReactElement<any> | String | null;
  rightElement?: ReactElement<any> | String | null;
  underline?: boolean | null;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};

function TextButton({
  caption = "Button",
  leftElement = null,
  rightElement = null,
  underline = null,
  onClick = () => {},
}: ButtonProps): ReactElement {
  /**
   * @function renderLeftElement
   * @description Render an element on the left side, if a JSX render a component, otherwise an image.
   * @type {JSX.Element}
   */
  const renderLeftElement = useMemo(
    () =>
      typeof leftElement === "function" ? (
        leftElement
      ) : (
        <styled.Icon src={leftElement} alt={caption} />
      ),
    [leftElement],
  );

  /**
   * @function renderRightElement
   * @description Render an element on the right side, if a JSX render a component, otherwise an image.
   * @type {JSX.Element}
   */
  const renderRightElement = useMemo(
    () =>
      typeof rightElement === "function" ? (
        rightElement
      ) : (
        <styled.Icon src={rightElement} alt={caption} />
      ),
    [rightElement],
  );
  return (
    <styled.Layout
      caption={caption}
      underline={underline}
      withElements={!!leftElement || !!rightElement}
      onClick={onClick}
    >
      <styled.Container>
        {leftElement && <styled.LeftElement>{renderLeftElement}</styled.LeftElement>}
        {caption}
        {rightElement && <styled.RightElement>{renderRightElement}</styled.RightElement>}
      </styled.Container>
    </styled.Layout>
  );
}

export default TextButton;