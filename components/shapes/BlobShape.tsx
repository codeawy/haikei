import BlobSVG from "components/svg/BlobSVG";

interface IProps {
  width: number;
  height: number;
}

const BlobShape: React.FC<IProps> = ({ width, height }) => {
  return (
    <div className={`w-[${width}px] h-[${height}px] flex items-center justify-center`}>
      <BlobSVG
        width={width}
        height={height}
        background="#cfcfcf"
        isFilled={false}
        filedColor="#6600FF"
        stroke="#0b0005"
      />
    </div>
  );
};

export default BlobShape;