import {
  faAngleDown,
  faAngleUp,
  faEllipsis,
  faVolumeXmark,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import { TippyOptionvideo } from "~/conponents/Video";
import Search from "~/layouts/Conponent/Search/Search";
import styles from "./VideodetailControl.module.scss";
const cx = classNames.bind(styles);
function VideodetailControl() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("close", "btn")}>
        <FontAwesomeIcon icon={faXmark} />
      </div>
      <Search className={"videocontrol"} />
      <div className={cx("control")}>
        <TippyOptionvideo>
          <span className={cx("menu", "btn")}>
            <FontAwesomeIcon icon={faEllipsis} />
          </span>
        </TippyOptionvideo>
        <div className={cx("arrow")}>
          <span className={cx("arrow_up", "btn")}>
            <FontAwesomeIcon icon={faAngleUp} />
          </span>
          <span className={cx("arrow_down", "btn")}>
            <FontAwesomeIcon icon={faAngleDown} />
          </span>
        </div>
        <div className={cx("volume", "btn")}>
          <FontAwesomeIcon icon={faVolumeXmark} />
        </div>
      </div>
    </div>
  );
}

export default VideodetailControl;
