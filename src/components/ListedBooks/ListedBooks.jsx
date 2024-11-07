import React, { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoredReadList } from "../../assets/utilities/addToLocal";
import { useLoaderData } from "react-router-dom";
import Book from "../Book/Book";
//ideally we get the read list from the database. but here we don't have any db. so, we are using localstorage.
const ListedBooks = () => {
    const [readList, setReadList] = useState([])
    const allBooks = useLoaderData();
    console.log(allBooks);
    useEffect( () =>{
        const storedReadList = getStoredReadList();
        const storedReadListInt = storedReadList.map(id => parseInt(id));
        
        const readBookList = allBooks.filter(book => storedReadListInt.includes(book.bookId));
        setReadList(readBookList);
        console.log(readBookList);
    },[])
  return (
    <div>
      <h2>Listed Books</h2>
      <Tabs>
        <TabList>
          <Tab>Read List</Tab>
          <Tab>Wish List</Tab>
        </TabList>

        <TabPanel>
          <h2>Book I Read: {readList.length} </h2>
          <h4>Read Books</h4>
          {
            readList.map(book => <Book book={book} key={book.id}></Book>)
          }
        </TabPanel>
        <TabPanel>
          <h2></h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ListedBooks;
