"use client";
import { useState } from "react";
import { MatchHistory, Player } from "../components/types/types";

const initPlayer: Player[] = [
  {
    name: "ไผ่",
    played: 0,
    score: 0,
    active: false,
  },
  {
    name: "นิกกี้",
    played: 0,
    score: 0,
    active: false,
  },
  {
    name: "เวย์",
    played: 0,
    score: 0,
    active: false,
  },
  {
    name: "แชมป์",
    played: 0,
    score: 0,
    active: false,
  },
  {
    name: "พี่ฟลุ๊ค",
    played: 0,
    score: 0,
    active: false,
  },
  {
    name: "อาย",
    played: 0,
    score: 0,
    active: false,
  },
  {
    name: "อายเด้อ",
    played: 0,
    score: 0,
    active: false,
  },
  {
    name: "บอส",
    played: 0,
    score: 0,
    active: false,
  },
  {
    name: "ต้นหอม",
    played: 0,
    score: 0,
    active: false,
  },
  {
    name: "นที",
    played: 0,
    score: 0,
    active: false,
  },
  {
    name: "ใหม่",
    played: 0,
    score: 0,
    active: false,
  },
  {
    name: "นัท",
    played: 0,
    score: 0,
    active: false,
  },
];

function shuffle<T>(arr: T[]): T[] {
  return [...arr]
    .map((v) => [v, Math.random()] as [T, number])
    .sort((a, b) => a[1] - b[1])
    .map(([v]) => v);
}

export default function Gwan() {
  return (
    <main className="container">
      <h1 className="font-bold">Players in Gwan to day ?</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {initPlayer.map((p) => (
          <div key={p.name} className="glass-frost m-4 p-4 rounded shadow">
            <span className="font-semibold">Name: </span>
            {p.name}
          </div>
        ))}
      </div>
    </main>
  );
}
