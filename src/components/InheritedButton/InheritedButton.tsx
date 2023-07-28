"use client";

import { Button } from "@rubik/button";
import { PropsWithChildren } from "react";

type InheritedButtonProps = PropsWithChildren<unknown>;

function InheritedButton({ children }: InheritedButtonProps) {
  return (
    <Button size="md" variant="subtle">
      {children}
    </Button>
  );
}

export default InheritedButton;
