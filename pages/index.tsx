import Link from 'next/link';
import type { InferGetStaticPropsType } from 'next';
import type { Repository } from '../types/github';
import { data } from '../data.json';
import { Row, Col, Card } from 'antd';
let id = 0,
  dataRows = [];

for (let item of data) {
  id = id + 1;
  // console.log(id, item);

  dataRows[id] = { id: item };
}

console.log(dataRows);
export async function getServerSideProps() {
  return []
}
export async function getStaticProps() {
  const res = await fetch('https://api.github.com/repos/vercel/next.js', {
    method: 'GET',
    headers: {
      Accept: 'application/json',
     // Authorization: 'Bearer ' + process.env.YM_TOKEN,
    },
  });
  // const res2 = await api.get('/stocks');
  const data: Repository = await res.json();
  return {
    props: {
      stars: data.stargazers_count,
      skus: data,
    },
  };
}

export default function IndexPage({
  stars,
  
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
  
  
  <h1>200</h1>
    
    </>
  );
}
