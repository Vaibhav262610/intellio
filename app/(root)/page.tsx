import InterviewCard from '@/components/InterviewCard'
import { Button } from '@/components/ui/button'
import { dummyInterviews } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <>
      <section className='card-cta'>
<div className='flex flex-col gap-6 max-w-lg'>
  <h2>Get Intervew-Ready with AI-Powered Practice & Feedback</h2>
    <p className='text-lg'>
      Practice on real interview questions & get instant feedback.
    </p>
    <Button asChild className='btn-primary'>
      <Link href='/interview'>Start an Interview</Link>
    </Button>
</div>
<Image src='/robot.png' alt='robot' width={400} height={400} className='max-sm:hidden' />
      </section>
      <section className='flex flex-col gap-6 mt-8 '>
        <h2>Your Interviews</h2>
        <div className='interviews-section'>
         {dummyInterviews.map((items) => (<InterviewCard {...items} />))}
        </div>
      </section>
      <section className='flex flex-col gap-6 mt-8 '>
        <h2>Take an Interviews</h2>
        <div className='interviews-section'>
        {dummyInterviews.map((items) => (<InterviewCard {...items} />))}
            {/* <p>There are no interviews available</p> */}
        </div>
      </section>
    </>
  )
}

export default page