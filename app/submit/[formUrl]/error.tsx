"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import { Button } from "react-day-picker";

const ErrorPage = ({ error }: { error: Error }) => {
  useEffect(() => {
    console.error(error);
  }, [error]);
  return (
    <div className="flex w-full h-full flex-col items-center justify-center">
      <h2 className="text-destructive text-4xl">Something went wrong!</h2>
      <Button >
        <Link href={"/"}> Go Back to home </Link>
      </Button>
    </div>
  );
};

export default ErrorPage;
