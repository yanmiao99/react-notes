import React from 'react';
import {history} from "umi";

export default function List() {
  const toDetails = (id: string) => {
    history.push({
      pathname: 'list/' + id,
      query: {
        id
      },
    })
  }





  const liNum = [1, 2, 3, 4, 5]
  return (
    <div>
      <ul>
        {
          liNum.map((item) => {
            return <li onClick={() => toDetails(item.toString())} key={item}>详情页 {item}</li>
          })
        }
      </ul>



    </div>
  );
}
