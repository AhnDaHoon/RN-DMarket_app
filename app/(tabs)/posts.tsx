import { useEffect, useState } from "react";
import { Dimensions, FlatList, StyleSheet, Text, View } from "react-native";

export default function Posts() {
  const [posts, setPosts] = useState<{id: number; title: string}[]>([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .catch((error) => console.error("Error fetching posts:", error)); 


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
            <Text style={styles.postTitle}>{item.title}</Text>
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