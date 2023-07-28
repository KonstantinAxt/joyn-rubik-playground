"use client";

import { TokensContext, globalDark } from "@rubik/tokens";
import { PropsWithChildren } from "react";

export default function TokensProvider({ children }: PropsWithChildren<unknown>) {
  return <TokensContext.Provider value={globalDark}>{children}</TokensContext.Provider>;
}
