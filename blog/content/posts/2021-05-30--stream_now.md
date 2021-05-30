---
title: YouTube Data API で登録済みチャンネルの中からライブ配信中のものだけ取得しようとしたがQuota の上限に引っかかった
date: "2021-05-30T11:10:32.169Z"
template: "post"
draft: false
slug: "YouTube Data API で登録済みチャンネルの中からライブ配信中のものだけ取得しようとしたがQuota の上限に引っかかった"
category: "Typography"
tags:
  - "Web Development"
description: "YouTube Data API で何かをつくるにはQuota 制限のせいで実用的なものは難しいかもしれない。"
---

YouTube 配信開始の通知はGoogle アカウントへのメールか、スマホへのポップアップ通知しかないので、自分でAPI 叩いてDiscord とかに通知飛ばせるようにするかと思いちょっとしたツールを作りました。  


  
が、一つ問題がありGCP のYouTube Data API は一日10,000 Queries というQuota(割当)上限が決められており、さらに使用するAPI によってQueries の使用量が定められています。  
Quota については[公式のドキュメント](https://developers.google.com/youtube/v3/determine_quota_cost) をご確認ください。  
  


例を挙げると、  
チャンネル登録に関するAPI である`subscriptions.list` を使用する場合はcost は <b>"1"</b> ですが、   
動画を検索する`search.list` を使用する場合はcost は <b>"50"</b> も必要です。  
  
  

今回やりたかったことは流れとして、  

1. 自分の登録チャンネルのID を取得する  
2. 各チャンネルの配信中の配信があればそれを返す  
3. それをDiscord とかで5分おき(配信開始は大抵キリの良い時間なので)に通知する  

って感じなんですが、YouTube Data API では配信中かどうかの情報は `videos` または `search` リソースでしか取得できません。   
`videos` に関してはChannel ID からは取得できず、`search` リソースを使用するしかないのですが、  
登録チャンネルが50だった場合、`search` のコスト 50 × 50 で2,500 Queries を消費してしまうので課金する他方法がないようです。  
Quota 上限の開放に関しては[個人だと難しいみたい](https://stackoverflow.com/questions/61281991/applying-for-additional-quota-for-youtube-api-as-an-individual-without-business/62686472#62686472)なので、白旗です。  


### 一応作ったものはこちら  
[tesstesstex/stream_now](https://github.com/tesstesstex/stream_now)
