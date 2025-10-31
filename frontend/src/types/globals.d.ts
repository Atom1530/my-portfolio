declare module "*.module.css" {
  const classes: Record<string, string>;
  export default classes;
}

/* для side-effect импортов Swiper CSS */
declare module "swiper/css";
declare module "swiper/css/*";
