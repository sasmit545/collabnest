import React from 'react';
import { LeaderboardHeader } from '@/components/leaderboard/LeaderboardHeader';
import { LeaderboardTable } from '@/components/leaderboard/LeaderboardTable';   
import { Card, CardContent } from "@/components/ui/card";


import Image from 'next/image';
import Link from 'next/link';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import {CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";


const mockLeaderboardData = [
  {
    id: '1',
    name: 'Hugh Jass',
    department: 'Electrical Engineering',
    points: 1842,
    activeDomains: ['Computer Science Engineering', 'Web Development', 'React']
  },
  {
    id: '2',
    name: 'Hugh Jass',
    department: 'Electrical Engineering',
    points: 1842,
    activeDomains: ['Computer Science Engineering', 'Web Development', 'React']
  },
  {
    id: '3',
    name: 'Hugh Jass',
    department: 'Electrical Engineering',
    points: 1842,
    activeDomains: ['Computer Science Engineering', 'Web Development', 'React']
  },
  {
    id: '4',
    name: 'Hugh Jass',
    department: 'Electrical Engineering',
    points: 1842,
    activeDomains: ['Computer Science Engineering', 'Web Development', 'React']
  },
  {
    id: '5',
    name: 'Hugh Jass',
    department: 'Electrical Engineering',
    points: 1842,
    activeDomains: ['Computer Science Engineering', 'Web Development', 'React']
  },
  {
    id: '6',
    name: 'Hugh Jass',
    department: 'Electrical Engineering',
    points: 1842,
    activeDomains: ['Computer Science Engineering', 'Web Development', 'React']
  },
  {
    id: '7',
    name: 'Hugh Jass',
    department: 'Electrical Engineering',
    points: 1842,
    activeDomains: ['Computer Science Engineering', 'Web Development', 'React']
  },
  {
    id: '8',
    name: 'Hugh Jass',
    department: 'Electrical Engineering',
    points: 1842,
    activeDomains: ['Computer Science Engineering', 'Web Development', 'React']
  },
  {
    id: '9',
    name: 'Hugh Jass',
    department: 'Electrical Engineering',
    points: 1842,
    activeDomains: ['Computer Science Engineering', 'Web Development', 'React']
  },
  {
    id: '10',
    name: 'Hugh Jass',
    department: 'Electrical Engineering',
    points: 1842,
    activeDomains: ['Computer Science Engineering', 'Web Development', 'React']
  },
  {
    id: '11',
    name: 'Hugh Jass',
    department: 'Electrical Engineering',
    points: 1842,
    activeDomains: ['Computer Science Engineering', 'Web Development', 'React']
  },
  {
    id: '12',
    name: 'Hugh Jass',
    department: 'Electrical Engineering',
    points: 1842,
    activeDomains: ['Computer Science Engineering', 'Web Development', 'React']
  }
  
];

export default function LeaderboardPage() {
  return (
    <>
      
      <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <LeaderboardHeader />
        <Card>
          <CardContent className="pt-6">
            <LeaderboardTable entries={mockLeaderboardData} />
          </CardContent>
        </Card>
      </div>
    </>
  );
}