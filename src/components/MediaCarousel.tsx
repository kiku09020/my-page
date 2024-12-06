import { Box, IconButton, Stack } from "@mui/material";
import useEmblaCarousel from "embla-carousel-react";
import { useDotButton } from "./EmblaCarousel/EmblaCarouselDotButton";
import { NavigateBefore, NavigateNext } from "@mui/icons-material";
import ReactPlayer from "react-player";

type Props = {
  links: {
    src: string;
    alt: string;
    isVideoLink: boolean;
  }[];
  width?: number;
  height?: number;
};

export default function MediaCarousel({ links, width = 384, height = 256 }: Props) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false });
  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi);
  const isControllable = scrollSnaps.length > 1;

  const handleNext = () => emblaApi?.scrollNext();
  const handlePrev = () => emblaApi?.scrollPrev();

  return (
    <>
      <Stack
        direction="row"
        spacing={1}
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        {isControllable && (
          <IconButton onClick={handlePrev} disabled={!emblaApi?.canScrollPrev()}>
            <NavigateBefore />
          </IconButton>
        )}
        {/* 画像コンテナ */}
        <Box ref={emblaRef} sx={{ overflow: "hidden", width, height, m: "auto" }}>
          <Box sx={{ display: "flex", height: "100%" }}>
            {/* 画像一覧 */}
            {links.map((link, index) =>
              link.isVideoLink ? (
                <Box sx={{ flex: "0 0 100%" }}>
                  <ReactPlayer url={link.src} key={index} width={width} height={height} />
                </Box>
              ) : (
                <Box
                  component="img"
                  src={link.src}
                  key={index}
                  sx={{
                    flex: "0 0 100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                />
              )
            )}
          </Box>
        </Box>
        {isControllable && (
          <IconButton onClick={handleNext} disabled={!emblaApi?.canScrollNext()}>
            <NavigateNext />
          </IconButton>
        )}
      </Stack>
      {/* ドット */}
      <Box sx={{ pb: 4 }}>
        {isControllable && (
          <Stack
            direction="row"
            spacing={1}
            sx={{ display: "flex", justifyContent: "center", pt: 1 }}
          >
            {scrollSnaps.map((snap, index) => (
              <IconButton
                onClick={() => onDotButtonClick(index)}
                sx={index === selectedIndex ? { border: 1 } : { border: 1, opacity: 0.5 }}
              />
            ))}
          </Stack>
        )}
      </Box>
    </>
  );
}
