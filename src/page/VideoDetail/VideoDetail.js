import classNames from "classnames/bind";
import images from "~/access/image";
import HomeHeader from "~/conponents/HomeHeader";
import VideoTag from "~/conponents/VideoTag";
import Search from "~/layouts/Conponent/Search/Search";
import styles from "./VideoDetail.module.scss";
import VideodetailControl from "./VideodetailControl";
const cx = classNames.bind(styles);
function VideoDetail() {
  const data = {
    description:
      "duong quang thai duong quang thai duong quang thai duong quang thai duong quang thai ",
    user: {
      nickname: "thaiq",
      avatar: images.noImg,
      tick: true,
      first_name: "duong quang",
      last_name: "thai",
    },
  };
  const link =
    "https://images2.thanhnien.vn/Uploaded/nhuvnq/2021_12_09/ta03-7305.jpg";
  return (
    <div className={cx("wrapper")}>
      <div className={cx("videopast")}>
        <div
          className={cx("background")}
          style={{ background: `url(${link}) no-repeat center /cover` }}
        ></div>
        <div className={cx("overlay")}></div>
        <VideoTag className={"detailvideo"} src={images.video}></VideoTag>
        <VideodetailControl />
      </div>
      <div className={cx("contentpast")}>
        {" "}
        <HomeHeader className={"videodetail"} data={data} />
      </div>
    </div>
  );
}
export default VideoDetail;
