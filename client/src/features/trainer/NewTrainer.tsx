import React from 'react'
import { useSelector } from 'react-redux'
import { selectCurrentItem } from './trainerSlice'

export function NewTrainer() {
  const currentItem = useSelector(selectCurrentItem)

  const a = { a: 50 }

  return <div></div>
}
