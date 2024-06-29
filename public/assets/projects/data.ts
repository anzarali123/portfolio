import movieflix from "@/public/assets/projects/movieflix.png";
import shopEasy from "@/public/assets/projects/shopEasy.png";
import thunderbolt from "@/public/assets/projects/thunderbolt.png";
import cryptoverse from "@/public/assets/projects/cryptoverse.png";

const data = [
  {
    img: movieflix,
    title: "MovieFlix",
    builtWith:
      "ReactJS, NodeJS,ExpressJS, MongoDB, Redux, Material UI,JSON webtoken and TMDB API.",
    code: "https://github.com/anzarali123/Movie-App",
    live: "https://anzarali-movieflix.vercel.app/",
    description:
      "A web  application which helps people find information about any movie, webseries, celebrities, IMDB rating and user can also watch movie trailer.User can register or login, add movie to their favourite list and write a review about a movie.",
  },
  {
    img: shopEasy,
    title: "shopEasy",
    builtWith: "ReactJS, Firebase, Stripe, Redux, React Router and Sass.",
    code: "https://github.com/anzarali123/e-commerce-site",
    live: "https://shopeasy.onrender.com/",
    description:
      "An end to end e-commerce platform built for influencers to sell their merchandise online.Also created an admin dashboard to keep track of the products,orders and the earning.Integrated stripe api to process the payment.",
  },

  {
    img: thunderbolt,
    title: "Thunderbolt",
    builtWith:
      "ReactJS, NodeJS, ExpressJS, Chakra UI,Cloudinary and Socket.io.",
    code: "https://github.com/anzarali123/Thunderbolt-v2",
    live: "https://thunderbolt-frontend.onrender.com/",
    description:
      "A web application that helps people to connect and send messages to each other,also having a functionality of creating a group and send messages to multiple users.",
  },

  {
    img: cryptoverse,
    title: "Cryptoverse",
    builtWith: "ReactJS, React Router, Coingecko API and Material UI.",
    code: "https://github.com/anzarali123/Cryptoverse",
    live: "https://cryptoverse-anzarali.netlify.app/",
    description:
      "A cryptocurrency application to track the price of your favourite crypto. Coingecko API used to fetch crypto data and also integrated chartjs library to display performance of a cryptocurrency in a linear chart.",
  },
];

export default data;
