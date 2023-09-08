import classNames from "classnames/bind";
import Button from "../Button";
import { Pretopicon } from "../Icon/Icon";
import styles from "./Pretop.module.scss";
const cx = classNames.bind(styles);
function Pretop() {
  return (
    <div className={cx("wrapper")}>
      <Button href={"#"} lefticon={<Pretopicon />}></Button>
    </div>
  );
}
export default Pretop;
