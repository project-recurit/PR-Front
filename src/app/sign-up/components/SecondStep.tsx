import SearchBar from "@/components/common/SearchBar";

const SecondStep = () => {
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
    </div>
  );
};

export default SecondStep;
