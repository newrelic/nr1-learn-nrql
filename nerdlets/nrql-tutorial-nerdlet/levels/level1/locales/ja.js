const translate = {
  NRQL: {
    Warn:
      'APM未インストール、またはAPMをインストールしたサービスが稼働していないため、代替のNRQLクエリの例を表示しています。そのため記述の内容と差分がある場合があります。'
  },
  'Level One': {
    Title: 'コツを掴む',
    Level: 'レベル1 : '
  },
  Welcome: {
    Title: 'ようこそ',
    Contents: {
      P1: `
        NRQLチュートリアルにようこそ! 簡単なチュートリアルを通して、皆様ご利用中のアカウントを実際に利用し、
        NRQLの使い方に慣れていきましょう。もうすでにNRQLのベテランですか？
        このチュートリアルではNRQLを利用していくためのコツや技をご紹介していますので、ぜひこの機会に振り返っていただければと
        思います。4段階のレベルを通過していくことで、NRQLのスキルを身に付けていってください。
  `,
      P2: `
        NRQL は <1>New Relic Query Language</1>の略記です。（ヌルクル、ナーコゥ、エヌアールキューエルなどと発音しています。）
        Metric、Event、Log、そしてTraceのデータがペタバイト級に保存されているNRDBから、リアルタイムにアクセス可能です。
  `,
      P3: `
        NRDBはNew Relicの誇るTelemetry Data Platformのデータベースです.
        世界で最もパワフルなマルチテナントのテレメトリデータベースです。
  `,
      H1: `このレッスンでのデータについて`,
      P4: `
        New Relic One の Telemetry Data Platformでは、素早く、簡単に多くの集合に対してクエリできます。
        しかし便宜上、このチュートリアルでは多くのお客様がご利用中のAPMトランザクションのデータを利用していきます。
        <1>１つ以上のアカウントをご利用中の場合、APMを利用できるアカウントに切り替えて進めてください。</1>
      `,
      P5: `
      このチュートリアルで学んでいく全てのクエリは皆様が管理されているデータを元にしており、そのままダッシュボード作成にも利用できます。
      実際のライブデータに基づいて学習しテストていけるということです。
      やることは一つ全ての例の近くにある"Try this query"リンクをクリックするだけです。
      それではさっそく学んでいきましょう！
      `
    }
  },
  'Your first query': {
    Title: `初めてのクエリ`,
    Contents: {
      P1: `
        まず、New Relic APMで収集される、<2>Transaction</2>イベントをみていきましょう。
        `,
      P2: `
        すべてのNRQLクエリは、<1>SELECT</1>と<3>FROM</3> を持たなければなりません。
        <6>FROM</6>でデータがどこにあるのかを指定し、データを<8>SELECT</8>します。
        `,
      P3: `
       Transactionイベントの全ての情報を取得する簡単なクエリから始めましょう。
       (SQL を知っている人なら、NRQL は身近に感じるはずです)。
       `,
      P4: `
    多くの結果が返ってきたと思います。それぞれのレコードには、タイムスタンプと<1>属性</1>
    の情報が入っています。今私たちが欲しいのは１レコードだけなので、<3>LIMIT 1</3>
    を使用して制限しましょう。
    `,
      P5: `
    <1>LIMIT</1>が指定されていない場合は、デフォルトが使用されます。
    <3>SELECT *</3> のクエリについては 100行、
    <5>FACET</5> を使ったクエリや<7>SELECT (attributes)</7> で指定した集約クエリの場合は
    集約情報10個となっています。
    この制限は、最大まで任意の数を指定することができます。最大数を返すには、<8>LIMIT MAX</8>を使用します。
    `,
      P6: `
      これで、結果の量をコントロールできるようになりました それでは、特定の属性だけみたい場合にはどうすれば良いのでしょうか。
      SQLのようにたった数文字を変更するだけで。指定した属性のみを取得できます。
      <3>*</3>を欲しい属性の名称に変更するだけです。この例ではトランザクション名と処理時間を表示しています。
  `,
      P7: `
    それでは、クエリの下にあるリンクをクリックして、チャートビルダーで自由に試してみましょう！
  `,
      H1: `本レッスンのまとめ`,
      P8: `
    素晴らしいスタートが切れました。あなたは基本的なクエリを二つ覚えました。
    一つ目に、全ての属性及び特定の属性だけをクエリできるようになりました。
    二つ目に、返される結果の行数を制御できるようになりました。順調です！
  `
    }
  },
  'Aggregating data': {
    Title: 'データの集約',
    Contents: {
      P1: `
        一つ一つのイベントの情報を見るのではなく、イベントを集約し概要を把握するのが一般的です。
        そしてこれこそがNRDBの腕の見せ所です。NRDBは、何十億ものイベントをスキャンし、
        瞬時にリアルタイムであなたのデータにアクセスできます。
        `,
      P2: `
        例えば、各<1>Transaction</1> イベントには<3>duration</3>属性があります。この属性は
        トランザクションの実行時間です。それでは、全ての<6>Transaction</6>イベントの
        <7>average</7>(平均実行時間)をみてみましょう。
        `,
      P3: `
         NRQLには、イベントデータを集約するために使用できる多くの組み込み関数があります。
         使用できる一般的な関数には、<1>max()</1>、
         <4>min()</4>、<6>median()</6>、<8>percentile()</8>があります。
      `,
      P4: `
          次の例では、過去60分間のうち一番遅かったイベントをクエリします。
      `,
      P5: `
          そのためには、<1>max(duration)</1>を使いましょう。
      `,
      P6: `
          注意: クエリのデフォルトの検索期間は、直近の 60 分です。
      `,
      P7: `
          これで、直近の60分間で最も遅かったカスタマーエクスペリエンスがどれだけの時間を要したかがわかりました。
          次に、最速のものを確認してみましょう。<1>min(duration)</1>としてください。
      `,
      P8: `
          ご覧のように、<1>max()</1>と<3>min()</3>はどちらも興味深いデータポイントでした。
          これに加え、算術を実行したい場合もあります。<5>sum()</5>は数値属性に有効で、
          合計を確認できます。
          新しい属性<1>databaseCallCount</1>を利用してみましょう。この属性は
          各トランザクションが行ったデータベースへのコール回数です。これを合計することで、
          直近60分間で発生したデータベースコール数の総和がわかります。
          (アプリがデータベースと通信しない場合、これは 0 になります)。
      `,
      P9: `
          最後に、<1>Transaction</1>に記録された全てのイベントをカウントすることもできます。
          <4>count(*)</4> を使います。
          以下のクエリは、アカウント内にある全てのNew Relic APMを導入しているサービスのイベント総和です。
      `,
      H1: `本レッスンのまとめ`,
      P10: `
          今、私たちは非常に興味深いことをしています。私たちは、
          パフォーマンスの境界、イベントデータのグループ化、さらには選択した属性に関する情報を計算しました。
          `,
      P11: `
          そして<1>duration</1>を使い、<4>average</4>、<6>max</6>、<8>min</8>を確認しました。
          最後に私たちは数値属性の総和を求める<8>sum</8>と、イベントの総数を確認する<10>count</10>を使いました。 
`,
      P12: `
          このようにデータを操作しビジュアル化することで、
          パフォーマンスの問題を発見するのに役立ちます。
          `
    }
  },
  'Time ranges': {
    Title: '時間範囲',
    Contents: {
      P1: `
          NRDB内のすべてのデータは、<1>timestamp</1>を持っています。また、すべての
          クエリは、時間範囲内のデータのサブセットに対して操作を行います。
          前回のレッスンでもありましたが、時間範囲を指定しない場合は、デフォルトの直近60分となります。
          別の時間帯のデータを見たい場合はどのようにすれば良いのでしょうか。
          `,
      P2: `
          時間帯の指定は非常に簡単に行えます。<1>SINCE</1>と<4>UNTIL</4>を使い、開始-終了を指定できます。
          `,
      P3: `
          また、<1>現在時刻</1>からの相対的な時間範囲を指定するのも簡単です。以下のようなことができます。
          <3>day</3>, <5>week</5>,<8>hour</8>, <10>minute</10>及びその複数形を使います。
          また、<12>SINCE today</12>や<15>SINCE this week</15>のような論理式も利用できます。
         `,
      P4: `
         相対的な時間範囲を示すいくつかのサンプルクエリを試してみましょう。
         また、相対的な時間を指定するときには<2>ago</2>を最後につける必要があるので、注意してください。
         `,
      H1: `本レッスンのまとめ`,
      P5: `
         お疲れ様でした。データをさらにコントロールできるようになりましたね。
         時間範囲を指定することで、見たい範囲のデータをみることができるようになりました。
    `,
      P6: `
        データの開始及び終了を指定すると、見たい範囲に焦点を絞ることができます。
        ここで利用した例では、<2>week</2>、<2>day</2>、<2>hour</2>、<2>minute</2>及びその複数形と言う
        一般的なキーワードを利用して時間範囲を指定しました。
        また、もしNew Relicにデフォルトの保存期間を超えてデータを保存しているのであれば、
        <2>month</2>や<2>year</2>も使用することができます。
    `
    }
  },
  'Time series queries': {
    Title: '時系列クエリ',
    Contents: {
      P1: `
        一般的なNRQLのユースケースは、時間の経過とともに値がどのように変化するかを問い合わせることです。
        このタイプのクエリは、折れ線グラフ、面積グラフ、などのチャートで利用します。
        `,
      P2: `
        NRDBでの "時系列"クエリは楽勝です。すでにいくつかの
        集約関数として<1>average()</1>、<4>max()</4>、<6>min()</6>、<8>sum()</8>、<8>count()</8>
        を学んでいます。
        `,
      P3: `
        集約関数を使ったクエリでは、<2>TIMESERIES</2>を追加し、時間経過に伴う値をプロットできます。
        `,
      P4: `
        時系列クエリの結果は、指定した時間帯の中でいくつかのバケットに分割されています。
        指定しない場合は NRDBが適切な分割を行いますが、自分で指定することもできます。
        それでは、アプリケーションのトランザクションの、平均応答時間を１時間単位でみてみましょう。
        `,
      P5: `
        1日あたりだとデータポイントが24個しかないので、平坦なグラフとなることに注意してください。
        では、最大どれだけ分割できるのでしょうか。時系列クエリでは、最大366個のデータバケットまでの分割です。
        つまり、24時間では最大可能なのはデータを4分単位となります。
        それを計算して、<1>TIMESERIES 4 minutes</1>、と書くか、
        もしくは再大分割となるよう<3>TIMESERIES MAX</3>と書くことができます。
        `,
      H1: `本レッスンのまとめ`,
      P6: `
        これで、折れ線グラフやエリアグラフをつかって時間経過とともにどう動いているかを
        可視化できるようになりました。
        `,
      P7: `
        <1>TIMESERIES</1>を使用し、可視化と指定した時間帯での粒度の調整をコントロール
        できるようになりました。
        `
    }
  },
  'Where clauses': {
    Title: 'WHERE句',
    Contents: {
      P1: `
        通常は、NRDBに入っているデータの一部を指定してクエリすることが多いと思います。
        例えば、バックエンドアプリケーションの平均応答時間をクエリしてみましょう。
        トランサクションは、は"Web"と"Non-Web"(cron ジョブやキュータスク)に別れており、
        <1>transactionType</1>で指定できます。
        `,
      P2: `
        クエリをフィルタして、transactionType="Web"のデータのみを返すようにしましょう。
        `,
      P3: `
        <1>AND</1>と<3>OR</3>を使うと、多くの条件を組み合わせられます。
        また、連動していないといけない条件については、"<5>(</5>"と"<5>)</5>"を使用してください。
        `,
      P4: `
        次のクエリは、「Web」トランザクションの平均応答時間を取得するクエリですが、
        応答速度が100msより速く、かつレスポンスコードが200もしくは302のもののみとなっています。
        <1>OR</1>を制御するために括弧を使用していることに注意してください。
        `,
      H1: `本レッスンのまとめ`,
      P5: `
        現状、すべてのクエリにおいて指定時間帯の中で利用可能なすべてのデータを使ってフィルタリングすることができます。
        サービス運用の上で望ましくないデータをフィルタリングするのは重要なことです。
        上記の例では、トランザクションのタイプや、レスポンスコードが特定の値である場合の物のみになるよう
        フィルタリングをしました。
        また、同じようにして特定のアプリを指定する時には<1>appName</1>を、
        トランザクションを絞る時には<3>name</3>をフィルタリングとして使えますし、
        あなたの追加したカスタム属性でのフィルタリングすることができますので、
        ぜひご活用下さい。
        `
    }
  },
  'Faceted queries': {
    Title: 'ファセットクエリ',
    Contents: {
      P1: `
        一般的に、「トップN」がどうなっているか確認したい場合がよくあります。
        これを実現するために、NRQLでは<1>FACET</1>を使用します。例えば、以下のように使います。
        次の例ではトランザクション名でグルーピングした <3>Transaction</3>のうち、
        応答速度が最も遅いものを確認できます。これを「名前でファセットする」と表現できます。
    `,
      P2: `
        デフォルトでは、ファセットクエリはトップ10の結果を返すのですが、<1>LIMIT</1>を使って返される結果の数を指定できます。
        この例では、上位5つの結果を取得します。折れ線グラフとして表示するために <3>TIMESERIES</3> を追加しました。
    `,
      P3: `
        もしかすると、折れ線グラフではなくリストで遅いトランザクションTop 20を確認したいかもしれません。
        <1>TIMESERIES</1>を削除すると、代わりに棒グラフや円グラフで確認できるようになります。
    `,
      P4: `
        次のクエリでは、個々のアプリケーションがどれだけWeb トランザクションデータをNew Relicに
        送っているのかを比較しています。
    `,
      H1: `本レッスンのまとめ`,
      P5: `
        グループ化をすること、「データの切り口を設定すること」は重要です。
        それによって、多角的にデータを分析できるようになります。
        そして<1>FACET</1>キーワードを使えば簡単にそれを実現できます。
    `,
      P6: `
        集約関数を利用する際、<1>FACET</1>を用いて属性でグループ化することができます。
        デフォルトで収集される情報、カスタム属性などイベントデータとして収集された、
        <4>全ての属性</4>をFacetで利用できます。(<7>WHERE</7>と同じように属性を利用できます。)。
        イベントにカスタム属性を追加することをお勧めします。
        結果として得られるデータセットをより簡単にスライスしたり、
        サイコロのようにデータを転がしながら多角的に分析できるようになります。
    `
    }
  },
  Summary_L1: {
    Title: 'まとめ',
    Contents: {
      P1: `以上で”レベル 1 ：コツを掴む” は終了です！`,
      P2: `
        ここまで来れば、NRQLを使用したイベントデータのクエリの基本が分かりましたね。
        NRQLを使うとダッシュボードやアラートを作成することができます。
        また、Reactでアプリを開発できれば、このNRQLLessonsのように皆様ご自身の
        アプリケーションをNew Relic Oneで動かすこともできます。
      `,
      P3: `以下の基本利用方法についてご覧いただきました`,
      P4: `
      <0><0>SELECT</0>と<2>FROM</2></0>
      <1>属性(アトリビュート)の指定</1>
      <3>集約関数の利用: <1>average()</1>, <3>max()</3>,
          <6>min()</6>, <8>sum()</8>, <10>count()</10></2>
      <4><1>SINCE</1>と<3>UNTIL</3>による時間帯の指定</4>
      <5><1>TIMESERIES</1>による時系列データの折れ線グラフへのプロット</5>
      <6><1>WHERE</1>句によるフィルタリング</6>
      <7><1>FACET</1>による属性でのグルーピング</7>
      `,
      P5: `
        皆様はこれでレベル１のNRQLをマスターしました。まだまだお見せしたいことはたくさんありますが、
        意味ある情報を可視化するためのNRQLを十分に学ぶことができました。お疲れ様でした！！
      `
    }
  }
};
export default translate;
