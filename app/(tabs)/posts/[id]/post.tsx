import { useLocalSearchParams } from "expo-router";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Post() {
  const { userId, title, body } = useLocalSearchParams();

  return (
  <SafeAreaView style={{ flex: 1 }}>
    <ScrollView contentContainerStyle={{ paddingBottom: 32 }}>
      <View style={styles.postCard}>
        <View style={styles.header}>
          <Text style={styles.postId}>작성자 {userId}</Text>
          <Text style={styles.postTitle}>{title}</Text>
        </View>
        <View style={styles.body}>
          <Text style={styles.postBody}>{body}</Text>
          <Text style={styles.postBody}>{body}</Text>
          <Text style={styles.postBody}>{body}</Text>
          <Text style={styles.postBody}>{body}</Text>
          <Text style={styles.postBody}>{body}</Text>
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
