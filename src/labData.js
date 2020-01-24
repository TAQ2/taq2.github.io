import fakeLatinNewsImg from "./assets/labs/fake-latin-news-screenshot.png";
import mappingToolImg from "./assets/labs/mapping-tool-screenshot.png";

const data = [
  {
    img: mappingToolImg,
    name: "Mapping Tool", // @Incomplete - boring name
    description:
      "Users can view different metrics wrangled from different sources using a sleek interface //@Incomplete - say more //@Incomplete - say more //@Incomplete - say more //@Incomplete - say more",

    githubLink: "https://github.com/taq2/mapping-tool",
    appLink: "https://taq2.github.io/mapping-tool"
  },
  {
    img: fakeLatinNewsImg,
    name: "Fake Latin News",
    description:
      "This simple app uses an external API to generate a fake forum where users can flick through posts and their respective comments. Users can also add comments which are handled by redux.",
    githubLink: "https://github.com/taq2/fake-latin-news",
    appLink: "https://taq2.github.io/fake-latin-news"
  },
  {
    img: fakeLatinNewsImg,
    name: "This Website!", // @Incomplete - take a pic when done
    description:
      "Using responsive design, simple animation and no templates, I display the work I have done. Not only showing my CV and portfolio but taking it a step further to display the art that I have produced.",

    githubLink: "https://github.com/TAQ2/taq2.github.io/tree/dev",
    appLink: "https://taq2.github.io/"
  }
];

export default data;
