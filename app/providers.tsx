"use client";

import { NextUIProvider } from "@nextui-org/system";

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return <NextUIProvider>{children}</NextUIProvider>;
};
