"use client";

import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
function VisistBtn({ shareUrl }: { shareUrl: string }) {
  const [mouted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mouted) {
    return null; // avoding windown not defined error
  }
  const shareLink = `${window.location.origin}/submit/${shareUrl}`;
  return (
    <Button
      className="w-[200px]"
      onClick={() => {
        window.open(shareLink, "_blank"); // blank là mở thêm 1 tab mới giữ nguyên tab cũ
      }}
    >
      Visit
    </Button>
  );
}

export default VisistBtn;
