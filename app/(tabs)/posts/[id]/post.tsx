import { db } from "@/firebase/config";
import { PostWithContentDto } from "@/types/post";
import { useLocalSearchParams } from "expo-router";
import { collection, getDocs, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Post() {
  const { postId } = useLocalSearchParams();
  const [post, setPost] = useState<PostWithContentDto | null>(null);

  const fetchPost = async () => {
    try {
      const postsQuery = query(
          collection(db, "post")
          , where("postId", "==", Number(postId))
      );

      const postSnapshot = await getDocs(postsQuery);
      const postData = postSnapshot.docs[0].data();
      setPost(postData as PostWithContentDto);
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  useEffect(() => { 
    fetchPost();
  }
  , []);

  
  return (
  <SafeAreaView style={{ flex: 1 }}>
    <ScrollView contentContainerStyle={{ paddingBottom: 32 }}>
      <View style={styles.postCard}>
        <View style={styles.header}>
          <Text style={styles.postTitle}>{post?.title}</Text>
        </View>
        <View style={styles.body}>
          <Text style={styles.postBody}>{post?.content}</Text>
        </View>
      </View>
    </ScrollView>
  </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f2f2",
    padding: 16,
  },
  postCard: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 4,
  },
  header: {
    marginBottom: 12,
  },
  postId: {
    fontSize: 12,
    color: "#888",
    marginBottom: 4,
  },
  postTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
  },
  body: {
    marginTop: 8,
  },
  postBody: {
    fontSize: 16,
    color: "#555",
    lineHeight: 22,
    marginBottom: 8,
  },
});
