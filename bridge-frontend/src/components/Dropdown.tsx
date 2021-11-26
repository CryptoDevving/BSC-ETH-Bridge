import React from "react";
import styles from "../styles/components/Dropdown.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { binance, ethereum } from "../assets";

interface SwapContainerProps {
  img: string;
  open: boolean;
  value: "ETH" | "BSC";
  side: "left" | "right";
  valueChanger: (value: "ETH" | "BSC", side: "left" | "right") => void;
  toggleDropdown: (side: "left" | "right") => void;
}

const SwapContainer: React.FC<SwapContainerProps> = (props) => {
  return (
    <div className={styles.SwapContainer}>
      <section
        className={styles.View}
        onClick={() => props.toggleDropdown(props.side)}
        style={{
          borderBottom: !props.open ? "3px solid #fff" : "",
        }}
      >
        <div>
          <img
            src={props.img}
            alt={props.value}
            style={{
              height: `${props.value === "BSC" && "35px"}`,
              padding: `${props.value === "BSC" && "-1rem 4px"}`,
            }}
          />
          <p>{props.value}</p>
        </div>
        <FontAwesomeIcon
          icon={faArrowDown}
          style={{
            color: "#fff",
          }}
        />
      </section>
      {props.open && (
        <section
          className={styles.Dropdown}
          onClick={() =>
            props.valueChanger(
              props.value === "BSC" ? "ETH" : "BSC",
              props.side
            )
          }
        >
          <hr />
          <div>
            <img
              src={props.value === "BSC" ? ethereum : binance}
              alt={props.value}
              style={{
                height: `${props.value === "BSC" && "25px"}`,
                padding: `${props.value === "BSC" && "0.1rem 2.8px"}`,
              }}
            />
            <p>{props.value === "BSC" ? "ETH" : "BSC"}</p>
          </div>
        </section>
      )}
    </div>
  );
};

export default SwapContainer;
