// import './header.css';
import { Menu } from 'antd';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { UsergroupAddOutlined, HomeOutlined, HeartOutlined } from '@ant-design/icons';

const Header = () => {
        const [current, setCurrent] = useState('');
        const onClick = e => {
        console.log('click ', e);
        setCurrent(e.key);
    };
    const items = [
  {
    label: <Link to ={"/"}>Home</Link>,
    key: 'home',
    icon: <HomeOutlined />
  },
  {
    label: <Link to = {"/users"}>Users</Link>,
    key: 'users',
    icon: <UsergroupAddOutlined />,
  },
  {
    label:<Link to ={"/books"}>Books</Link>,
    key: 'books',
    icon: <HeartOutlined />
   
  },

    ];

    return (
      <Menu 
      onClick={onClick} 
      selectedKeys={[current]} 
      mode="horizontal" 
      items={items} 
      />
    )
};

export default Header;