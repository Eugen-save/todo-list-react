import "./style.css";

const Section = ({ title, body, extraHeaderContent }) => (
  <section className="section">
    <header className="section__header">
      <h2 className="section__title">{title}</h2>
      <div className="section__container">
        {extraHeaderContent}
      </div>
    </header>
    <div className="section__body">
      {body}
    </div>
  </section>
);

export default Section;