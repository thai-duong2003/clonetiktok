import styles from "./VideoTag.module.scss";
import classNames from "classnames/bind";
import { useRef, useState } from "react";
const cx = classNames.bind(styles);
function VideoTag({
  className,
  src,
  mouseOverAutoPlay = false,
  mouseOutAutoPause = false,
  muted = false,
  children,
}) {
  // Lưu ý : google ko cho phép tự động phat  có âm thanh khi chua tuong tác voi document nen pjai cho muted vào
  const videref = useRef();
  const play = () => {
    videref.current.play();
  };
  const pause = () => {
    videref.current.pause();
  };
  const noactive = () => {};

  const clases = cx("wrapper", { [className]: className });
  return (
    <div
      className={clases}
      onMouseOver={mouseOverAutoPlay ? play : noactive}
      onMouseOut={mouseOutAutoPause ? pause : noactive}
    >
      <video muted={muted && true} ref={videref} src={src} loop />
      {children}
    </div>
  );
}
export default VideoTag;
