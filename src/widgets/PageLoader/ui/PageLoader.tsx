import React, { type FC } from 'react'
import { classNames } from 'shared/lib/classNames'
import cls from './PageLoader.module.scss'
import { CircularProgress } from '@mui/material'

interface PageLoaderProps {
  className?: string
}
export const PageLoader: FC<PageLoaderProps> = ({ className }) => {
  return (
       <div className={classNames(cls.PageLoader, {}, [])}>
           <CircularProgress />
       </div>
  )
}
