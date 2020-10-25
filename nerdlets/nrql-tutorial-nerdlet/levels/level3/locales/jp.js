import NextSteps from '../lessons/NextSteps';
import Overview from '../lessons/Overview';
import AggregateQuery3 from '../lessons/AggregateQuery3';
import Extrapolate from '../lessons/Extrapolate';
import FacetCases from '../lessons/FacetCases';
import FilterToEventTypes from '../lessons/FilterToEventTypes';
import OverridingValues from '../lessons/OverridingValues';

const translate = {
  Introduction: {
    Title: 'はじめに',
    Contents: {
      P1: `
        レベル3へようこそ。ここまでよく付いてきてくれました！
        ご利用中の実際の状況でクエリの結果や説明の例をご覧いただくことで、
        データをパワフルに可視化する方法をより深く理解していただけるものと思います。
        （このコースのクエリを、ご利用中のアカウントの様々なイベントタイプで試していただき、
        そのパワーを実感してください！）
      `,
      P2: `
        それでは、次はより高度なコンセプトのご紹介をしましょう。
        これからご紹介する関数や機能は常に使うものではないかもしれませんが、
        使い慣れておくことをおすすめします。
        特定の課題や要件に立ち向かうために必要になるでしょう。
      `,
      P3: `
        このレベルでは、場合分けを使ったFACET、高度な集計関数、
        EXTRAPOLATEキーワードを使った値の取得、フィルタを使った集計関数、
        そして値のオーバーライドをご紹介します。
      `
    }
  },
  'Advanced aggregators': {
    Title: '高度な集計機能',
    Contents: {

    }
  },
  'Using extrapolate': {
    Title: 'extrapolateを使用する',
    Contents: {}
  },
  'Facet cases': {
    Title: 'FACET CASES',
    Contents: {}
  },
  'Filter by event type': {
    Title: 'イベントタイプでフィルタする',
    Contents: {}
  },
  'Overriding values': {
    Title: '値をオーバーライドする',
    Contents: {}
  },
  Summary: {
    Title: 'まとめ',
    Contents: {}
  }
};

export default translate;
