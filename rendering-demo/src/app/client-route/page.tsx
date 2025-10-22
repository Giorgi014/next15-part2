"use client";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useTheme } from "@/components/theme-provider";
import { clientSideFunction } from "@/utils/client-utils";
// import { serverSideFunction } from "@/utils/server-utils";

export default function ClientRoutePage() {
  // const result = serverSideFunction();
  const theme = useTheme();
  const result = clientSideFunction();
  const settings = {
    dots: true,
  };
  return (
    <>
      <h1 style={{ color: theme.colors.secondary }}>Client router page</h1>
      <p>{result}</p>
    </>
  );
}
