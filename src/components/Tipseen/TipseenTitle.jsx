import cx from "classnames";
import "./TipseenTitle.scss";

const BASE_CSS_CLASS = "monday-style-tipseen-title";
const TipseenTitle = ({ text, className }) => {
  return text ? <span className={cx(BASE_CSS_CLASS, className)}>{text}</span> : null;
};

export default TipseenTitle;
