import { db } from "@/firebase/config";
import { PostWithContentDto } from "@/types/post";
import { Feather, FontAwesome6, MaterialCommunityIcons, Octicons } from "@expo/vector-icons";
import { router, useLocalSearchParams } from "expo-router";
import { collection, getDocs, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Dimensions, Pressable, StyleSheet, Text, View } from "react-native";

const WIDTH = Dimensions.get("window").width;

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
    <View style={styles.postContainer}>
      <View style={styles.postInner}>
        <View style={styles.postHeader}>
          <View style={styles.postHeaderLeft}>
            <Pressable onPress={() => router.back()}>
              <Octicons name="chevron-left" size={24} color="black" />
            </Pressable>
          </View>
          <View style={styles.postHeaderRight}>
            <Pressable onPress={() => {}}>
              <Octicons name="bell" size={24} color="black" />
            </Pressable> 
            <Pressable onPress={() => {}}>
              <Feather name="upload" size={24} color="black" />
            </Pressable> 
            <Pressable onPress={() => {}}>
              <MaterialCommunityIcons name="dots-vertical" size={24} color="black" />
            </Pressable> 
          </View>
        </View>
        <View style={styles.postContentContainer}>
          <View style={styles.contentHeader}>
            <View style={styles.profileImage} >
              <Pressable onPress={() => console.log("my Page")}>
                <FontAwesome6 name="user-circle" size={30} color="#black" />
              </Pressable>
            </View>
            <View style={styles.profileInfo} >
              <Text style={styles.profileNickname}>닉네임</Text>
              <Text style={styles.profileDate}>날짜</Text>
            </View>
            <View></View>
          </View>
          <View style={styles.contentBody}>
            <View style={styles.contentTitleWrap}>
              <Text style={styles.postTitleContent}>{post?.title}</Text>
            </View>
            <View style={styles.contentBodyWrap}>
              <Text style={styles.postBody}>{post?.content}</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  postContainer: {
    flex: 1,
    backgroundColor: "#f2f2f2",
    marginTop: 40,
  },
  postInner: {
    width: WIDTH,
    padding: 16,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  postHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  postHeaderLeft: {
  },
  postHeaderRight: {
    flexDirection: "row",
    gap: 10,
  },
  postContentContainer: {
    padding: 10,
  },
  contentHeader: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 5,
    gap: 10,
  },
  profileImage: {
    
  },
  profileInfo: {
    
  },
  profileNickname: {
    fontWeight: "bold",
  },
  profileDate: {
    fontSize: 13,
    color: "#666",
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
