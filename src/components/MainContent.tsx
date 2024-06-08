import React from 'react'
import { Card, CardContent, CardHeader } from './ui/card'
import { Button } from './ui/button'
import { Plus } from 'lucide-react'
import LivroCard from './LivroCard'

const MainContent = () => {
  return (
    <Card className='flex-1 border-primary'>
        <CardContent className='h-[100%] flex justify-center flex-wrap overflow-y-auto p-1 gap-3'>
            <LivroCard/>
            <LivroCard/>

            <LivroCard/>
            <LivroCard/>
            <LivroCard/>
            <LivroCard/>
            <LivroCard/>
            <LivroCard/>
            <LivroCard/>
            <LivroCard/>
        </CardContent>
    </Card>
  )
}

export default MainContent
