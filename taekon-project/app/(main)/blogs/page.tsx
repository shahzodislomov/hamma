import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

const BlogsPage = () => {
  return (
    <div className="max-w-[1200px] mx-auto grid grid-cols-3 gap-4 items-center">
      {Array.from({ length: 9 }).map((_, index) => (
        <div key={index} className="flex pb-5 flex-col space-y-3">
          <Skeleton className="h-[125px] w-[250px] rounded-xl" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-[250px]" />
            <Skeleton className="h-4 w-[200px]" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogsPage;
