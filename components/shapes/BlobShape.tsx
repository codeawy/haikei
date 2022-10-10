import { selectShape } from "app/features/shapeSlice";
import { useAppSelector } from "app/hooks";
import BlobSVG from "components/svg/BlobSVG";

interface IProps {
  width: number | string;
  height: number | string;
}

const BlobShape: React.FC<IProps> = ({ width, height }) => {
  const { isSolid } = useAppSelector(selectShape);

  return (
    <div
      className={`w-[${width}px] h-[${height}px] max-w-full max-h-full flex items-center justify-center`}
    >
      <BlobSVG
        width={width}
        height={height}
        background="#cfcfcf"
        isFilled={isSolid}
        filedColor="#6600FF"
        stroke="#0b0005"
        translateX={+width / 2}
        translateY={+height / 2}
      />
    </div>
  );
};

export default BlobShape;
