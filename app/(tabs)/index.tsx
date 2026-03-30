import { Stack } from "expo-router";
import {Text,Image,StyleSheet,View,ScrollView,FlatList,} from "react-native";
import { Pressable } from "react-native";
import { Link } from "expo-router";

type Course = {
  id: string;
  title: string;
  instructor: string;
  progress: number;
  thumbnail: string;
};

const courses: Course[] = [
  {
    id: "1",
    title: "Introduction to Lms",
    instructor: "Neuville",
    progress: 5,
    thumbnail: "https://picsum.photos/id/1/200/200",
  },
  {
    id: "2",
    title: "JavaScript Fundamentals",
    instructor: "Churchill",
    progress: 10,
    thumbnail: "https://via.placeholder.com/200x200",
  },
  {
    id: "3",
    title: "UI/UX Design Basics",
    instructor: "Alice Johnson",
    progress: 15,
    thumbnail: "https://api.dicebear.com/7.x/initials/svg?seed=JD",
  },
];

function LogoTitle() {
  return (
    <View style={styles.headerTitle}>
      <Image
        style={styles.image}
        source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }}
      />
      <Text style={styles.headerText}>LearnApp</Text>
    </View>
  );
}

function ProgressBar({ progress }: { progress: number }) {
  return (
    <View style={styles.progressContainer}>
      <View style={[styles.progressBar, { width: `${progress}%` }]} />
    </View>
  );
}

function CourseCard({ course }: { course: Course }) {
  return (
    <Link href={`/course/${course.id}`} asChild>
      <Pressable style={styles.card}>
        <Image source={{ uri: course.thumbnail }} style={styles.thumbnail} />
        <View style={styles.cardContent}>
          <Text style={styles.courseTitle}>{course.title}</Text>
          <Text style={styles.instructor}>👤 {course.instructor}</Text>
          <ProgressBar progress={course.progress} />
          <Text style={styles.progressText}>{course.progress}% complete</Text>
        </View>
      </Pressable>
    </Link>
  );
}

export default function Home() {
  return (
    <>
      <Stack.Screen
        options={{
          headerTitle: () => <LogoTitle />,
          headerStyle: { backgroundColor: "#4F46E5" },
          headerTintColor: "#8888",
        }}
      />

      <ScrollView style={styles.container}>
        <View style={styles.banner}>
          <Text style={styles.welcomeText}>Welcome back, Student 👋</Text>
          <Text style={styles.subText}>Continue where you left off</Text>
        </View>

        <View style={styles.statsRow}>
          <View style={styles.statBox}>
            <Text style={styles.statNumber}>3</Text>
            <Text style={styles.statLabel}>Courses</Text>
          </View>
          <View style={styles.statBox}>
            <Text style={styles.statNumber}>12</Text>
            <Text style={styles.statLabel}>Lessons Done</Text>
          </View>
          <View style={styles.statBox}>
            <Text style={styles.statNumber}>58%</Text>
            <Text style={styles.statLabel}>Avg Progress</Text>
          </View>
        </View>

        <Text style={styles.sectionTitle}>My Courses</Text>
        <FlatList
          data={courses}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <CourseCard course={item} />}
          scrollEnabled={false}
        />
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F3F4F6",
  },
  headerTitle: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  headerText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  image: {
    width: 32,
    height: 32,
    borderRadius: 16,
  },
  banner: {
    backgroundColor: "#4F46E5",
    padding: 24,
    paddingBottom: 32,
  },
  welcomeText: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
  },
  subText: {
    color: "#C7D2FE",
    fontSize: 14,
    marginTop: 4,
  },
  statsRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#fff",
    marginHorizontal: 16,
    marginTop: -16,
    borderRadius: 12,
    padding: 16,
    elevation: 4,
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)",
  },
  statBox: {
    alignItems: "center",
  },
  statNumber: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#4F46E5",
  },
  statLabel: {
    fontSize: 12,
    color: "#6B7280",
    marginTop: 2,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#111827",
    marginHorizontal: 16,
    marginTop: 24,
    marginBottom: 12,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 12,
    marginHorizontal: 16,
    marginBottom: 12,
    flexDirection: "row",
    overflow: "hidden",
    elevation: 2,
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)",
  },
  thumbnail: {
    width: 90,
    height: 90,
  },
  cardContent: {
    flex: 1,
    padding: 12,
    justifyContent: "center",
  },
  courseTitle: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#111827",
  },
  instructor: {
    fontSize: 12,
    color: "#6B7280",
    marginTop: 2,
    marginBottom: 6,
  },
  progressContainer: {
    height: 6,
    backgroundColor: "#E5E7EB",
    borderRadius: 4,
    overflow: "hidden",
  },
  progressBar: {
    height: 6,
    backgroundColor: "#4F46E5",
    borderRadius: 4,
  },
  progressText: {
    fontSize: 11,
    color: "#6B7280",
    marginTop: 4,
  },
});
