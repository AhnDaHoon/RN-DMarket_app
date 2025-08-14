import { Text, View } from "react-native";

export default function Posts() {
  const posts: {id: number, title: string}[] = [
    {id: 1, title: "첫 번째 게시글"},
    {id: 2, title: "두 번째 게시글"},
    {id: 3, title: "세 번째 게시글"},
    {id: 4, title: "네 번째 게시글"},
    {id: 5, title: "다섯 번째 게시글"},
    {id: 6, title: "여섯 번째 게시글"},
    {id: 7, title: "일곱 번째 게시글"},
    {id: 8, title: "여덟 번째 게시글"},
    {id: 9, title: "아홉 번째 게시글"},
    {id: 10, title: "열 번째 게시글"},
  ]
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {posts.map(post => (
        <Text key={post.id} style={{ fontSize: 18, marginVertical: 10 }}>
          {post.id}. {post.title} 
        </Text>
      ))}
    </View>
  );
}