import React from 'react';
import { Trans } from 'react-i18next';

export default function Overview() {
  return (
    <div>
      <p>
        <Trans i18nKey={"Contents.P1"}>
        Welcome to level 4! Thanks for continuing on this journey with us. We
        have already learned so much, and witnessed the incredible power of NRQL
        together. You're already a dashboarding and alerting hero!
        </Trans>
      </p>
      <p>
        <Trans i18nKey={"Contents.P2"}>
        This next section will discuss additional aggregation techniques,
        higher-level math functions, and advanced features like Regex filtering,
        and nested aggregation. We think you'll find these features downright
        invaluable. Let's get started!
        </Trans>
      </p>
    </div>
  );
}
