interface IProps {
  width: number | string;
  height: number | string;
  background: string;
  isFilled: boolean;
  filedColor: string;
  stroke: string;
  translateX: number | string;
  translateY: number | string;
}

const BlobSVG: React.FC<IProps> = ({
  width,
  height,
  background,
  isFilled,
  filedColor,
  stroke,
  translateX,
  translateY,
}) => {
  return (
    <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
      <path fill={background} d={`M0 0H${width}V${height}H0z`} />
      <path
        fill={isFilled ? filedColor : "none"}
        stroke={!isFilled ? stroke : "none"}
        strokeWidth={7}
        d="M133.1-121c30.9 18.7 41.4 69.9 35.4 115-6 45.1-28.6 84.3-59.4 121.8-30.8 37.5-70 73.3-113.2 77.5-43.3 4.1-90.7-23.5-127.8-61-37.2-37.5-64.1-84.9-58-126.2 6.1-41.2 45.3-76.3 82.5-95.1 37.2-18.7 72.3-21.1 115.4-29.1 43.1-8.1 94.3-21.7 125.1-2.9"
        style={{
          WebkitTransition: "all 0.3s ease 0s",
          transition: "all 0.5s ease 0s",
        }}
        transform={`translate(${translateX} ${translateY})`}
      />
    </svg>
  );
};

export default BlobSVG;
