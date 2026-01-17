import React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
} from 'react-native';

/* ===== DATA ===== */
const notifications = [
  {
    id: '1',
    title: 'Bước 1 Xác định nhu cầu khách hàng',
    content: 'Vũ Văn Hoàng sắp đến hạn lúc 01/08/2020 9:00',
    time: '20/08/2020, 06:00',
  },
  {
    id: '2',
    title: 'Bạn có khách hàng mới!',
    content: 'Chúc mừng bạn, bạn có khách hàng mới. Hãy mau chóng liên lạc ngay.',
    time: '20/08/2020, 06:00',
  },
  {
    id: '3',
    title: 'Khách hàng được chia sẻ bị trùng',
    content: 'Rất tiếc, khách hàng được chia sẻ đã tồn tại trên hệ thống.',
    time: '20/08/2020, 06:00',
  },
  {
    id: '4',
    title: 'Công việc sắp đến hạn trong hôm nay',
    content: 'Bạn có 17 công việc sắp đến hạn trong hôm nay.',
    time: '20/08/2020, 06:00',
  },
  {
    id: '5',
    title: 'Công việc đã quá hạn',
    content: 'Bạn có 17 công việc bị quá hạn. Hãy kiểm tra và lên kế hoạch hoàn thành.',
    time: '20/08/2020, 06:00',
  },
];

/* ===== RENDER ITEM ===== */
const renderItem = ({ item }) => {
  return (
    <View style={styles.item}>
      <View style={styles.icon} />

      <View style={styles.textContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.content}>{item.content}</Text>
        <Text style={styles.time}>{item.time}</Text>
      </View>
    </View>
  );
};

/* ===== MAIN APP ===== */
export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Thông báo</Text>

      <FlatList
        data={notifications}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

/* ===== STYLE ===== */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  item: {
    flexDirection: 'row',
    padding: 12,
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
  icon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#2e5aac',
    marginRight: 12,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  content: {
    fontSize: 14,
    color: '#555',
    marginTop: 2,
  },
  time: {
    fontSize: 12,
    color: '#999',
    marginTop: 4,
  },
});