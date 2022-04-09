import "./footer.styles.css";

const Footer = ({ portfolio }) => {
  return (
    <footer>
      <section class="footer__info">
        <a href={portfolio} target="_blank">
          Developed by:<span>iMadfxq</span>
        </a>
      </section>
    </footer>
  );
};
export default Footer;
