import image01 from "./images/image01.jpg";
import image01_2x from "./images/image01@2x.jpg";
import image02 from "./images/image02.jpg";
import image02_2x from "./images/image02@2x.jpg";
import image03 from "./images/image03.jpg";
import image03_2x from "./images/image03@2x.jpg";
import image04 from "./images/image04.jpg";
import image04_2x from "./images/image04@2x.jpg";
import image05 from "./images/image05.jpg";
import image05_2x from "./images/image05@2x.jpg";

export const images: string[] = [image01, image02, image03, image04, image05];
export const largeImages: string[] = [
  image01_2x,
  image02_2x,
  image03_2x,
  image04_2x,
  image05_2x,
];

type sildersContentType = {
  title: string;
  author: string;
  date: string;
};

export const sildersContent: sildersContentType[] = [
  {
    title: "Everyday Flowers",
    author: "Johanna Hobel for VOUGE",
    date: "JUN 2019",
  },
  {
    title: "The Wilder Night",
    author: "Johanna Hobel for WILD",
    date: "DEC 2019",
  },
  {
    title: "Smooth Memories",
    author: "Johanna Hobel for CHANEL",
    date: "FEB 2020",
  },
  {
    title: "The Future Uinverse",
    author: "Johanna Hobel for ON",
    date: "APR 2020",
  },
  {
    title: "SHE Was Born Urban",
    author: "Johanna Hobel for SI",
    date: "DEC 2021",
  },
];
