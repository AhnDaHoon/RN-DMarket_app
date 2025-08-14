import { Dimensions, FlatList, StyleSheet, Text, View } from "react-native";

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
    <View style={styles.postsContainer}>
      <FlatList
        data={posts}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.listWrap}
        renderItem={({ item }) => (
          <Text style={styles.postItem}>
            {item.id}. {item.title}
          </Text>
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

  }
})