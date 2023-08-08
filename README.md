## Description

Nest.js と TypeScript で作る簡易的な TODO アプリケーションです。

DDD とクリーンアーキテクチャの練習で作りました。

## 技術スタック

TypeScript

Nest.js

TypeORM

PostgreSQL

docker-compose

Jest

## ディレクトリ構成

```
src/
├── app/
│ ├── core/
│ │ ├── shared/ // ドメインの共通モジュール
│ │ ├── entities/ // エンティティ（ドメインモデル）
│ │ ├── repositories/ // ドメインリポジトリ
│ │ └── services/ // ドメインサービス
│ ├── modules/
│ │ ├── todo/
│ │ │ ├── dto/ // データ転送オブジェクト
│ │ │ ├── usecases/ // ユースケース（アプリケーション層）
│ │ │ └── controllers/ // API コントローラー（プレゼンテーション層）
│ ├── infrastructure/ // インフラストラクチャ層
│ │ ├── database/ // データベース関連
│ │ ├── external/ // 外部 API クライアントや AWS サービスなど
│ │ └── config/ // 設定ファイルや DI コンテナの設定
├── main.ts // アプリケーションのエントリーポイント
└── app.module.ts // アプリケーションのルートモジュール
```

```
core: ドメイン層の共通モジュールを含む。例えば、ドメインモデルやドメインリポジトリ、ドメインサービスの共通インターフェースをここに配置します。

entities: ドメインモデル（エンティティ）を含む。ビジネスロジックがここに位置します。

repositories: ドメインリポジトリを含む。データ永続化のためのインターフェースを定義します。

services: ドメインサービスを含む。エンティティに紐付かないビジネスロジックを定義します。

modules: アプリケーション層のモジュールを含む。ユースケースや API コントローラーを配置します。

dto: データ転送オブジェクトを含む。API のリクエストやレスポンスのデータ構造を定義します。

infrastructure: インフラストラクチャ層を含む。データベースや外部 API とのインターフェースを実装します。

database: データベース関連の実装を含む。

external: 外部 API クライアントや AWS サービスなどの実装を含む。

config: 設定ファイルや DI コンテナの設定を含む。

各層は、他の層に対して依存しないように設計しています（多分）
```

## 機能（ユーザーストーリー）

```
TODOを作成することができる(POST:/todo)
TODOを1件取得することができる(GET:/todo/id)
TODOを全件取得することができる(GET:/todo)
TODOを更新することができる(UPDATE:/todo/id)
TODOを削除することができる(DELETE:/todo/id)
TODOの状態を見ることができる
TODOの優先度を見ることができる
```

## Installation

```bash
$ pnpm install
```

## Running the app

```bash
# development
$ pnpm run start

# watch mode
$ pnpm run start:dev

# production mode
$ pnpm run start:prod
```

## Test

```bash
# unit tests
$ pnpm run test

# e2e tests
$ pnpm run test:e2e

# test coverage
$ pnpm run test:cov
```
