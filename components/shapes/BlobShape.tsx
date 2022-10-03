import BlobSVG from "components/svg/BlobSVG";

const BlobShape = () => {
  return (
    <div className="bg-[#FF0066] w-[700px] h-[450px] flex items-center justify-center">
      <BlobSVG
        width={700}
        height={450}
        background="tomato"
        isFilled={false}
        filedColor="green"
        stroke="#FF0066"
      />
    </div>
  );
};

export default BlobShape;
