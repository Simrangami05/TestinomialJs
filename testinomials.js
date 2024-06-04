const testimonials = [
  {
    quotes:
      "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    imgUrl:
      "https://enspiremag.com/wp-content/uploads/2021/07/nelson-mandela-4.jpg",
    poetry: "Nelson Mandela",
  },
  {
    quotes:
      "The best way to find yourself is to lose yourself in the service of others.",
    imgUrl:
      "https://i.pinimg.com/736x/ff/40/8c/ff408c4f0cdebc4240b881987eff9152.jpg",
    poetry: "Mahatma Gandhi",
  },
  {
    quotes:
      "The purpose of life is not to be happy. It is to be useful, to be honourable, to be compassionate, to have it make some difference that you have lived and lived well.",
    imgUrl:
      "https://www.thoughtco.com/thmb/o9AYsTnr4bH6KBw0qe87MZ5GPqc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-5155092721-6312e54d713e4a60aa9c9c086206e386.jpg",
    poetry: "Ralph Waldo Emerson",
  },
  {
    quotes:
      "Life is a dream for the wise, a game for the fool, a comedy for the rich, a tragedy for the poor.",
    imgUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEv2hHoDKQrprsLepanpgETtweAgIci84DnRT1KMve-Q&s",
    poetry: "Sholom Aleichem",
  },
  {
    quotes:
      "What you get by achieving your goals is not as important as what you become by achieving your goals.",
    imgUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCrC68cRalbxE0cYKFu8aPekLpON-PKTZ4nGEdG6nDPA&s",
    poetry: "Zig Ziglar",
  },
  {
    quotes:
      "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.",
    imgUrl:
      "https://cdn.britannica.com/54/9454-050-D39631E8/Albert-Schweitzer-photograph-Yousuf-Karsh.jpg",
    poetry: "Albert Schweitzer",
  },
];

const images = document.querySelector("img");
const famousquotes = document.querySelector(".sayings");
const quotesPoetry = document.querySelector(".writer");

let index = 0;

changeTestimonial();

function changeTestimonial() {
  const { poetry, imgUrl, quotes } = testimonials[index];
  images.src = imgUrl;
  famousquotes.innerText = quotes;
  quotesPoetry.innerText = poetry;
  index++;
  if (index === testimonials.length) {
    index = 0;
  }
  setTimeout(() => {
    changeTestimonial();
  }, 5000);
}
