import React, { useEffect, useMemo } from "react";
import { useDataState, updateDataState } from "../../context/DataContext";
import { useOptionState } from "../../context/OptionContext";

function DataFilter({
  filterType,
}: {
  filterType: "gaussian" | "butterworth";
}) {
  const { state: dataState, dispatch } = useDataState();
  const { state: optionState } = useOptionState();

  const filteredData = useMemo(() => {
    if (filterType === "gaussian") {
      return filterGaussian(dataState.raw.data, optionState.gaussian.sigma);
    } else if (filterType === "butterworth") {
      return filterButterworth(
        dataState.raw.data,
        optionState.butterworth.n,
        optionState.butterworth.wn
      );
    }
    return dataState.raw.data; // No filter applied
  }, [dataState.raw.data, optionState, filterType]);

  useEffect(() => {
    const updatedFilterData =
      filterType === "gaussian"
        ? { gaussian: { ...dataState.gaussian, data: filteredData } }
        : filterType === "butterworth"
        ? { butterworth: { ...dataState.butterworth, data: filteredData } }
        : {};

    updateDataState(dispatch, updatedFilterData);
  }, [dataState.raw.data, optionState, filterType, dispatch]);

  return null;
}

function filterGaussian(raw: number[], sigma: number): number[] {
  const kernelSize = Math.ceil(3 * sigma);
  const weights = new Array(2 * kernelSize + 1);
  const divisor = 2 * sigma * sigma;

  for (let i = -kernelSize; i <= kernelSize; i++) {
    weights[i + kernelSize] = Math.exp(-(i * i) / divisor);
  }

  const filteredData = [];

  for (let i = 0; i < raw.length; i++) {
    let weightedSum = 0;
    let sumOfWeights = 0;

    for (let j = -kernelSize; j <= kernelSize; j++) {
      const dataIndex = i + j;
      if (dataIndex >= 0 && dataIndex < raw.length) {
        weightedSum += raw[dataIndex] * weights[j + kernelSize];
        sumOfWeights += weights[j + kernelSize];
      }
    }

    const filteredValue = weightedSum / sumOfWeights;
    filteredData.push(filteredValue);
  }

  return filteredData;
}

function filterButterworth(raw: number[], n: number, wn: number): number[] {
  return raw;
}

export default DataFilter;
