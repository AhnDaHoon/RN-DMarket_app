import { PostDto } from "@/types/post";
import { Link } from "expo-router";
import { useEffect, useState } from "react";
import { Dimensions, FlatList, StyleSheet, Text, View } from "react-native";

export default function Posts() {
  const [posts, setPosts] = useState<PostDto[]>([]);


  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };
    fetchPosts();
  }, []);

  return (
    <View style={styles.postsContainer}>
      <FlatList
        data={posts}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.listWrap}
        renderItem={({ item }) => (
          
          <View style={styles.postItem}>
            <Text style={styles.postId}>{item.id}번 게시글</Text>
            <Link 
              href={{
                pathname: `/posts/[id]/post`,
                params: { 
                  userId: item.userId,
                  id: item.id,
                  title: item.title,
                  body: item.body
                }
              }}
            >
              <Text style={styles.postTitle}>{item.title}</Text>
            </Link>
          </View>
            
        )}
      />
    </View>
  );
}

const WIDTH = Dimensions.get("window").width;

const styles = StyleSheet.create({
  postsContainer: {
    alignContent: "center",
  },
  listWrap: {
    width: WIDTH - 16,
    paddingTop: 70, // 상단 여백 추가
    paddingBottom: 16, // 하단 여백 추가
    marginHorizontal: 8, // 좌우에 8px씩 여백 추가
  },
  postItem: {
    backgroundColor: "white",
    padding : 16,
    borderRadius: 10,
    marginBottom: 10,
    height: 100,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84, 
    elevation: 5, // 안드로이드에서 그림자 효과를 주기 위한 속성
    fontSize: 16,
  },
  postId: {
    fontSize: 16,
    fontWeight: "bold",
  },
  postTitle: {
    fontSize: 16,
    marginTop: 5,
  },
})