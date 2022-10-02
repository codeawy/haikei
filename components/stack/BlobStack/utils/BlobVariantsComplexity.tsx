import {
  Box,
  Button,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  Tooltip,
} from "@chakra-ui/react";
import ComplexityLeft from "components/svg/ComplexityLeft";
import ComplexityRight from "components/svg/ComplexityRight";
import { useState } from "react";

const BlobVariantsComplexity = () => {
  const [sliderValue, setSliderValue] = useState(50);
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <>
      <div className="flex items-center justify-between mb-8">
        <Button bg="#282828" rounded="full" size="md" p={2}>
          <ComplexityLeft />
        </Button>
        <Slider
          defaultValue={5}
          min={0}
          max={50}
          colorScheme="gray"
          onChange={v => setSliderValue(v)}
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
          width="60%"
        >
          <SliderTrack>
            <SliderFilledTrack />
          </SliderTrack>
          <Tooltip
            hasArrow
            bg="#878787"
            color="white"
            placement="top"
            isOpen={showTooltip}
            label={sliderValue}
          >
            <SliderThumb />
          </Tooltip>
        </Slider>
        <Button bg="#282828" rounded="full" size="md" p={2}>
          <ComplexityRight />
        </Button>
      </div>
    </>
  );
};

export default BlobVariantsComplexity;
