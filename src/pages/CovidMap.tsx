import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { ActionTypes } from "../state/action-types";
import { Nav } from "../components/headers/Nav";
import { CustomGoogleMap } from "../containers/GoogleMap";
import { ReChart } from "../containers/ReChart";

export const CovidMap = (): JSX.Element => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: ActionTypes.FETCH_COVID_DATA_BY_COUNTRY });
  }, []);

  return (
    <>
      <Nav />
      <CustomGoogleMap />
      <ReChart />
    </>
  );
};

/*
{data && data.length
          ? data.map(
              ({
                data: { color },
                _id,
                x,
                y,
              }: {
                data: { name: string; color: string };
                x: number;
                y: number;
                _id: string;
              }) => {
                return (
                  <Rectangle
                    positionX={Number(x)}
                    positionY={Number(y) - 10000}
                    width="20px"
                    height="20px"
                    bgrColor={color}
                    key={_id}
                  />
                );
              }
            )
          : ""}
          */