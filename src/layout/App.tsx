import { useCallback, useRef, useState } from "react";
import { useStyles } from "./App.styles";
import { ReactComponent as ProfileImg } from "assets/helmet.svg";
import useInfinityScroll from "hooks/useInfinityScroll";
import { Color } from "db/index.types";

function App() {
  const classes = useStyles();

  const [page, setPage] = useState(1);

  const [active, setActive] = useState(-1);

  const recordsPerPage = 5;

  const { data, isLoading, hasMore } = useInfinityScroll(page, recordsPerPage);

  const observer = useRef<any>(null);

  const lastElementRef = useCallback(
    (node: any) => {
      if (isLoading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPage((prev) => prev + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [isLoading, hasMore]
  );

  const setColor = (color: string) => {
    if (color === "GREEN") return "green";
    if (color === "RED") return "red";
    if (color === "BLUE") return "blue";
    return "#fff";
  };

  const convertTime = (time: number) => {
    const hours = Math.floor(time / (1000 * 60 * 60));
    const minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((time % (1000 * 60)) / 1000);

    const formattedTime =
      (hours < 10 ? "0" : "") +
      hours +
      ":" +
      (minutes < 10 ? "0" : "") +
      minutes +
      ":" +
      (seconds < 10 ? "0" : "") +
      seconds;

    return formattedTime;
  };

  return (
    <div className={classes.wrapper}>
      <div className={classes.table}>
        {data.map((item, index) => (
          <div
            ref={lastElementRef}
            key={index}
            className={classes.tRow}
            onClick={() => setActive(index)}
          >
            <div className={active === index ? classes.timeColor : ""}>
              <b>{index + 1}</b>
            </div>
            <div>
              <ProfileImg
                className={`${active === index ? classes.imgBorder : ""} ${
                  classes.img
                }`}
                fill={setColor(Color[item.color])}
              />
            </div>
            <div className={classes.recordData}>
              <div className={classes.name}>
                <b>{item.name}</b>
              </div>

              <div className={classes.timeColor}>
                {convertTime(item.time)}
                <span className={classes.speedColor}>| {item.speed} км/ч</span>
              </div>

              <div
                className={
                  active === index ? classes.goldColor : classes.fineTimeColor
                }
              >
                Штрафное время {convertTime(item.time)}
              </div>
            </div>
          </div>
        ))}
        {isLoading && <div className={classes.loader}></div>}
      </div>
    </div>
  );
}

export default App;
