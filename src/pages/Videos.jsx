import { useQuery } from '@tanstack/react-query';
import React from 'react'
import { useParams } from 'react-router-dom';
import Youtube from '../api/youtube';
import VideoCard from '../components/VideoCard';

const Videos = () => {
  const {keyword} = useParams();
  const {isLoading, error, data: videos} 
  = useQuery(['videos', keyword], ()=> {
      const youtube = new Youtube();
      return youtube.search(keyword)
    }
  )

  return (
    <div>
      {isLoading ? <p>Loading ...</p> : null}
      {error ? <p>Something is wrong.</p> : null}
      {videos && (<ul>
          {videos.map(video => (<VideoCard key={video.id} video={video}/>))}
        </ul>)}
    </div>
  )
}

export default Videos
