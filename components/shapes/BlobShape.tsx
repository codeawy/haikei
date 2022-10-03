import BlobSVG from "components/svg/BlobSVG";

interface IProps {
  width: number | string;
  height: number | string;
}

const BlobShape: React.FC<IProps> = ({ width, height }) => {
  return (
    <div className={`w-[${width}] h-[${height}] flex items-center justify-center bg-red-500`}>
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
