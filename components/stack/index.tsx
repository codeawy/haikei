import BlobStack from "./BlobStack";

const StacksWrapper = ({ canvasDrawerRef }: { canvasDrawerRef: any }) => {
  return (
    <div className="bg-darkGray">
      <BlobStack canvasDrawerRef={canvasDrawerRef} />
    </div>
  );
};

export default StacksWrapper;
