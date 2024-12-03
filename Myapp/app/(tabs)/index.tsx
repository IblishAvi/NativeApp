import React,{useState} from 'react';
import { View, Text, StyleSheet,FlatList,ScrollView } from 'react-native';
import { Icon, MD3Colors,DataTable } from 'react-native-paper';




const recentHistory = [
  {FarmerId:"AB123", date: "NOV-10", totalMilk: "20L", earnings: "1000" },
  {FarmerId:"AB123", date: "NOV-09", totalMilk: "19L", earnings: "₹950" },
  {FarmerId:"AB123", date: "NOV-08", totalMilk: "21L", earnings: "₹1050" },
  {FarmerId:"AB123", date: "NOV-07", totalMilk: "18L", earnings: "₹900" },
  {FarmerId:"AB123", date: "NOV-06", totalMilk: "20L", earnings: "₹1000" },
];
const Widget = () => {
  const [page, setPage] = useState<number>(0);
  const [numberOfItemsPerPageList] = useState([10]);
  const [itemsPerPage, onItemsPerPageChange] = useState( numberOfItemsPerPageList[0]);

  const [items] = React.useState([
    {
      key: 1,
      name: 'Shivji',
      Rank: 1,
      date: '21-nov',
    },
    {
      key: 2,
      name: 'ShivChandra',
      Rank: 2,
      date: '21-nov',
    },
    {
      key: 3,
      name: 'ShivShankar',
      Rank: 3,
      date: '21-nov',
    },
    {
      key: 4,
      name: 'Rambabu Sah',
      Rank: 4,
      date:'21-nov',
    },
    {
      key: 5,
      name: 'Ranjit Sah',
      Rank: 5,
      date: '21-nov',
    },
    {
      key: 6,
      name: 'Chote Lal Paswan',
      Rank: 7,
      date: '21-nov',
    },
    {
      key: 8,
      name: 'Pradeep Paswan',
      Rank: 8,
      date: '21-nov',
    },
    {
      key: 9,
      name: 'Rajkumar',
      Rank: 9,
      date: '21-nov',
    },
   ]);
   const from = page * itemsPerPage;
   const to = Math.min((page + 1) * itemsPerPage, items.length);
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <Text style={styles.ID}>ID:1234</Text>
        <View>
          <Text style={styles.Header}>Milk Information</Text>
          <View style={styles.TotalMilk}>
            <View style={styles.MilkContainer}>
              <Icon source="water-outline" color={MD3Colors.primary50} size={35} />
              <Text style={{ fontSize: 20, padding: 3 }}>TotalMilk</Text>
              <Text style={{ fontSize: 16, marginLeft: 100, padding: 8 }}>15000L</Text>
            </View>
          </View>
          <View style={styles.RateContainer}>
            <Icon source="currency-inr" size={35} />
            <Text style={{ padding: 3, fontSize: 20 }}>Rate</Text>
            <Text style={{ fontSize: 16, paddingLeft: 160, paddingTop: 5 }}>$45/L</Text>
          </View>
          <View style={styles.RateContainer}>
            <Icon source="chart-box" size={35} />
            <Text style={{ fontSize: 20 }}>Consistency</Text>
            <Text style={{ fontSize: 16, paddingLeft: 160, padding: 4 }}>90%</Text>
          </View>
        </View>
      </View>
      <View>
        
      </View>
      <View style={styles.Container2}>
      <DataTable>
      <DataTable.Header>
        <DataTable.Title>Farmers Name</DataTable.Title>
        <DataTable.Title numeric>Rank</DataTable.Title>
        <DataTable.Title numeric>date</DataTable.Title>
      </DataTable.Header>

      {items.slice(from, to).map((item) => (
        <DataTable.Row key={item.key}>
          <DataTable.Cell>{item.name}</DataTable.Cell>
          <DataTable.Cell numeric>{item.Rank}</DataTable.Cell>
          <DataTable.Cell numeric>{item.date}</DataTable.Cell>
        </DataTable.Row>
      ))}

      <DataTable.Pagination
        page={page}
        numberOfPages={Math.ceil(items.length / itemsPerPage)}
        onPageChange={(page) => setPage(page)}
        label={`${from + 1}-${to} of ${items.length}`}
        numberOfItemsPerPageList={numberOfItemsPerPageList}
        numberOfItemsPerPage={itemsPerPage}
        onItemsPerPageChange={onItemsPerPageChange}
        showFastPaginationControls
        selectPageDropdownLabel={'Rows per page'}
      />
    </DataTable>
      </View>
     
    <View>
    <View style={styles.widgetContainer}>
        <Text style={styles.widgetTitle}>Recent History</Text>
        <FlatList
          data={recentHistory}
          keyExtractor={(item) => item.date}
          renderItem={({ item }) => (
            <View style={styles.historyItem}>
              <Text style={styles.FarmerId}>{item.FarmerId}</Text>
              <Text style={styles.historyDate}>{item.date}</Text>
              <Text style={styles.historyDetails}>Milk: {item.totalMilk}</Text>
              <Text style={styles.historyDetails}>Earnings: {item.earnings}</Text>
            </View>
          )}
        />
      </View>
    </View>
    
      </ScrollView>
      
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    paddingBottom: 20, 
  },
  container: {
    display: 'flex',
    width: '100%',
    backgroundColor: '#00F0FF',
    justifyContent: 'center',
    borderRadius: 20,
    marginLeft: 2,
    marginRight: 10,
    marginVertical: 10,
    padding: 20,
  },
  Container2:{
    backgroundColor:'#00F0FF',
    margin:4,
    borderRadius:25,
    padding:20,
    fontSize:30,
  },
  TotalMilk: {
    display: 'flex',
    flexDirection: 'row',
    color: '#000000',
    padding: 1,
    fontSize: 30,
    textAlign: 'center',
  },
  MilkContainer: {
    display: 'flex',
    padding: 6,
    backgroundColor: '#F3D5FC',
    flexDirection: 'row',
    height: 50,
    fontSize: 30,
    width: '100%',
    borderRadius: 50,
    alignItems: 'center', 
  },
  RateContainer: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#F3D5FC',
    marginTop: 10,
    height: 50,
    width: '100%', // Use percentage width for React Native
    padding: 10,
    borderRadius: 50,
    alignItems: 'center', // Align items vertically
  },
  Header: {
    color: 'blue-gray',
    fontWeight: 'bold',
    fontSize: 26,
    paddingLeft: 65,
    display: 'flex',
    justifyContent: 'space-between',
  },
  ID: {
    textAlign: 'right',
    justifyContent: 'flex-end',
    borderRadius: 50,
  },
  FarmerId:{
    marginLeft:0,
    paddingLeft:10,
    paddingTop:5

  },
  info:{
    fontSize:18,
    marginRight:0,
    },
    widgetContainer: {
      backgroundColor: '#00F0FF',
      marginBottom: 20,
      padding: 20,
      paddingTop:10,
      borderRadius: 20,
      shadowColor: '#F0F0F1',
      shadowOpacity: 0.1,
      shadowRadius: 10,
      elevation: 5,
      borderWidth: 1,
      borderColor: '#eee',
    },
  widgetTitle: {
      fontSize: 24,
      fontWeight: 'bold',
      color: '#F0F0F1',
      marginBottom: 15,
      textAlign: 'center',
      textTransform: 'uppercase',
      letterSpacing: 1.2,
      paddingBottom: 10,
      borderBottomWidth: 2,
      borderBottomColor: '#ddd',
    },
   historyItem: {
      paddingVertical: 14,
      borderBottomWidth: 1,
      borderBottomColor: '#f0f0f1',
      marginBottom: 10,
      backgroundColor:"#F0F0FF",
      borderRadius:20,
      padding:5,
      color:"#ffffff",
      fontWeight:700,
    },
    historyDate: {
      fontSize: 18,
      fontWeight: '600',
      color: '#333',
      marginLeft:100,
      paddingLeft:120,
    },
    historyDetails: {
      fontSize: 20,
      paddingHorizontal:6,
      color: '#555',
    },
});

export default Widget;
