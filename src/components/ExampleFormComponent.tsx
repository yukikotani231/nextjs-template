'use client';

import { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';

// Zod スキーマを定義
const formSchema = z.object({
  name: z.string().min(2, {
    message: '名前は2文字以上である必要があります。',
  }),
  email: z.string().email({
    message: 'メールアドレスが正しくありません。',
  }),
  category: z.string().min(1, {
    message: 'カテゴリを選択してください。',
  }),
  message: z.string().min(10, {
    message: 'メッセージは10文字以上である必要があります。',
  }),
  subscribe: z.boolean(),
});

type FormValues = z.infer<typeof formSchema>;

export function ExampleFormComponent() {
  const [submitData, setSubmitData] = useState<FormValues | null>(null);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      category: '',
      message: '',
      subscribe: false,
    },
  });

  function onSubmit(values: FormValues) {
    setSubmitData(values);
    console.log('Form submitted:', values);
  }

  return (
    <div className="w-full max-w-md space-y-6">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          {/* Name Field */}
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>名前</FormLabel>
                <FormControl>
                  <Input placeholder="太郎" {...field} />
                </FormControl>
                <FormDescription>あなたのお名前を入力してください。</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Email Field */}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>メールアドレス</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="example@test.com" {...field} />
                </FormControl>
                <FormDescription>通知用のメールアドレスを入力してください。</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Category Select */}
          <FormField
            control={form.control}
            name="category"
            render={({ field }) => (
              <FormItem>
                <FormLabel>カテゴリ</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="カテゴリを選択" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="bug">バグ報告</SelectItem>
                    <SelectItem value="feature">機能リクエスト</SelectItem>
                    <SelectItem value="question">質問</SelectItem>
                    <SelectItem value="other">その他</SelectItem>
                  </SelectContent>
                </Select>
                <FormDescription>該当するカテゴリを選択してください。</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Message Textarea */}
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>メッセージ</FormLabel>
                <FormControl>
                  <Textarea placeholder="詳細を入力してください..." {...field} />
                </FormControl>
                <FormDescription>詳しい内容をお知らせください。</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Subscribe Checkbox */}
          <FormField
            control={form.control}
            name="subscribe"
            render={({ field }) => (
              <FormItem className="flex items-center space-x-2 space-y-0 rounded-md border border-input p-4">
                <FormControl>
                  <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                </FormControl>
                <div className="space-y-1 leading-none">
                  <FormLabel>今後の更新をメールで受け取る</FormLabel>
                  <FormDescription>新しい機能やアップデート情報をお知らせします。</FormDescription>
                </div>
              </FormItem>
            )}
          />

          <Button type="submit" className="w-full">
            送信
          </Button>
        </form>
      </Form>

      {/* Display submitted data */}
      {submitData && (
        <div className="rounded-md bg-accent p-4">
          <h3 className="font-semibold">送信されたデータ:</h3>
          <pre className="mt-2 overflow-auto rounded bg-background p-2 text-sm">
            {JSON.stringify(submitData, null, 2)}
          </pre>
        </div>
      )}
    </div>
  );
}
