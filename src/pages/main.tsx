import * as React from 'react';
import { useState, useEffect } from 'react';

export interface IMainPageProps {}

export default function MainPage(props: IMainPageProps) {
  const [items, setItems] = useState([]);
  useEffect(() => {}, [items]);
  return <div></div>;
}
