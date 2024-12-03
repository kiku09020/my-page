import { Box, IconButton, Stack } from "@mui/material";
import useEmblaCarousel from "embla-carousel-react";
import { useDotButton } from "./EmblaCarousel/EmblaCarouselDotButton";
import { NavigateBefore, NavigateNext } from "@mui/icons-material";

type Props = {
  images: string[];
  width?: number;
  height?: number;
};

export default function ImageCarousel({ images, width = 384, height }: Props) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false });
  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi);

  const handleNext = () => emblaApi?.scrollNext();
  const handlePrev = () => emblaApi?.scrollPrev();

  return (
    <>
      <Stack
        direction="row"
        spacing={1}
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <IconButton onClick={handlePrev} disabled={emblaApi?.canScrollNext()}>
          <NavigateBefore />
        </IconButton>
        {/* 画像コンテナ */}
        <Box ref={emblaRef} sx={{ overflow: "hidden", width, height, m: "auto" }}>
          <Box sx={{ display: "flex" }}>
            {/* 画像一覧 */}
            {images.map((image, index) => (
              <Box
                component="img"
                src={image}
                key={index}
                sx={{
                  minWidth: 0,
                  flex: "0 0 100%",
                }}
              />
            ))}
          </Box>
        </Box>
        <IconButton onClick={handleNext} disabled={emblaApi?.canScrollPrev()}>
          <NavigateNext />
        </IconButton>
      </Stack>
      {/* ドット */}
      <Stack direction="row" spacing={1} sx={{ display: "flex", justifyContent: "center" }}>
        {scrollSnaps.map((snap, index) => (
          <IconButton
            onClick={() => onDotButtonClick(index)}
            sx={index === selectedIndex ? { border: 1 } : { border: 1, opacity: 0.5 }}
          />
        ))}
      </Stack>
    </>
  );
}
