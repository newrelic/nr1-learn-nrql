const translate = {
  'Level Two': {
    Title: 'データをコントロールする',
    Level: 'レベル2 : '
  },
  Introduction_L2: {
    Title: 'はじめに',
    Contents: {
      P1: `
        レベル1ではクエリを構築し、結果を操作して目的のデータを取得するための基礎を学びました。
        基本的なクエリの構造、時間窓の定義、観測する特定の属性の選択方法をご理解いただけたと思います。
        また、折れ線グラフやその他のビジュアライゼーションでデータを集計して表示する方法についても学びました。 `,
      P2: `
        このセクションでは、データの集計・演算、比較などを行い、より深い分析を行うための機能を掘り下げていきます。
        返されたデータを過去の期間と比較したり、データをより特定の期間にグループ化したり、
        <1>SINCE</1>や<4>UNTIL</4>の機能を使ってより具体的にしたり、フィルタでワイルドカードを使用する方法を調べていきます。
        また、属性の名前を変更してより使いやすくする方法も学びます。
      `,
      P3: `
        それでは、始めましょう。
      `
    }
  },
  'Aggregate functions': {
    Title: '集計機能',
    Contents: {
      P1: `
        レベル1では、<4>count()</4>, <6>average()</6>, <8>sum()</8>, <11>max()</11>, <13>min()</13> を使ってデータを意味のある方法で変換するための集計について簡単に紹介しました。
        次は、さらに強力な機能を探っていきます。このレッスンでは、一意の値を見つけて数える方法、属性の最新または最古のエントリを見つける方法、パーセンテージとパーセンタイルを使用する方法を学びます。`,
      P2: `
        前回のレッスンでは、<1>count()</1> 関数が利用可能なレコードの単純な数を返す方法を学びました。
        指定した時間範囲で属性に記録された一意の値の数を決定するには、<3>uniqueCount()</3> 関数を使用します。
        この関数では、検査したい属性を引数として与えます。例えば、ここでは一意のホストをすべて表示しています。`,
      P3: `
        クエリのパフォーマンスを最適化するために、この関数は256個以上の一意の値を検査するクエリに対して近似結果を返します。
      `,
      P4: `
        指定した時間範囲で属性の一意な値の実際のリストを返すには、 <1>uniques()</1> 関数を使用します。
      `,
      P5: `
        第2の制限パラメータとして <2>uniques(attribute[,limit])</2> を指定することができます。
        これが指定されていない場合は、ファセットごとに1,000個のユニークな属性値のデフォルトの制限値が適用されます。
        最大10,000までの別の制限値を指定することができます。
        `,
      P6: `
        指定した時間範囲で属性の最新値を取得するには、 <1>latest()</1> 関数を使用します。
        このサンプル・クエリでは、最後の日のウェブ・トランザクションの最新の応答時間を取得しています。
        継続的に報告されるトランザクションなどの最新値を求める場合などに活用できます。
      `,
      P7: `
        <1>earliest()</1>関数を使用すると、その逆のことを行います。つまり、指定した時間範囲に記録された属性の最も古い値を返します。
        このサンプルクエリでは、過去1日のWebトランザクションの<3>最も古い</3>応答時間を取得しています。
        データが一貫してレポートしている場合、これは単に24時間前の最も古いイベントからのデータポイントになります。
      `,
      P8: `
        また、カウント、合計、または平均の代わりにパーセンテージが必要な場合もあります。
        <1>percentage()</1> 関数を使用すると、指定された条件に一致するデータ・セット内の値のパーセンテージを計算できます。
        この関数は2つの引数を取ります。
        1つ目は、<4>count()</4> などの希望する属性の集約関数です。
        2つ目は、クエリを実行するデータのサブセットを指定する <6>WHERE</6> 条件です。
      `,
      P9: `
        このサンプル・クエリでは、100ミリ秒を超える継続時間（または応答時間）を持つトランザクションの割合を求めることができます。
      `,
      P10: `
        アプリケーションのパフォーマンスやカスタマーエクスペリエンスのデータを、平均値ではなくパーセンタイルを使って表示することは非常に一般的です。
        <2>percentile()</2> 関数を使用すると、n番目のパーセンタイルのユーザ体験を求めることができます。
      `,
      P11: `
        例えば、98%の顧客の今日の最悪の経験(最高継続時間)を知りたいとしましょう。
        過去24時間の<2>percentile(duration, 98)</2>をNRDBに求めることができます。
      `,
      H1: `
        本レッスンのまとめ
      `,
      P12: `
        ご説明した通り、集計機能は強力な方法でデータを操作することができます。
        ここでは、特定の属性のユニークなエントリをカウントするために <1>uniqueCount()</1> を使用しました。
        これを使ってユニークなマシンやレポーティングコンテナの数を特定したり、New Relicに送信されるカスタムデータポイントの数を特定したりすることもできます。
        また、クエリで利用可能な一意の値を知りたい場合は、<4>uniques()</4>を使用していつでもリストを求めることができます。
      `,
      P13: `
        <1>latest()</1>/<3>earliest()</3>関数は、疎なデータを扱う場合や、何かがいつから報告を開始したのか、
        いつから報告を停止したのかを調べる場合に特に便利です（データはまだNew Relicに保存されていると仮定します）。
      `,
      P15: `
        また、 <1>percentage()</1> を使用することで、結果セット全体と比較して、
        どの程度の割合のイベントが修飾子にマッチしているかを調べることができることもわかりました。
      `,
      P16: `
        最後に、パーセンタイルを観測する方法を見ました。
        例えば、すべてのエンドユーザのトランザクションの90%が指定された期間よりも速くなるように目標を設定することで、
        パーセンタイル()をキーパフォーマンスの指標として使用することができます。
      `,
      P17: `
        次のレッスンでは、NRQLを使った基本的な数学演算を学ぶことにします。
      `
    }
  },
  'Math operators': {
    Title: '数学演算子',
    Contents: {
      P1: `
        NRQLは基本的な数学演算子をサポートしています。
        数値属性値とアグリゲータ関数の結果の両方に対して、加算（<1>+</1>）、減算（<3>-</3>）、乗算（<5>*</5>）、除算（<7>/</7>）を行うことができます。
      `,
      P2: `
        例えばトランザクション・イベントが記録されたとき、
        合計応答時間（<1>duration</1>）とデータベース応答時間（<3>databaseDuration</3>）の両方をキャプチャします。
        しかし、データベース処理以外に費やされた平均時間を計算したい場合はどうすればでしょうか？
        このようなユースケースを例に、データセット内の各イベントの値を計算してみましょう。
      `,
      P3: `
        上記のクエリは基本的な計算をしました。これは個々のイベントをリストアップする場合に便利です。
        さらに、データベースの処理時間以外のトランザクションの平均期間を知りたい場合は、関数内で演算子を使うことで求めることができます。
      `,
      P4: `
        より応用的な演算例として、「データベース処理時間以外の時間が全体処理時間に占める割合」なども求めることが可能です。
      `,
      H1: `
        本レッスンのまとめ  
      `,
      P5: `
        New Relicはイベントの一部としてタイミングをレポートするので、
        それを使って興味深いデータポイントを計算したり、パーセンテージの結果を生成したりすることができます。
      `,
      P6: `
        カスタムアクションやイベントのタイミングやカスタムデータの送信などを行うことで、
        基本的な数学の力を最大限に活用することができます。
        例えば、注文サイズ、注文が成功した取引、支払い方法に関するデータをレポートするEコマースプラットフォームでは、
        注文のコンバージョン率とユニークな顧客訪問数などの値を計算することができます。
      `
    }
  },
  'Labelling attributes': {
    Title: '属性をラベリングする',
    Contents: {
      P1: `
        前のセクションで学んだ算出演算子などを使って、より複雑なクエリを実行するようになると、
        クエリ結果の属性名がわかりづらくなることがあります。
        本セクションでは、前のセクションで使用したクエリを例に、理解しやすい結果を得るためのTipsを学びます。      
      `,
      P2: `
        クエリを実行する際、関数や属性の後に<1>AS</1>句を使うことで、より読みやすく、意味のある名前を結果に与えることができます。
        これにより、チャートが何を表しているのかを正確に理解しやすくなります。
      `,
      H1: `
        本レッスンのまとめ 
        `,
      P3: `
        これは些細なことに感じるかもしれませんがとても大事なことです。
        詳細なダッシュボードを構築する際には、データに明確なラベルを付けることが重要になります。
        これにより、ウィジェット、ビルボード、折れ線グラフ、または表を見る人の負担を劇的に軽減することが可能になります。
      `,
      P4: `
        次のレッスンではグループ化について学びます。より高度なシナリオで<1>AS</1>句がどのような結果を作成できるかを体感してください。
      `
    }
  },
  'Comparing time windows': {
    Title: '時間軸で比較する',
    Contents: {
      P1: `
        ここまで、<1>SINCE</1>句と<4>UNTIL</4>句を使った時間範囲の使い方を学びましたが、
        異なる時間範囲の値を比較したい場合もあります。このようなケースでは<9>COMPARE WITH</9>句を使用します。
      `,
      P2: `
        まず、<1>SINCE</1> と <3>UNTIL</3> を使用して、対象期間を定義します。
        次に、<5>COMPARE WITH [time period] AGO</5> 節を使用して、比較したい期間を指定します。
      `,
      P3: `
        例えば以下のサンプルクエリでは、<1>1 week ago</1>を用いて1週間前のデータと最終日を比較することで対前週比較チャートを作成しています。
        `,
      P4: `
        経時的な値の比較をマップするには、<1>TIMESERIES</1>を追加します。これにより、比較の折れ線グラフが作成されます。
        この期間が最近のデータとどのように比較されているかを視覚化し、時間の経過とともに追跡することができます。
      `,
      P5: `
        また、<1>UNTIL</1>と同様に、異なる相対的な期間を指定することもできます。
        例えば、4週間前であれば<4>4 WEEKS AGO</4>や6時間前であれば<6>6 HOURS AGO</6>というように
        指定することができます。
        `,
      H1: `
        本レッスンのまとめ
      `,
      P6: `
        比較することは、アプリケーションで何が起こっているかについての質問に素早く答えることができます。
        例えば、先週と比較して、売上、パフォーマンス、MTTR、エラーの値が上がったり下がったりしている状況を直感的に把握できます。
        また、問題を調査している場合、問題のあるパフォーマンスの期間と正常なパフォーマンスの期間を比較することは非常に有用です。
      `
    }
  },
  'Wildcard filters': {
    Title: 'ワイルドカードを使ってフィルタする',
    Contents: {
      P1: `
        前のレベルで、クエリの結果をフィルタリングするために<1>WHERE</1>句を使用する方法を解説しました。
        <1>WHERE</1>句では、標準的な比較演算子の他に、属性が指定された部分文字列を含むか含まないかを判断したい場合には、<3>LIKE</3>と<5>NOT LIKE</5>を使用することができます。
        これを実現するためには、文字列のどこにいてもパーセント(<7>%</7>)記号をワイルドカードとして使用する必要があります。  
      `,
      P2: `
        このサンプルクエリでは、名前のどこかに "Web "という言葉が含まれているトランザクションの数を取得しています。  
      `,
      P3: `
        これとは逆に、<3>NOT LIKE</3>を使用するようにクエリを変更すると、名前に "Web"という単語を含まないトランザクションの数が得られます。
        `,
      P4: `
        ここまでの例では、最初と最後にワイルドカード % を使用しました。
        これは、テキストのどこかに "Web" が含まれているかどうか、選択した属性の値をチェックしていることを意味します。
        同様に、<4>%Web OR Web%</4> を使用して、"Web" で終わるもの、または "Web" で始まるものにそれぞれマッチさせることができます。
      `,
      P5: `
        また、文字列の間にワイルドカードを追加して、より詳細な検索を行うこともできます。
        このクエリは、単語 "Web" の後に任意のテキストが続くトランザクション名をチェックしますが、
        単語 "index" の後に任意の数の文字が続くトランザクション名もチェックします。
        つまり、結果は、名前に "Web "と "index "を含むトランザクションのみとなります。
      `,
      P6: `
        <1>IN</1> 演算子と <4>NOT IN</4> 演算子を使用すると、属性に対してチェックしたい値のセットを指定することができます。
        <8>AND</8>または<11>OR</11>演算子で複数の<6>WHERE</6>句を指定する代わりに、カンマで区切って括弧で値をリストアップすることで、条件を単純化することができます。
      `,
      P7: `
        このサンプルクエリでは、transactionSubType属性が "SpringController "または "StrutsAction "であるトランザクションの数をカウントしています。
        代わりに<1>NOT IN</1>を使用するようにクエリを変更すると、サブタイプが "SpringController "でも "StrutsAction "でもないトランザクションの数が得られます。
        `,
      H1: `
        本レッスンのまとめ
      `,
      P8: `
        ワイルドカードを使用して検索対象のデータを柔軟にフィルタリングすることで、
        よりパワフルで意味のあるダッシュボードやアラートを構築できるようになります。
      `
    }
  },
  'Specify time ranges': {
    Title: '検索範囲（期間）を指定する',
    Contents: {
      P1: `
        <1>SINCE</1>句および<3>UNTILIL</3>句は、相対的な時間範囲だけでなく特定の日付や時間を指定することもできます。
        以下のサンプル・クエリでは、<8>YYYY-MM-DD</8>形式で<5>SINCE</5>日付を指定しています。
        指定した期間のSLAレポートなどを作成する場合に便利です。      
      `,
      P2: `
       <2>YYYY-MM-DD HH:MM</2>という形式で特定の時間を含めることもできます。
       このクエリでは、データが午後6時に設定されていることがわかります。      
      `,
      P3: `
        エンジニアであれば、イベント時刻をエポック（unixtime）で受け取ることがあるかもしれません。
        <2>SINCE</2>句や<4>UNTIL</4>句は、エポックタイムスタンプもサポートしていますので、別の日付フォーマットに変換せずに指定することができます。
        `,
      P4: `
        一定期間のデータを表示するとき、あなた自身のタイムゾーンであることを前提としています。
        しかし、国際的なチームが分散している場合は明確にタイムゾーンを指定する必要があります。
      `,
      P5: `
        このような場合は、<1>WITH TIMEZONE</1> 句を使用してデータを表示するタイムゾーンを明確に指定することができます。
        これは、<4>SINCE</4>句と<6>UNTIL</6>句の値の解釈に影響します。      
      `,
      P6: `
        以下の2つのチャートの例を考えてみましょう。それぞれのクエリは、<1>WITH TIMEZONE</1>を使用してタイムゾーンを指定しています。
        2つのタイムゾーンは8時間離れています。データのパターンは同じですが、それぞれのタイムゾーンに合わせて8時間ずれていることに注目してください。
      `,
      H1: `
        本レッスンのまとめ     
        `,
      P7: `
        本レッスンでは、相対時間軸だけでなく絶対時間軸やタイムゾーンを指定して検索対象期間を調整できることを解説しました。
        例えば、東海岸アメリカの顧客が問題を報告していて、あなたのエンジニアリングチームが西海岸アメリカにいるとします。
        彼らはダッシュボードを構築し、顧客が引用しているタイムゾーンにマップするようにビューを変換することができます。
        つまり、顧客が東海岸の午前9時に問題を報告している場合に、時差を考慮してデータを検索し直す必要がなくなります。
      `,
      P8: `
        また、エポックタイムや標準のタイムスタンプには意味があります。
        例えばインシデントの特定の日付にデータを集中させる必要がある場合、
        現在の時刻と相対的に移動する時間軸ではなくデータを調査したい場合に役立ちます。
      `
    }
  },
  'Time-based cohorting': {
    Title: '時間ベースのコホート化',
    Contents: {
      P1: `
        "時間ベースのコホート化 "とは、データを<1>分単位</1>、<3>時間単位</3>、<6>週単位</6>などの時間単位のグループに整理する方法です。      
        複雑に聞こえるかもしれませんが、ぜひ活用してみてください。
      `,
      P2: `
        期間に対して<1>SINCE</1>句を使用すると、クエリされた時間の長さ全体を取得します。
        しかし、このデータが必ずしも全てを物語っているとは限りません。
        ある期間内のパフォーマンスをより詳細に分析する必要があるかもしれません。
        時間ベースのコホートでは、データをさらに論理的な時間ベースのグループ分けに並べ替えることができます。      
      `,
      P3: `
        <1>FACET</1>と多くの時間ベースの関数（<3>hourOf(timestamp)</3>など）の組み合わせを使用することで、
        1週間分のデータを取得し、特定の時間単位（分単位、時間単位、週単位）に基づいてパフォーマンスを理解することができます。
        これにより、傾向が明らかになり、アプリケーションにとって最も重要な時間帯を特定することができます。
        `,
      P4: `
        上記のクエリは、1日分のデータを取得し、時間毎に最も遅い応答時間を見ることができます。
      `,
      P5: `
        New Relicには、時間に基づいてファセットを作成するための様々なオプションが用意されています。
        先ほどの例では時間ごとにグループ化していますが、曜日ごとにグループ化して、どの日が最もレスポンスタイムが良いか悪いかを判断することもできます。      
      `,
      P6: `
        これで、特定の日の中で最も遅い時間帯などの観点で分析できるようになりました。
        これをもとに"いつ最も製品を販売するのか？"や "いつ最もサインアップやログインが多いのか？"といったビジネス上重要な戦略を立てることができます。      
      `,
      P7: `
        また、特定の日付で結果をグループ化することもできます。
        これは、SLAレポートを検討したり、特定の期間のパフォーマンスの変化を分析する際に役立ちます。     
        `,
      H1: `
        本レッスンのまとめ
      `,
      P8: `
        時間ベースのコホート処理は、特定の分、時間、日、週に発生した問題を簡単に明らかにする方法です。
        どのようなデータをNew Relicに送信したとしても、NRQLを使えば高度にデータを整理・可視化することができ、高度な分析を行うことができます。      
      `,
      P9: `
        また、データの保存状況に応じて、週、月、年などでグループ化することも可能です。
        すべてのリストをご覧になりたい方は、ドキュメントページをご覧ください。
        <2>ドキュメントページ</2>
      `
    }
  },
  Summary_L2: {
    Title: 'まとめ',
    Contents: {
      P1: `
        おめでとうございます。レベル2「Controlling Your Data」が完了しました。      
      `,
      P2: `
        ここで得た知識を使って、ダッシュボードのビジュアライゼーションを作成したり、
        データをコントロールして、最も興味のある側面を切り出すことができるようになりました。
        これらのテクニックは、より詳細で特定のアラートのためにフォーカスを絞るのにも非常に役立ちます。      
      `,
      P3: `
        このレベルでは以下のことを学びました。
        `,
      P4: `
        <1>uniques(attributeName)</1> を使用して一意の値をクエリする方法
      `,
      P5: `
        <2>uniqueCount(attributeName)</2> を使用して、属性内に存在する一意の値の数を決定する方法
      `,
      P6: `
        特定の時間枠内で最も古い<1>earliest(attributeName)</1>と最も新しい<4>latest(attributeName)</4>を取得する方法      
      `,
      P7: `
        <1>percentile()</1> を使用して、修飾子やその他のデータポイントに基づいてパーセンテージを計算する方法    
      `,
      P8: `
        属性と集約関数、またはその両方を組み合わせた基本的な数学を実行する方法     
        `,
      P9: `
        属性名をラベリングし、より読みやすいものにキャストする方法
      `,
      P10: `
        ワイルドカードを使ったり、<1>LIKE</1>/<3>NOT LIKE</3>を使ってリストで指定した文言を含む/含まないを検索したり、結果を限定したりする方法
      `,
      P11: `
        日付、エポック、および<2>WITH TIMEZONE</2>を使用して、より高度なタイムウィンドウ内でクエリを実行する方法
      `,
      P12: `
        時間ベースのコホート化を使用して、データを興味深い時間帯にグループ化する方法      
      `,
      P13: `
        ここまで学んだことだけでも、十分に重要なダッシュボードやアラートを作成できるはずです。
        `,
      P14: `
        レベル3では、
        フィルタ、ファセットケース、ヒストグラム、apdex、eventTypesへのフィルタリング、値のオーバーライド、外挿など、
        より興味深いNRQLスキルを学びます。
      `
    }
  }
};
export default translate;
