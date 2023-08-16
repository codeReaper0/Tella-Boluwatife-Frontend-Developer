import React from "react";
import {Button} from "@material-tailwind/react";
import {ChevronRightIcon, ChevronLeftIcon} from "@heroicons/react/24/outline";

export default function Pagination({active, setActive, dataLength}) {
  const getItemProps = (index) => ({
    variant: active === index ? "outlined" : "text",
    className:
      active === index
        ? "text-sm text-white font-medium border-white border"
        : "text-sm text-white",
    onClick: () => setActive(index),
  });
  const pageNumber = Math.ceil(dataLength / 10);

  const next = () => {
    if (active === pageNumber) return;
    setActive(active + 1);
  };

  const prev = () => {
    if (active === 1) return;
    setActive(active - 1);
  };
  const pages = [];

  for (let i = 1; i <= pageNumber; i++) {
    pages.push(i);
  }

  return (
    <div className="flex gap-4 items-center">
      <p className="text-white text-sm">
        Showing {`${active * 10 > dataLength ? dataLength : active * 10}`} of{" "}
        {dataLength} items
      </p>
      <div className="flex items-center gap-2 py-4">
        <Button
          size="sm"
          onClick={prev}
          disabled={active === 1}
          className="text-white disabled:text-white/80"
        >
          <ChevronLeftIcon strokeWidth={2} className="h-4 w-4" />
        </Button>
        <div className="flex items-center">
          {pages.map((page) => {
            return (
              <Button
                key={page}
                ripple="dark"
                color="blue-gray"
                size="sm"
                {...getItemProps(page)}
              >
                {page}
              </Button>
            );
          })}
        </div>
        <Button
          size="sm"
          onClick={next}
          disabled={active === pageNumber}
          className="text-white disabled:text-white/80"
        >
          <ChevronRightIcon className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
