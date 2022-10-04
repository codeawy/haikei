import BlobSVG from "components/svg/BlobSVG";

interface IProps {
  width: number | string;
  height: number | string;
}

const BlobShape: React.FC<IProps> = ({ width, height }) => {
  return (
    <div className={`w-[${width}px] h-[${height}px] flex items-center justify-center`}>
      <BlobSVG
        width={width}
        height={height}
        background="#cfcfcf"
        isFilled
        filedColor="#6600FF"
        stroke="#0b0005"
        translateX={200}
        translateY={200}
      />
    </div>
  );
};

export default BlobShape;
