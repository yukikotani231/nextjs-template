# shadcn/ui コンポーネントの使用ガイド

このテンプレートには [shadcn/ui](https://ui.shadcn.com) がすでに統合されています。

## セットアップ確認

以下のファイルがすでに設定されています:

- `components.json` - shadcn/ui configuration
- `src/lib/utils.ts` - ユーティリティ関数（`cn`）
- `src/components/ui/` - UI コンポーネント
- `tailwind.config.ts` - Tailwind CSS theme extension
- `src/app/globals.css` - CSS 変数定義

## コンポーネントのインストール

### 方法 1: npx コマンドを使用（推奨）

shadcn/ui には CLi ツールが付属しています：

```bash
# Button コンポーネントをインストール
npx shadcn-ui@latest add button

# 複数コンポーネントをインストール
npx shadcn-ui@latest add card input select
```

### 方法 2: 手動でコンポーネントを追加

1. [shadcn/ui コンポーネントライブラリ](https://ui.shadcn.com/docs/components) から目的のコンポーネントを選択
2. そのコンポーネントのコードを `src/components/ui/` にコピー
3. 必要なインポート（`lucide-react` など）を追加

## 利用可能なコンポーネント

このテンプレートに含まれているコンポーネント:

- **Button** (`src/components/ui/button.tsx`) - ボタンコンポーネント
  - Variants: `default`, `destructive`, `outline`, `secondary`, `ghost`, `link`
  - Sizes: `default`, `sm`, `lg`, `icon`
  - Props: `asChild` で別のエレメントをレンダリング可能

- **Card** (`src/components/ui/card.tsx`) - カードコンポーネント
  - `Card` - コンテナ
  - `CardHeader` - ヘッダー
  - `CardTitle` - タイトル
  - `CardDescription` - 説明文
  - `CardContent` - コンテンツ
  - `CardFooter` - フッター

## 使用例

### Button の使用

```tsx
import { Button } from '@/components/ui/button';

export default function MyComponent() {
  return (
    <div className="space-y-2">
      <Button>Default Button</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="destructive">Delete</Button>
      <Button variant="ghost">Ghost</Button>
      <Button size="sm">Small</Button>
      <Button size="lg">Large</Button>

      {/* リンクとして使用 */}
      <Button asChild>
        <a href="/about">Go to About</a>
      </Button>
    </div>
  );
}
```

### Card の使用

```tsx
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export default function MyCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card description goes here</CardDescription>
      </CardHeader>
      <CardContent>
        <p>This is the card content.</p>
      </CardContent>
      <CardFooter>
        <Button>Save</Button>
      </CardFooter>
    </Card>
  );
}
```

## カラーのカスタマイズ

色は CSS 変数で定義されています（`src/app/globals.css`）。カスタマイズするには：

```css
:root {
  --primary: 0 0% 9%; /* プライマリカラー */
  --primary-foreground: 0 0% 100%;
  --secondary: 0 0% 96.1%;
  --secondary-foreground: 0 0% 9%;
  --destructive: 0 84.2% 60.2%; /* エラーカラー */
  --accent: 0 0% 9%;
  --background: 0 0% 100%;
  --foreground: 0 0% 3.6%;
  /* ... その他の色 ... */
}
```

HSL 形式の値を変更することで、テーマ全体が自動的に更新されます。

## Lucide Icons

shadcn/ui は [Lucide Icons](https://lucide.dev) を推奨しています：

```bash
npm install lucide-react
```

使用例：

```tsx
import { Check, ChevronRight, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function IconButton() {
  return (
    <div className="space-y-2">
      <Button>
        <Check className="mr-2 h-4 w-4" />
        Save
      </Button>
      <Button disabled>
        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
        Loading...
      </Button>
    </div>
  );
}
```

## ダークモード対応

このテンプレートのコンポーネントはダークモード対応です。`globals.css` で `.dark` クラスの色が定義されています。

ダークモード設定:

```tsx
// app/layout.tsx
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      {/* ... */}
    </html>
  );
}
```

## よくある質問

### コンポーネントの種類を確認したい

[shadcn/ui 公式サイト](https://ui.shadcn.com) で全コンポーネントを確認できます。

### コンポーネントをカスタマイズしたい

shadcn/ui コンポーネントはコピー＆ペーストで提供されているため、自由に編集できます：

```tsx
// src/components/ui/button.tsx を直接編集
const buttonVariants = cva(
  '... your custom classes ...'
  // ...
);
```

### TypeScript の型定義がほしい

すべてのコンポーネントに TypeScript 定義が含まれています：

```tsx
import { Button, type ButtonProps } from '@/components/ui/button';

const MyButton: React.FC<ButtonProps> = (props) => {
  return <Button {...props} />;
};
```

## リソース

- [shadcn/ui 公式ドキュメント](https://ui.shadcn.com)
- [Tailwind CSS](https://tailwindcss.com)
- [Lucide Icons](https://lucide.dev)
- [Class Variance Authority](https://cva.style/docs)
