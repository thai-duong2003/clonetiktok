import classNames from "classnames/bind";
import styles from "./Volume.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeXmark } from "@fortawesome/free-solid-svg-icons";
import { Volumeicon } from "../Icon/Icon";
import { useRef, useState, useEffect } from "react";
import { Value } from "sass";

const cx = classNames.bind(styles);
//local
const savelocal = "Tiktok";

export const config = JSON.parse(localStorage.getItem(savelocal)) || {};
export const setconfig = (key, Value) => {
  config[key] = Value;
  localStorage.setItem(savelocal, JSON.stringify(config));
};
function Volume({ mutevolume = false, element }) {
  const [ismuted, setismuted] = useState(
    config.ismute === undefined ? true : config.ismute
  );
  const [ishovervolume, setishovervolume] = useState(false);

  const [valuevo, setvaluevo] = useState(config.volumValue);

  const onvolum = () => {
    config.ismute = false;
    // config.volumValue = config.volumValue === undefined ? 1 : config.volumValue;
    // setvaluevo(() => element.volume);
    setismuted(false);
  };

  const offvolum = () => {
    // element.volume = 0;
    config.ismute = false;
    setvaluevo(() => element.volume);
    setismuted(true);
  };

  let val = (valuevo / 1) * 100 + "%";
  var change = (e) => {
    var volumevalue = e.target.value;
    setconfig("volumValue", volumevalue);
    setvaluevo(() => config.volumValue);
    config.ismute=false
    // element.volume = valuevo;
  };

  return (
    <div
      className={cx("volume")}
      onMouseOver={() => setishovervolume(true)}
      onMouseOut={() => setishovervolume(false)}
    >
      {/* thanh volum value  */}
      {ishovervolume && (
        <div className={cx("changevolum")}>
          <div className={cx("ranslider")}>
            <input
              value={valuevo === undefined ? "0" : valuevo}
              type="range"
              min="0"
              max="1"
              step="0.1"
              onChange={change}
            />
            <div className={cx("around")} style={{ left: `${val}` }}></div>
            <div
              className={cx("volumeactive")}
              style={{ width: `${val}` }}
            ></div>
          </div>
        </div>
      )}

      {/* btn loa */}
      {ismuted ? (
        <button onClick={onvolum}>
          <FontAwesomeIcon icon={faVolumeXmark} />
        </button>
      ) : (
        <button onClick={offvolum}>
          <Volumeicon />
        </button>
      )}
    </div>
  );
}
export default Volume;
