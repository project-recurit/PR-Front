"use client";

import { ChevronDown, ChevronUp } from "@/assets/svgs/icons";
import { PrExperience } from "@/types";
import { getFormattedDate } from "@/utils/timeCalculation";
import { useState } from "react";

interface PRPostExperienceCardProps {
  experience: PrExperience;
}

const PRPostExperienceCard = ({ experience }: PRPostExperienceCardProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCardOpen = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="rounded-xl border-[0.5px] border-black-400 bg-white px-16 py-8">
      <section
        className="header flex items-center"
        onClick={toggleCardOpen}
      >
        <h3 className="body-16-b">{experience.title}</h3>
        <span className="ml-auto">{isOpen ? <ChevronUp /> : <ChevronDown className="h-24 w-24" />}</span>
      </section>

      {isOpen && (
        <section className="content pb-8">
          <span className="caption-12-r mt-4 text-black-800">{experience.teamSize}명</span>
          <hr />

          <p className="body-14-r mt-16 text-black-1000">{experience.description}</p>

          <p className="body-14-r mt-16 text-black-1000">
            <time dateTime={experience.startDate}>{getFormattedDate(experience.startDate, "yyyy.MM")}</time>
            {" ~ "}
            <time dateTime={experience.endDate}>{getFormattedDate(experience.endDate, "yyyy.MM")}</time>
          </p>
        </section>
      )}
    </div>
  );
};

export default PRPostExperienceCard;
