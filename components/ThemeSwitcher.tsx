"use client";
import { useTheme } from "next-themes"; // Dòng này import hook useTheme từ thư viện next-theme. Hook này cho phép bạn lấy và thay đổi chủ đề hiện tại của ứng dụng
import React, { useEffect, useState } from "react"; // Dòng này import thư viện React cùng với hai hooks là useEffect và useState. useEffect
import { Tabs, TabsList, TabsTrigger } from "./ui/tabs"; // Dòng này import ba component Tabs, TabsList và TabsTrigger từ module ./ui/tabs.
import { DesktopIcon, MoonIcon, SunIcon } from "@radix-ui/react-icons"; // Dòng này import ba component icon từ thư viện @radix-ui/react-icons.

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme(); // Sử dụng hook useTheme để lấy chủ đề hiện tại (theme) và một hàm để thay đổi chủ đề (setTheme).
  const [mounted, setMounted] = useState(false); //  Khởi tạo một biến trạng thái cục bộ mounted với giá trị khởi tạo là false. Biến này sẽ được sử dụng để kiểm tra xem component đã được gắn vào DOM hay chưa.

  useEffect(() => {
    setMounted(true);
  }, []); // Sử dụng hook useEffect để thay đổi giá trị của mounted thành true sau khi component được gắn vào DOM.

  if (!mounted) {
    return null; // Nếu Components Chưa được gắn vào DOM tức là mounted vẫn là false, components sẽ không render gì cả
  }

  return (
    <Tabs defaultValue={theme}>
      <TabsList className="border">
        <TabsTrigger value="light" onClick={() => setTheme("light")}>
          <SunIcon className="h-[1.2rem] w-[1.2rem]" />
        </TabsTrigger>
        <TabsTrigger value="dark" onClick={() => setTheme("dark")}>
          <MoonIcon className="h-[1.2rem] w-[1.2rem]" />
        </TabsTrigger>
        <TabsTrigger value="system" onClick={() => setTheme("system")}>
          <DesktopIcon className="h-[1.2rem] w-[1.2rem]" />
        </TabsTrigger>
      </TabsList>
    </Tabs>
  );
};

export default ThemeSwitcher;
