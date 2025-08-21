const transition = { duration: 0.6, ease: "easeOut" };

const fadeRight = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition },
};

const fadeLeft = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition },
};

const fadeTop = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition },
};

const fadeBottom = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0, transition },
};

export { fadeRight, fadeLeft, fadeTop, fadeBottom };
