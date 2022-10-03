import {
  Box,
  Button,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  Stack,
  Tooltip,
} from "@chakra-ui/react";
import HeadingTxt from "components/Heading";
import ComplexityLeft from "components/svg/ComplexityLeft";
import ComplexityRight from "components/svg/ComplexityRight";
import { useState } from "react";

const BlobShapes = () => {
  const [sliderValue, setSliderValue] = useState(50);
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <Stack
      w="100%"
      align="stretch"
      className="flex items-center justify-between pb-5 border-b-[1px] border-b-lightGray pl-5"
    >
      <HeadingTxt txt="SHAPE" color="white" others={{ marginBottom: 4 }} />
      <HeadingTxt txt="Transform" />
      <Box className="flex items-center justify-between">
        <Button bg="#282828" rounded="full" size="md" p={2}>
          x
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
          y
        </Button>
      </Box>
      <HeadingTxt txt="Complexity" />
      <Box className="flex items-center justify-between">
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
      </Box>
      <HeadingTxt txt="Contrast" />
      <Box className="flex items-center justify-between">
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
      </Box>
      <HeadingTxt txt="Size" />
      <Box className="flex items-center justify-between">
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
      </Box>
    </Stack>
  );
};

export default BlobShapes;
