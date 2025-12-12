"use client";
import { useState } from "react";
export default function Home() {
  const [showModal, setShowModal] = useState(false);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between pb-24 bg-white">
      <div className="relative w-full h-[300px] sm:h-[500px] flex items-center justify-center">
        <img
          className="absolute inset-0 w-full h-full object-cover"
          src="/pc-picture.jpg"
          alt="ハッカソン会場の様子"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>

        {/*画像の上*/}
        <div className="relative z-10 text-center text-white px-2">
          <p className="text-lg sm:text-3xl mb-2 sm:mb-4 font-bold">
            ハッカソン開催決定！
          </p>
          <strong
            className="text-4xl sm:text-6xl font-bold mb-3 sm:mb-6"
            style={{ WebkitTextStroke: "3px white" }}
          >
            S M A P R O<br />H A C K T H O N<br />2 0 2 6
          </strong>
          <p className="text-base sm:text-2xl mb-2 sm:mb-4 sm:mt-5">
            2月5日～2月6日
          </p>
          <p className="text-sm sm:text-lg mb-2 sm:mb-8">
            申込期間2026年1月13日（火）12:30～1月28日（水）（定員に達し次第
            受付締切）
          </p>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLScTdqFgMcFrQyOmedgSpNIT85sklDLGI9pOnEQ0bH3EB1qiqg/viewform?usp=dialog"
            className="inline-block bg-red-500 hover:bg-slate-200 text-white font-bold py-1 sm:py-4 px-4 sm:px-9 rounded-full text-base sm:text-lg transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            応募はこちら
          </a>
        </div>
      </div>

      {/*本文*/}
      <div className="w-full max-w-[800px] mx-auto text-center mt-10 sm:mt-20 px-3 sm:px-4">
        <h1 className="text-xl sm:text-3xl font-bold mb-6 sm:mb-12">
          スマプロハッカソンとは
        </h1>
        <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
          スマプロハッカソンとは金沢工業大学生を対象とした
          <br />
          オフラインハッカソンです
          <br />
          <br />
          ハッカソンとは、エンジニアが集まって協力しながら
          <br />
          開発を行うイベントのことです
          <br />
          <br />
          私たちは、このイベントを通して、
          <br />
          石川県のエンジニア学生同士がつながる場所やコンテンツを提供し、
          <br />
          エンジニアを目指す学生のスキルアップや同じ志を持つ学生と出会い、
          <br />
          切磋琢磨する環境を作っていきたいと考えています
          <br />
          <br />
          そのため、エンジニアを目指す人、プログラミングに興味がある人、
          <br />
          レベルや開発経験問わず大歓迎です！！
        </p>
      </div>

      {/* 特徴 */}
      <div className="w-screen py-10 mt-10 mb-10 overflow-x-hidden">
        <div className="max-w-[800px] mx-auto text-center px-4">
          <h2 className="text-xl sm:text-3xl text-red-500 font-bold mt-10 mb-12">
            特徴
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-16">
            <div className="bg-red-50 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">スキルアップ</h3>
              <p className="text-gray-600">
                短時間でプロダクトを開発するため、エンジニアとしてスキルアップができる
              </p>
            </div>
            <div className="bg-red-50 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">メンターサポート</h3>
              <p className="text-gray-600">
                社会人のエンジニアの方に
                <br />
                メンターをしてもらえ、教えてもらえる
              </p>
            </div>
            <div className="bg-red-50 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">ネットワーキング</h3>
              <p className="text-gray-600">
                エンジニアを目指す学生と知り合い、
                <br />
                つながることができる
              </p>
            </div>
            <div className="bg-red-50 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">ポートフォリオ</h3>
              <p className="text-gray-600">
                インターン等各種選考で提出する
                <br />
                成果物・ポートフォリオがつくれる
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-screen bg-gray-900 py-10 mt-0 mb-10 overflow-x-hidden">
        <div className="max-w-[800px] mx-auto text-center px-4">
          <h2 className="text-xl sm:text-3xl text-white font-bold mt-5 mb-5">
            テーマ
          </h2>
          <h2 className="text-6xl sm:text-6xl text-white font-bold mt-0 mb-4">
            「自由」
          </h2>
          <p className="text-sm sm:text-xl text-white font-bold mt-0 mb-5 text-right">
            ※事前説明会、Slackで詳細を説明します
          </p>
        </div>
      </div>

      {/*全体の流れ*/}
      <div className="w-full max-w-[800px] text-center mt-5 px-4">
        <h2 className="text-xl sm:text-3xl font-bold mb-10 text-center">全体の流れ</h2>
        <div className="grid grid-cols-3 gap-4 mb-4">
          <p className="text-base sm:text-lg text-gray-700">
            1月13日（火） ～<br></br> 28日（水）
          </p>
          <p className="text-base sm:text-lg text-gray-700">1月29日（木）</p>
          <p className="text-base sm:text-lg text-gray-700">
            2月5日（木）～<br></br>6日（金）
          </p>
        </div>
        <img
          src="/schedule.png"
          alt="スケジュール画像"
          className="mx-auto mb-4 rounded-lg max-w-full h-auto"
        />
        <div className="grid grid-cols-3 gap-4 mb-4">
          <p className="text-base sm:text-lg text-gray-700">募集期間</p>
          <p className="text-base sm:text-lg text-gray-700">事前説明会</p>
          <p className="text-base sm:text-lg text-gray-700">ハッカソン当日</p>
        </div>

        {/* 事前説明会 */}
        <div className="relative left-1/2 right-1/2 -mx-[50vw] w-[100vw] bg-gray-900 py-20 mt-20 mb-20">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-xl sm:text-3xl font-bold mb-5 text-center text-white">
              事前説明会（オンライン開催）　1月29日（木）
            </h2>
            <div className="border-2 border-black bg-white overflow-hidden">
              <div className="divide-y-2 divide-black">
                <div className="flex items-center">
                  <div className="w-1/3 py-4 px-2 font-semibold text-center border-r-2 border-black bg-white">
                    17:30 ~ 17:40
                  </div>
                  <div className="w-2/3 py-4 px-2 text-center bg-white flex items-center justify-center">
                    概要説明
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-1/3 py-4 px-2 font-semibold text-center border-r-2 border-black bg-white">
                    17:40 ~ 17:50
                  </div>
                  <div className="w-2/3 py-4 px-2 text-center bg-white flex items-center justify-center">
                    当日の説明
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-1/3 py-4 px-2 font-semibold text-center border-r-2 border-black bg-white">
                    17:50 ~ 18:20
                  </div>
                  <div className="w-2/3 py-4 px-2 text-center bg-white flex items-center justify-center">
                    DMM様による講演（会社説明）
                  </div>
                </div>
                <div className="flex items-stretch">
                  <div className="w-1/3 py-4 px-2 font-semibold text-center border-r-2 border-black bg-red-100">
                    18:20 ~ 19:10
                  </div>
                  <div className="w-2/3 py-4 px-2 text-red-600 font-semibold text-center bg-red-100 flex items-stretch justify-center">
                    オンライン座談会
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-1/3 py-4 px-2 font-semibold text-center border-r-2 border-black bg-white">
                    19:10
                  </div>
                  <div className="w-2/3 py-4 px-2 text-center bg-white flex items-center justify-center">
                    閉会
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/*オンライン座談会とは*/}
        <div className="w-full max-w-[800px] text-center mt-24 px-4">
          <h2 className="text-3xl font-bold mb-6">オンライン座談会とは</h2>
          <p className="text-lg text-gray-700 mb-8">
            事前説明会とは、参加者とメンターが話しやすい
            <br />
            関係を築くことを目的としたオンライン交流会です
            <br />
            <br />
            技術的な質問やキャリアに関する話題はもちろん、
            <br />
            ハッカソン以外のことでも、自由に質問できる質疑応答形式の
            <br />
            座談会となっています
            <br />
            <br />
            本オンライン座談会は、ハッカソンの事前説明会の
            <br />
            一環として実施されます
            <br />
            ぜひご参加ください！
          </p>
        </div>
      </div>

      {/* スケジュール */}
      <div className="w-full bg-gray-900 py-10 sm:py-16 mt-10 sm:mt-20 mb-6 sm:mb-10">
        <div className="max-w-[1000px] mx-auto text-center px-2 sm:px-4">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-3 text-white">
            ハッカソン当日のスケジュール
          </h2>
          <p className="text-sm sm:text-sm font-bold text-white mb-10">
            ※下記スケジュールは予定で、当日の状況によって若干変更の可能性があります
          </p>
          <div className="flex flex-col md:flex-row gap-4 sm:gap-8 mb-6 sm:mb-10 justify-center items-start">
            {/* 1日目 */}
            <div className="w-full sm:w-[450px] mx-auto">
              <h3 className="text-lg sm:text-2xl text-white font-bold mb-3 sm:mb-6 text-center">
                1日目 2月5日(木)
              </h3>
              <div className="border-2 border-black bg-white overflow-hidden">
                <div className="divide-y-2 divide-black">
                  {/* 09:30~ 受付開始 */}
                  <div className="flex items-stretch">
                    <div className="w-1/3 px-2 sm:px-6 py-2 sm:py-4 font-semibold text-center border-r-2 border-black bg-white text-sm sm:text-base">
                      09:30~
                    </div>
                    <div className="w-2/3 px-2 sm:px-6 py-2 sm:py-4 text-center bg-white text-sm sm:text-base">
                      受付開始
                    </div>
                  </div>
                  {/* 10:00~ 開会・オープニング */}
                  <div className="flex items-stretch">
                    <div className="w-1/3 px-2 sm:px-6 py-2 sm:py-4 font-semibold text-center border-r-2 border-black bg-white text-sm sm:text-base">
                      10:00~
                    </div>
                    <div className="w-2/3 px-2 sm:px-6 py-2 sm:py-4 text-center bg-white text-sm sm:text-base">
                      開会・オープニング
                    </div>
                  </div>
                  {/* 10:30~ 開発開始 */}
                  <div className="flex items-stretch">
                    <div className="w-1/3 px-2 sm:px-6 py-2 sm:py-4 font-semibold text-center border-r-2 border-black bg-red-200 text-sm sm:text-base">
                      10:30~
                    </div>
                    <div className="w-2/3 px-2 sm:px-6 py-2 sm:py-4 font-semibold text-center bg-red-200 text-sm sm:text-base">
                      開発時間
                    </div>
                  </div>
                  {/* 12:30~ 昼食 */}
                  <div className="flex items-stretch">
                    <div className="w-1/3 px-2 sm:px-6 py-2 sm:py-4 font-semibold text-center border-r-2 border-black bg-white text-sm sm:text-base">
                      12:30~
                    </div>
                    <div className="w-2/3 px-2 sm:px-6 py-2 sm:py-4 text-center bg-white text-sm sm:text-base">
                      昼食
                    </div>
                  </div>
                  {/* 13:30~ 開発時間 */}
                  <div className="flex items-stretch">
                    <div className="w-1/3 px-2 sm:px-6 py-2 sm:py-4 font-semibold text-center border-r-2 border-black bg-red-200 text-sm sm:text-base">
                      13:30~
                    </div>
                    <div className="w-2/3 px-2 sm:px-6 py-2 sm:py-4 font-semibold text-center bg-red-200 text-sm sm:text-base">
                      開発時間
                    </div>
                  </div>
                  {/* 17:40~ 終了セッション */}
                  <div className="flex items-stretch">
                    <div className="w-1/3 px-2 sm:px-6 py-2 sm:py-4 font-semibold text-center border-r-2 border-black bg-white text-sm sm:text-base">
                      17:40~
                    </div>
                    <div className="w-2/3 px-2 sm:px-6 py-2 sm:py-4 text-center bg-white text-sm sm:text-base">
                      終了セッション
                    </div>
                  </div>
                  {/* 18:00 解散 */}
                  <div className="flex items-stretch">
                    <div className="w-1/3 px-2 sm:px-6 py-2 sm:py-4 font-semibold text-center border-r-2 border-black bg-white text-sm sm:text-base">
                      18:00
                    </div>
                    <div className="w-2/3 px-2 sm:px-6 py-2 sm:py-4 text-center bg-white text-sm sm:text-base">
                      解散
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* 2日目 */}
            <div className="w-full sm:w-[450px] mx-auto">
              <h3 className="text-lg sm:text-2xl text-white font-bold mb-3 sm:mb-6 text-center">
                2日目 2月6日(金)
              </h3>
              <div className="border-2 border-black bg-white overflow-hidden">
                <div className="divide-y-2 divide-black">
                  {/* 09:30~ 受付開始 */}
                  <div className="flex items-center">
                    <div className="w-1/3 px-2 sm:px-6 py-2 sm:py-4 font-semibold text-center border-r-2 border-black bg-white text-sm sm:text-base">
                      09:30~
                    </div>
                    <div className="w-2/3 px-2 sm:px-6 py-2 sm:py-4 text-center bg-white text-sm sm:text-base">
                      受付開始
                    </div>
                  </div>
                  {/* 10:00~ 開会・事務局案内 */}
                  <div className="flex items-center">
                    <div className="w-1/3 px-2 sm:px-6 py-2 sm:py-4 font-semibold text-center border-r-2 border-black bg-white text-sm sm:text-base">
                      10:00~
                    </div>
                    <div className="w-2/3 px-2 sm:px-6 py-2 sm:py-4 text-center bg-white text-sm sm:text-base">
                      開会・事務局案内
                    </div>
                  </div>
                  {/* 10:10~ 開発時間 */}
                  <div className="flex items-center">
                    <div className="w-1/3 px-2 sm:px-6 py-2 sm:py-4 font-semibold text-center border-r-2 border-black bg-red-200 text-sm sm:text-base">
                      10:10~
                    </div>
                    <div className="w-2/3 px-2 sm:px-6 py-2 sm:py-4 font-semibold text-center bg-red-200 text-sm sm:text-base">
                      開発時間
                    </div>
                  </div>
                  {/* 12:30~ 昼食 */}
                  <div className="flex items-center">
                    <div className="w-1/3 px-2 sm:px-6 py-2 sm:py-4 font-semibold text-center border-r-2 border-black bg-white text-sm sm:text-base">
                      12:30~
                    </div>
                    <div className="w-2/3 px-2 sm:px-6 py-2 sm:py-4 text-center bg-white text-sm sm:text-base">
                      昼食
                    </div>
                  </div>
                  {/* 14:30~ 開発締切＆発表準備 */}
                  <div className="flex items-center">
                    <div className="w-1/3 px-2 sm:px-6 py-2 sm:py-4 font-semibold text-center border-r-2 border-black bg-red-200 text-sm sm:text-base">
                      14:30~
                    </div>
                    <div className="w-2/3 px-2 sm:px-6 py-2 sm:py-4 font-semibold text-center bg-red-200 text-sm sm:text-base">
                      開発締切＆発表準備
                    </div>
                  </div>
                  {/* 15:00~ 発表 */}
                  <div className="flex items-center">
                    <div className="w-1/3 px-2 sm:px-6 py-2 sm:py-4 font-semibold text-center border-r-2 border-black bg-red-500 text-sm sm:text-base text-white">
                      15:00~
                    </div>
                    <div className="w-2/3 px-2 sm:px-6 py-2 sm:py-4 font-semibold text-center bg-red-500 text-sm sm:text-base text-white">
                      発表
                    </div>
                  </div>
                  {/* 16:20 情報交流会・審査結果*/}
                  <div className="flex items-stretch">
                    <div className="w-1/3 px-2 sm:px-6 py-2 sm:py-4 font-semibold text-center border-r-2 border-black bg-white text-sm sm:text-base">
                      <b></b> <br></br>16:20~
                    </div>
                    <div className="w-2/3 px-2 sm:px-6 py-2 sm:py-4 text-center bg-white text-sm sm:text-base">
                      情報交流会<br></br>
                      順位発表・表彰<br></br>
                      フィードバック
                    </div>
                  </div>
                  {/* 19:00 閉会・解散 */}
                  <div className="flex items-center">
                    <div className="w-1/3 px-2 sm:px-6 py-2 sm:py-4 font-semibold text-center border-r-2 border-black bg-white text-sm sm:text-base">
                      19:00
                    </div>
                    <div className="w-2/3 px-2 sm:px-6 py-2 sm:py-4 text-center bg-white text-sm sm:text-base">
                      閉会・解散
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*開催概要*/}
      <div className="w-full max-w-[800px] text-center mt-20 px-4">
        <h2 className="text-3xl font-bold mb-12">開催概要</h2>
        <div className="text-left space-y-8">
          <div className="pb-8 border-b border-dashed border-gray-500">
            <h3 className="text-xl font-semibold mb-2">テーマ</h3>
            <p className="text-gray-600 font-semibold">
              　自由（1/29事前説明会にて概要説明）
            </p>
          </div>
          <div className="pb-8 border-b border-dashed border-gray-500">
            <h3 className="text-xl font-semibold mb-2">開催日</h3>
            <p className="text-gray-600 font-semibold">
              　2025年2月5日(木)〜2月6日(金)
            </p>
          </div>
          <div className="pb-8 border-b border-dashed border-gray-500">
            <h3 className="text-xl font-semibold mb-2">開催場所</h3>
            <p className="text-gray-600 font-semibold">
              　金沢工業大学 31号館 206
            </p>
          </div>
          <div className="pb-8 border-b border-dashed border-gray-500">
            <h3 className="text-xl font-semibold mb-2">　定員</h3>
            <p className="text-gray-600 font-semibold">
              　24名（先着順／定員に達し次第、締切）{" "}
            </p>
          </div>
          <div className="pb-8 border-b border-dashed border-gray-500">
            <h3 className="text-xl font-semibold mb-2">参加費</h3>
            <p className="text-gray-600 font-semibold">　無料</p>
          </div>

          <div className="pb-8 border-b border-dashed border-gray-500">
            <h3 className="text-xl font-semibold mb-2">参加条件</h3>
            <ul className="text-gray-600 list-disc list-inside space-y-1 font-semibold">
              <li className="pl-4">金沢工業大学の学生であること</li>
              <li className="pl-4">
                プログラミングやエンジニアに興味があること
              </li>
              <li className="pl-4">
                チームで一人以上、Git/GitHubの使用経験があること
              </li>
              <li className="pl-4">PCを持っていること</li>
              <li className="pl-4">2日間（2/5~2/6）オフライン参加できること</li>
              <li className="pl-4">レベルは問いません。初心者歓迎！</li>
            </ul>
          </div>
          <div className="pb-8 border-b border-dashed border-gray-500">
            <h3 className="text-xl font-semibold mb-2">　事前説明会</h3>
            <p className="text-gray-600 font-semibold">
              　日時：1月29日(水)17:30~19:10<br></br>
              　場所：オンライン（Zoom）
            </p>
            <p className="text-gray-600 mt-4 text-sm">
              　協賛企業であるDMM.com様の講座やオンライン座談会を予定しています。
              <br></br>
              　ぜひカメラをオンにしてご参加ください！
            </p>
          </div>
          <div>
            <div className="pb-8 border-b border-dashed border-gray-500">
              <h3 className="text-xl font-semibold mb-2">賞</h3>
              <ul className="text-gray-600 list-disc list-inside space-y-1 font-semibold">
                <li className="pl-4">最優秀賞（DMMボックスなど）</li>
                <li className="pl-4">優秀賞（DMMボックスなど）</li>
                <li className="pl-4">DMM賞（DMM Tシャツ）</li>
                <li className="pl-4">参加賞（DMMステッカー）</li>
              </ul>
            </div>
          </div>
          <div className="pb-8 border-b border-dashed border-gray-500">
            <h3 className="text-xl font-semibold mb-2">審査項目</h3>
            <p className="text-gray-600 font-semibold">
              　アイデア・完成度・技術力の３点で評価します
            </p>
          </div>
          <div className="pb-8 border-b border-dashed border-gray-500">
            <h3 className="text-xl font-semibold mb-2">その他</h3>
            <ul className="text-gray-600 list-disc list-inside space-y-1 font-semibold">
              <li className="pl-4">チーム参加、個人参加OK</li>
              <li className="pl-4">
                Slackを使用しますので、準備をお願いします。
              </li>
              <li className="pl-4">必ず開発ルールを一読ください</li>
            </ul>
            <button
              className="text-white bg-red-500 hover:bg-red-600 font-bold px-4 py-2 rounded mt-4 text-left block"
              onClick={() => setShowModal(true)}
              style={{ marginLeft: 0 }}
            >
              開発ルール→
            </button>
            {/* ポップアップ */}
            {showModal && (
              <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
                <div className="overflow-y-auto max-h-screen bg-gray-800 text-white rounded-lg p-8 max-w-md sm:max-w-3xl w-full shadow-lg relative">
                  <h2 className="text-xl sm:text-2xl font-bold mb-5 border-b border-red-500 pb-2">
                    開発ルール
                  </h2>
                  <p className="mb-4 text-white font-bold">
                    発表作品はプログラミングに関係あるもので、本イベント向けに開発したオリジナル作品とします。
                    <br />
                    開催中は、本イベントのSlack上で開発をしていただくようお願いします。
                    <br />
                    発表において、デモや説明ビデオなどでの3～5分間のプレゼンテーションを実施いただきます。
                    <br />
                    なお、本イベントで作成した作品の権利は、作成者に帰属します。
                    <br />
                    <br />
                    ​・作品の発表時間は3～5分
                    <br />
                    ・Webアプリ、モバイルアプリ、Bot、ゲームなどプログラミングに関連するもので、ソフトウェアのもの
                    <br />
                    ・発表作品は開発期間に参加チームメンバーによって作成されたオリジナルのものとする(*1)
                    <br />
                    ・発表はプレゼンテーションが可能であり、作品展示時間にデモンストレーションが可能なものとする(*2)
                    (*3)
                    <br />
                    ・公序良俗に反したものでないこと
                    <br />
                    ・作品および発表資料については、OSSやAPIなどを利用する際は、ライセンスを遵守すること
                    <br />
                    ・他者の著作物である漫画、CD音源、写真の無断流用等を行わないこと(*4)
                    <br />
                    ・大学等の教育機関や企業、団体等の情報を許可なく使用しないこと{" "}
                    <br />
                    <br />
                    (*1)過去に作成したものや、他のイベントで発表済みの作品を発表することは不可
                    <br />
                    (*2) 発火したり、極端に大きな音を発したり重いものは不可{" "}
                    <br />
                    (*3)発表用の検証端末やディスプレイの貸し出しは不可 <br />
                    (*4)著作権の侵害が発覚したチームは作品の発表不可{" "}
                  </p>
                  <button
                    className="absolute top-2 right-4 text-white hover:text-gray-800 text-2xl"
                    onClick={() => setShowModal(false)}
                  >
                    ×
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/*協賛企業*/}
      <div className="w-full bg-gray-900 text-center mt-32 px-4">
        <h2 className="text-3xl text-white font-bold mt-5">協賛企業</h2>
        <p className="text-lg text-gray-200 mt-2 mb-5">合同会社DMM.com</p>
        <div className="flex justify-center items-center bg-gray-900 rounded-lg py-6 mb-10 mx-auto max-w-[400px]">
          <img
            src="/DMM_com_logo_RGB_white.png"
            alt="DMM.com"
            className="h-10 w-auto"
          />
        </div>
      </div>

      {/*スマプロ*/}
      <div className="w-full max-w-[800px] text-center mt-20 px-4">
        <h2 className="text-xl sm:text-3xl font-bold mb-10">
          スマートフォンアプリプロジェクト
        </h2>
        <div className="flex flex-col md:flex-row items-center md:items-start text-left">
          <div className="flex justify-center items-center py-0 mx-auto md:mx-0 max-w-[200px] w-full md:w-[200px]">
            <img
              src="/Smapro_logo_RGB_white.png"
              alt="Smapro"
              className="h-36 w-auto"
            />
          </div>
          <div className="md:ml-8 flex-1">
            <p className="text-lg text-gray-700 mt-4">
              スマプロは金沢工業大学の学生によるアプリ開発プロジェクトです。
              <br />
              学生同士で協力し、様々なアプリやサービスを企画・開発しています。
            </p>
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div className="w-full bg-gray-900 mt-20 mb-20">
        <div className="max-w-[800px] mx-auto text-center px-4 py-12">
          <h2 className="text-3xl font-bold mb-12 text-white">よくある質問</h2>
          <div className="space-y-6 text-left">
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="text-lg font-semibold mb-3">
                初心者でも参加して大丈夫ですか？
              </h3>
              <p className="text-gray-600">
                初心者の方でも楽しめるのでぜひご参加ください！メンターのサポートもあります。
                <br></br>※GitHub経験者とご一緒にご参加ください
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="text-lg font-semibold mb-3">
                個人ですが、チーム参加はできますか？
              </h3>
              <p className="text-gray-600">
                可能です。運営側でチーム編成を行いますので、個人参加でもチーム開発ができます。
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="text-lg font-semibold mb-3">
                事前開発はしてもいいですか？
              </h3>
              <p className="text-gray-600">
                事前説明会終了後から事前開発はしていただいて大丈夫です！
              </p>
            </div>
          </div>
        </div>
      </div>

      {/*お問い合わせ*/}
      <div className="w-full max-w-[800px] text-center mt-10 mb-16 px-4">
        <h2 className="text-3xl font-bold mb-12">お問い合わせ</h2>
        <div className="bg-gray-50 p-8 rounded-lg">
          <p className="text-lg mb-4">以下のメールアドレスまでご連絡ください</p>
          <a
            href="mailto:smartphone.apps.project@gmail.com"
            className="text-blue-600 sm:text-xl font-semibold hover:underline"
          >
            smartphone.apps.project@gmail.com
          </a>
        </div>
      </div>
    </main>
  );
}
