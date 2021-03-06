import React from 'react';
import './App.css';
import Customer from './components/Customer';

const customers = [
  {
    'id' : 1,
    'image' : 'https://placeimg.com/64/64/any',
    'name' : '홍길동',
    'birthday' : '961222',
    'gender' : '남자',
    'job' : '대학생',
  },
  {
    'id' : 2,
    'image' : 'https://placeimg.com/64/64/1',
    'name' : '나나나',
    'birthday' : '961666',
    'gender' : '남자',
    'job' : '프로그래머',
  },
  {
    'id' : 3,
    'image' : 'https://placeimg.com/64/64/2',
    'name' : '다다다',
    'birthday' : '968888',
    'gender' : '여자',
    'job' : '사육사',
  }
]

function App() {
  return (
    <div>
      {
        customers.map(c => {
          return (
            <Customer 
              key={c.id}
              id={c.id}
              image={c.image}
              name={c.name}
              birthday={c.birthday}
              gender={c.gender}
              job={c.job}
            />
          );
        })
      }
    </div>  
  );
}

export default App;
