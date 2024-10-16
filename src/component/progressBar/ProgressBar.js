import { useEffect } from 'react'
import { useStorage } from '../hooks/UseStorage'
import { motion } from 'framer-motion'

export const ProgressBar = ({file, setFile}) => {
  
  
  const{progress, url} = useStorage(file)
  
  useEffect(() => {
    if (url) {
      setFile(null)
    }
  }, [url, setFile])
    
  return (
    <motion.div className='progress-bar' initial={{width: 0}} animate={{width: progress + '%'}}>

    </motion.div>
  )
}
