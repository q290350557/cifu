"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { getRole } from "../lib/store";

export default function Nav(){
  const [role,setRoleState]=useState("");
  useEffect(()=>setRoleState(getRole()),[]);
  return <div className="nav"><div className="wrap" style={{display:"flex",alignItems:"center",justifyContent:"space-between",width:"100%"}}>
    <Link href="/" className="logo">瓷服联盟</Link>
    <div className="navlinks">
      <Link href="/demands">需求大厅</Link>
      <Link href="/services">服务机构</Link>
      <Link href="/match">AI匹配</Link>
      <Link href="/dashboard">工作台</Link>
    </div>
    <Link className="btn" href={role?"/dashboard":"/login"}>{role?"进入工作台":"登录 / 注册"}</Link>
  </div></div>
}
