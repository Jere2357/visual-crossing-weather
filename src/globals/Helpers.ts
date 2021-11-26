import React from "react";

export const capitalize = (value: any) => {
  if (value) {
    const splitValue = value.toLowerCase().split(" ");

    for (let str = 0; str < splitValue.length; str++) {
      splitValue[str] =
        splitValue[str].charAt(0).toUpperCase() + splitValue[str].substring(1);
    }

    return splitValue.join(" ");
  } else {
    return "";
  }
};
