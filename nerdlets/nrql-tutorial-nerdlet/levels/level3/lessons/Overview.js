import React from 'react';
import {Trans} from "react-i18next";

export default function Overview() {
  return (
    <div>
      <p>
        <Trans i18nKey={"Contents.P1"}>
        Welcome to Level 3. Thanks for sticking with us! We hope seeing example
        queries and explanations in the context of your own data helps you
        better understand how to transform data into powerful visuals. (Try
        queries from this course on different event types in your own account(s)
        to really understand their power!)
        </Trans>
      </p>
      <p>
        <Trans i18nKey={"Contents.P2"}>
        We are now moving on to even more advanced concepts. You may not use
        these functions and features on every single dashboard, but they will
        certainly come in handy when tackling specific problems and
        requirements.
        </Trans>
      </p>
      <p>
        <Trans i18nKey={"Contents.P3"}>
        In this level, we will cover faceting by case, advanced aggregation
        functions, the value of the EXTRAPOLATE keyword, filtering aggregation
        functions, and how to override values.
        </Trans>
      </p>
    </div>
  );
}
