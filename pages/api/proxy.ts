// const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware')
export default function handler(req, res) {

let proxy = createProxyMiddleware({
  target: "http://5.17.8.225:55685"
})
console.log(proxy)
  res.status(200).end('proxied');
}
