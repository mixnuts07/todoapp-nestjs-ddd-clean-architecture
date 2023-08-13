## Description

Nest.js と TypeScript で作る簡易的な TODO アプリケーションです。

DDD とクリーンアーキテクチャの練習で作りました。

## 残りやること

- エラーハンドリング

- テストを書く

- controller 層でバリデーションをしたい

- Nest.js でまだ使っていない機能で使えそうなものを実装してみる

- [認証の実装](https://docs.nestjs.com/security/authentication)

- クリーンアーキテクチャっぽくないから設計を再考する

- app 配下のディレクトリの切り方を再考したい。現状 database がドメインっぽくなっている。また、service や repository はディレクトリを切っていないので良いやり方を Nest.js の Docs を見てみる。

## 技術スタック

TypeScript

Nest.js

TypeORM

MySQL

docker-compose

Jest

## ディレクトリ構成

```
src/
├── app/
│ ├── todos/
│ │ └── dto/ // データ転送オブジェクト
│ │ ├── entities/ // エンティティ（ドメインモデル）
│ │ ├── gateway/ // ユースケース、DBとの中間層(未実装)
│ ├── database/
│ │ ├── const/ // 定数
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

## レイヤーの説明

```
Client → Controller → Service → Repository → DB

Client...リクエストを投げる主体。今回は `curl` コマンドで実行する。

Controller...リクエストを受け付ける層。入力バリデーションも行う。

Service...ビジネスロジックの定義をする層。

Repository...DBとのやり取りを行う層。実装ではORマッパーの `TypeORM` を使用している。

```

## 機能（ユーザーストーリー）

```
TODOを作成することができる(POST:/todo)
TODOを1件取得することができる(GET:/todo/id)
TODOを全件取得することができる(GET:/todo)
TODOを更新することができる(PUT:/todo/id)
TODOを削除することができる(DELETE:/todo/id)
TODOの状態を見ることができる
TODOの優先度を見ることができる
```

## サンプルリクエスト

### TODO を全件取得する

```
curl "localhost:3000/todo"
```

### TODO を 1 件取得する

```
curl "localhost:3000/todo/1"
```

### TODO を 1 件作成する

```
curl -X POST 'http://localhost:3000/todo' \
-H 'Content-Type: application/json' \
-d '{
  "title": "Your First Todo Title",
  "description": "Your First Todo Description"
}'
```

### TODO を 1 件更新する

```
curl -X PUT "localhost:3000/todo/1" \
-H "Content-Type: application/json" \
 -d '{
    "title": "update title",
    "description": "this is upated data"
}'
```

### TODO を 1 件削除する

```
curl -X DELETE "localhost:3000/todo/3"
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

## CHECK

```bash
$ doc exec -it todo mysql -u admin -p

```
