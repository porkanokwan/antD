import {Table, Row, Col} from "antd"
import './App.css';

function App() {
  const students = [
  {
    "first_name": "Nona",
    "last_name": "St. Hill",
    "email": "nsthill0@miitbeian.gov.cn",
    "gender": "Female",
    "university": "Istanbul Arel University"
  }, 
  {
    "first_name": "Felice",
    "last_name": "Wilcocke",
    "email": "fwilcocke1@nytimes.com",
    "gender": "Male",
    "university": "University of Maryland Baltimore County"
  }, 
  {
    "first_name": "Chester",
    "last_name": "Ruske",
    "email": "cruske2@spotify.com",
    "gender": "Male",
    "university": "Rafsanjan University of Medical Sciences"
  }, 
  {
    "first_name": "Christye",
    "last_name": "Biddy",
    "email": "cbiddy3@sakura.ne.jp",
    "gender": "Female",
    "university": "Universidad Cientifica Latinoamericana de Hidalgo"
  }, 
  {
    "first_name": "Naoma",
    "last_name": "Bithell",
    "email": "nbithell4@is.gd",
    "gender": "Female",
    "university": "Kashan University of Medical Sciences"
  }, 
  {
    "first_name": "Adore",
    "last_name": "Spaldin",
    "email": "aspaldin5@wunderground.com",
    "gender": "Female",
    "university": "Canisius College"
  }]

  const column = [
    {
      title: "ชื่อจริง",
      dataIndex: "first_name"
    },
    {
      title: "นามสกุล",
      dataIndex: "last_name"
    },
    {
      title: "เพศ",
      dataIndex: "gender"
    },
    {
      title: "อีเมล์",
      dataIndex: "email"
    },
    {
      title: "มหาวิทยาลัย",
      dataIndex: "university"
    },
  ]

  return (
    <div className = "App">
      <Row justify="center">
        <Col xs={24} sm={22} md={18} lg={16} xl={22} xxl={14} span={24} >
          <Table columns={column} dataSource={students} bordered size="middle"/>
        </Col>
      </Row>
    </div>
  )
}

export default App;
