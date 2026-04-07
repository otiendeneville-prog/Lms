import { Stack } from "expo-router";
import {
  Text,
  Image,
  StyleSheet,
  View,
  ScrollView,
  FlatList,
  TouchableOpacity,
  
} from "react-native";
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
  {
 id:"22",
  title:"Python basics",
  instructor:"Tessy",
  progress: 20,
  thumbnail:"https://api.dicebear.com/7.x/initials/svt?seed=JD", 
  }
 
];

function LogoTitle() {
  return (
    <View style={styles.headerTitle}>
      <Image
        style={styles.image}
        source={{
          uri: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJQAAACUCAMAAABC4vDmAAABOFBMVEUBAQEAAAAArfHrHygEAAAIAAAFjcdlZWUAsfdubm5ra2sGAAkKhb1LS0sDg7YAsvNTU1NcXFwKCgoAuf9BQUETExPxICkGHCw2NjZGRkYcHBxzc3MGHiwESWIhISExMTEDGSEpKSkGLT4HSGWBgYHgHyfR0dEmAADKHCQFdaK7GiKsGB4wAAAIQVwIcJc3AABFAAAHYogIVW8FOVANExgJKkAHFBQAVnlzEBq5NTucFh4LOkoIcKIXAAB6EBX3h4nsU1f/IytaCRP5O0NQBxTvDRw/DQ+QFh4oIBoeDAB2MTJhh5p22PtZZGuB0OlUmbxHWlR+u9FRudtldHoFpN0Gk8NRx/n3en1WyfBao71Vd4vSc3Z0zvngWF4JGhIILzizZ2+odHeMdHq+Vll4mKrs7OyhoaG0tLQV+yPNAAAN5UlEQVR4nO1cDXvaOBL2gIyxu/6QYyhgvgMJkISGkCZcUmiaTdPbu/T2btek7V72eh+7d///H5xky9iAZTtf3e7zZEipZYT0zqvxaDSWEUBYej1Y8T4NCV+lPDGVVr5SpuBL0AW36gWgRL/hyWMxBWA2Qp0kMmUUOpbaKltqqWXxtUlWNK4G1I1Gp2FU1LLVKJViWvIbkY2OIkmybMtl2ddjTQUwpUY8jwDYWvr20meqIsuSbdi2LGGJ3xBYhukeK9hWZYXUdUHxNDAVNZ4qAAnzv16XbNvqkD4wBcVvRJXq7qeK0bGxrGBFNmKYKtjlJKZsg8+UgW0yFlgif0ocU1iquMfYMgxDVS1VVRS+qpBoVHE1oIFJH9hSjbIlKzFMAXMFi4uiREeIy0XyRbPC8upnTBq2Gkc5OwqrGs/Fg0i6XuKUf5r7wvLEVFr5Kpn6KkF9lfKITHFmnVARoj/lIL1XpLKoceeZKUoFqNiN+HkFBDpdxDIFSniGjuwGS2ZkN9FAK7KVGKkYSTxgfizDahhSgQMgkimllMCUKZWTmJISmTJwIT1TD2JT92kkTtsnPxWWJ6bSyhNTaeV3yhSCsDw6S1QSVABAqD0ajg4298bt5qEppNX33kzxPStCtaE2fBmmCvG0S+Hik2uAzxSYrSDCWebpSMsdm7A92fnDoNcbDE4mu0E6Z6VyvZDABVQqCUxBoR603eo0ovp5hk4zr2A66xWL2ddn5C1bJNI7mVwKLmFLQRzIOCGqA8mPVLigDMXLJVCyWp3IpJF4qo/gkkLKdl+fvS2+efOmSN/edAfvpitD7oGKHxsKKr6GoXhZF5dXtb6ugoAO9T6cZwkkImffdnuzi6kA5vb5bKfXLfZm28tMlUtJTFmlaCsJzpasgs9UtKEj1M9UX3Q9TNm3O/tha7+cnPS6g8uQj0jhLtLXiMZMXqjtvIJB0QPVPafVQzEbMarLk+7gfMoL5LjtpijyUaODDdhlPBUnaxVpQ+JkZzB5DIfKwwzQz8A7D1RxJ1IjWmn73eBcBPSFmAKU0xajdx6T4ts+OZk8NFlcpoRMX+x5o9eNUZC8707eXX4hpoTMK7HnEdVLWm/tzibbD2lbfKacPnhMFXvx7kVwfcQlelSmXJ0BzYlNZRlTKRzMxcU28SO3YCPuzsMaZhAKroPUcnDCbAqEZAVhenEpcJVfLZLJVwhHafFMQcVqKY1GpfTHof7dn5jr3I1wUxGnprvTdOlmEEp12bIqjVKj3mpENLWqAqZ3BmTDVv589R6/9aiarBuR2lpftoM4FYPC0mS4UrVkK4piY8WmnaVgqqXIuNwxFOn9X77/q3f5Eee5UpGX4ICpuJgMYxIcUFBt25JkrGCJgkpkSpIVqaNgWcJ/+wHP2PixiCAQsxOkL3yjYAX/pC0tx4Nh+ylJiiwrCr2DFMXUGihVwYakqBgbP179uNt1Qb2ZkKCOfIrM2qYrY6gUWFsIjTdrR7Bm91AoQLO2ORZdxZGIzPHe5uZeWxQRHQ7SPukIq2W5k2L4Aildfc+uvyJzn+JRxhMtsGIkaKQsRrWEND2fo14CAar2c+R7esbJjZ5BaIFkyimGL4xqtCFMgzCBflT1MOkuKDZez77JZ/KauaIv+RM18kFOJAhQe76h573v5vMb/ebysu026z6xnenDjmfqA5cKqOYXoBZaUVCZfF98tqKtOKTnCSgBbToMEdPJqQZeNupqWGcqVBg6pyz2LE5cakKglpgivY/E5e+ivq67oASoLUFyUX1G3F7jmRKQmO/7MVXXnXu4TBE5RqHWEIkR9YwLCppOZlXyGtddJDFFo89T8H0VtTY+U6SjzYArEI8z7lkCyh1Gz5qIjbHjjbF4R6YEZOZyZEGT9SO9WKb0zKl/DQIa+0By4mGOHTr90ajv6KwF8a5MAbwkS78TjyoS6qE4pjK63qZLVDp2NX/ECKimzkasiURRPJx7DDrP7soUab+vtyGYbJoxTBFhV5XYZny4oNob3mdt5PqJKgNVvVXosvxqkgHcp36dAJvBEYcpnbGRe07PtAMPEAJ16F5w5FNPzASm4iJZ1Cbr5FnRyyRcwHEEU9o1Fd19n7cANRc8ecPHDg9WHWYEQ8FiFOpyhRvwCmiU34STD2euWe2DeyktM6XdfLy5ubm6Iv9ubuYgzvUlUIe+fX36qdo8MgGtD4f/n4pNf9kOFTlmVwyI/Uwb/n5WdFFtQz+/ZlPXVzfXH8m/a/LfRl8LIHkuoc8G8+PVhu7M+6PaEUKR/UFZChIcnFQQK6JnjlPt/PzWm25ImKyvMkVIuvp4dXVNmQoj8kChGju+uSFlPU8mZU1EUR4dDGmRCkrKPMCRk4Pd7mIS1PJrNuUZFJGrdVACDF1TD42pnjlOsqk4P+W+oVM3KeQv4Z/No/0UuQg/3vgd6yFQSFuZ/Ihnr93ZozMRxb38EC6yxcUIamjdT+XJRbfoXHeC4SNmOc5lNlaAte/spxhwQMf5A5gtuDqqRTC1EXZPzkEYFHmdjkgsmN9YQMuP+MuKVKDowQGZb1har9jzQ/ZlUM9FH1V+/o9aMHyu7nSKEUWhPcot+d+7D59Ao5iRTrliqELRbwgUGnuodKcpBqA8OMjN3BInZXqTn56L6TwlUwTVMeWKXYO9i0ViLwwKPlNnnichHASght9oROYjlsRCbGAd4d5M0VXLiFzIPqquh4pKCJRAwwOd2DCEQPWpHZE46rkbmCPmS3UnJlWclinyEmv6EHZZyEBmZ7IeaLc/N8UwKIKKhANCGNSBb9vH7WqzOu77AdX9bUpwedl0+vCi56X3iiciKTvOqzAoUunUC1ECUE3fZeUzuZzjew2i322Zip51EIz1eZMtcNyLcJzb6ItaYFOe1QhLw0dnAN97BW7K+czthrdXoRCtBln3beQ+07WENz2fw6HWR1qIqUXNmhdjUVBtZ2XuoZUPCHSTs1cikimo2JzNEtU80XpMzf01DRvoEDZFFhb4THlM15ybj8xPiaeZ1RkxP6RrVHybzRIEVPS2ErpwIAQcwIvBh5+LzDfAKJqpm2vmp0Bs55bCmXzmQETurZhbbSvBnA04Vd0VDab/PGO+YSbCeE5PLjO1mbm+Jgro1KMDHB4TV5F3v5vPOEPvWgDDeIhtJfA854rjnMLM9Vj0Xts5IYuebYaZGns1c313miHuaTzSNFLW+jWEEIrt5jZ+inrvapPI82bfOYYXO8w3dE/IMofIUvXDJhM3X+o5WrPZPELBVM7tJhopV1jML4oHGa0KE5ZnJ2O4thRYXx9MEXfBcD+mFppAO0fsfZe5rGx2cLGeCloqwvRC5Lrw+zEVZmKU0dpw7vl3Ylo75/E5i+2ZmXBj9J5MuS/RJWv6jt07LWZ3tvnTGcD+ydHRYzMl0KThnuNsApyw26fF4mASkWZkdd+dNOMi4Adiir6qw7wmwL5/C66Y7c2iM4YA2Vn1Zep27wGK/hU0ffgZdgcLtrI757vroLZ73cuXe6lBJSzvE5lGtblDwpB95rVcuqjRL8l59+0OHL9M20kLOvV6oVKpVwqVCNYD6BwFybt4OndGbde2fFzunorz/cvpdLp9eT7rfdv9cNQaflehEuc82ZFd7iiKISu2ZElcLcC0eFGGQHNkYi3nfP+ZXPXUuPxxLGa73R6Rbvbt2euf/4V/eS/bCsY4JrZrlTwIGNuWrCjsuRmOClCQYx9RIYHd808fc5tN2H5HQPge1duHQt6//fBv+adPhnvXI+4RFZVtK1GMjowTH+YpdBIf5pHfj3JOn4zi/myn64FZAPuPJP3ySU5+mAfLXtbFNmxZlkhdLCt8psxSPX4eBbBaYLaHTm44rsL0xWRn0GUymOxaP/7wCdsGVgxsKzFMtUpefsoUCiYUTNMsyXybSsrLCGwCJlPu3lDLaaMxLW2/2N/fpV6+ps3JOp/0YQotO4apIOviS6FVSHQgKYoIHbZrw3mOJsf2Tsd7tZE218bNcC+JDd2GjHTiBSiofTDqUxkejxEKtqc9YuiSouhBQ4hNObdq6EHI4VEmuEnEO8ijMXWPhh6anoeRJ6bSyu+HqVQOPFHduzcShRkKuM4NoNgBXdjHMgVG+BngyG7KZSGyGw4oxUoAtfwASiQojBNBSbfJutQ7SQ/z0G0lCWNjx0zwXg3pVlkXwd/6wGfKXN0dsT7NmElMgckZvmikX6GhP0TxPg0lqfvbyBNTaeWJqbTyxFRa8ZAmqhDv4L0aiVyk7cbFlZyg+cI1KLyWHfE0SLgIBdm9WcNnCkBZfrJ1vSpgQ0joxn+yVXBvxcT92AqtYUr3+bUSVsVIfG7GCj0307LjtpW4TNlWElMy99dKfKYknPiEkVSBUJPpLJAP6sEN/euTOOWfnGdYnphKK09MpZXfB1P3vVmTjor4TlYx00dcccEky1GaYuZrFD/rePNKDDUm4IbXRcSqdh1k2S5LimQpGEuqweMKoBVzs8ar0qrw0/ItBStYLmNZMoyI1f0aU5ZCatrYlqUO/VG0aC5AkBN/rUSKSXDUVds2JHqbSlLSPA3SwmpZxZahlrFV5t6sATUhBULiEJVrk1AwDKOEVVW1yuWI4VjXdtkIH8mmIK4bX3HAj37FRVK2hi5gCuTSVkluSIa6+KmVaAXTF1NVBbNRqRQKDQtKpZJFpBAwBcbW1q///ZW8bW1tJUTGD0sUCbOxhMtWXZUakiqpjdDe4QrB09na6mz9j4L6gkxRsup0Yxt9Uefonv4/SERGTzDtWbQAAAAASUVORK5CYII=",
        }}
      />
      <Text style={styles.headerText}> Educational LearnApp</Text>
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
          headerShown:"false",
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
          {/* <View style={styles.subContainer}></View> */}

          <TouchableOpacity style={styles.button} onPress={()=> console.log("Button Clicked!")}>
            <Text style={{textAlign:'center',
              fontSize:'17',
              color:'grey',           
            }}>Let's Get Started</Text>
          </TouchableOpacity>
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

  // subContainer:{
  //   width:"100%",
  //   backgroundColor:"#FFD700",
  //   height:"20%",
  //   marginTop:"40",
  // },
  button:{
   padding:15,
   borderRadius:99,
   marginTop:10,
   backgroundColor:"yellow",
   },

});
