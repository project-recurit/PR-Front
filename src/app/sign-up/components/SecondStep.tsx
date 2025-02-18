import SearchBar from "@/components/common/SearchBar";
import SkillBadge from "./SkillBadge";

const SecondStep = () => {
  const test = ["Python", "Java", "C++", "C#", "JavaScript", "TypeScript"];
  return (
    <div className="mt-18">
      <p className="title-24-b mb-80">
        보유하고 있는
        <br />
        스킬을 등록해주세요.
      </p>
      <SearchBar
        label="보유하신 스킬을 등록해주세요"
        placeholder="스킬을 검색해보세요."
      />
      <div className="mt-18">
        <p className="mb-12 body-14-m">선택한 스킬</p>
        <div className="w-full flex flex-wrap gap-x-8 gap-y-8">
          {test.map((skill) => (
            <SkillBadge key={skill}>{skill}</SkillBadge>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SecondStep;
