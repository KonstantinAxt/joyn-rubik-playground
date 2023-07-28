"use client";

import type { CSSObject } from "@emotion/react";
import type { Tokens } from "@rubik/tokens";
import { useTokens } from "@rubik/tokens";
import type { Polymorphic } from "@rubik/utils-polymorphic";
import type { ResponsiveValue } from "@rubik/utils-responsive";
import { combineResponsiveValues, getResponsiveStyles } from "@rubik/utils-responsive";
import { borderToOutline, getStyledStates } from "@rubik/utils-style";
import { CSSProperties, forwardRef } from "react";

const getButtonStyles = (
  tokens: Tokens,
  size: "sm" | "md" | "lg",
  variant: "prominent" | "ghost" | "subtle",
  state: "initial" | "pressed" | "hovered" | "focused" | "disabled",
) => {
  return borderToOutline({
    ...tokens.button.base[variant][size][state],
    ...tokens.button.label[variant][size][state],
  }) as CSSObject;
};

export type CustomButtonProps = {
  size?: ResponsiveValue<"sm" | "md" | "lg">;
  variant?: ResponsiveValue<"prominent" | "ghost" | "subtle">;
};

export const CustomButton = forwardRef(
  ({ as: Component = "button", size = "md", variant = "prominent", children, disabled, ...props }, ref) => {
    const tokens = useTokens();

    // TODO: Support react inline styles in future
    const style = getResponsiveStyles(combineResponsiveValues(size, variant), ([size, variant]) =>
      getStyledStates({
        initial: getButtonStyles(tokens, size, variant, "initial"),
        hovered: getButtonStyles(tokens, size, variant, "hovered"),
        pressed: getButtonStyles(tokens, size, variant, "pressed"),
        focused: getButtonStyles(tokens, size, variant, "focused"),
        disabled: getButtonStyles(tokens, size, variant, "disabled"),
      }),
    );

    return (
      <Component {...props} style={style as CSSProperties} ref={ref}>
        {children}
      </Component>
    );
  },
) as Polymorphic<"button", CustomButtonProps>;

CustomButton.displayName = "CustomButton";
