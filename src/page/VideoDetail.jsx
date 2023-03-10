import React from 'react';
import { useLocation } from 'react-router-dom';
import RelatedVideos from '../components/RelatedVideos';
import VideoInfo from '../components/VideoInfo';

export default function VideoDetail() {
    const {
        state: { item, type },
    } = useLocation();
    const { title, channelId, channelTitle, description } = item.snippet;

    return (
        <section className='w-full ml-52 flex lg:flex-row sm:ml-0 sm:flex-col '>
            <article className='basis-4/6'>
                <iframe
                    className='h-720 sm:h-96'
                    id='player'
                    type='text/html'
                    width='100%'
                    height='100%'
                    src={`https://www.youtube.com/embed/${
                        type === 'search' ? item.id.videoId : item.id
                    }`}
                    title={title}
                />
                <div className=' p-8'>
                    <h2 className='text-xl font-bold'>{title}</h2>
                    <VideoInfo id={channelId} name={channelTitle} />
                    <p className='whitespace-pre-wrap break-words'>
                        {description}
                    </p>
                </div>
            </article>
            <section className='basis-2/6'>
                <RelatedVideos
                    id={type === 'search' ? item.id.videoId : item.id}
                />
            </section>
        </section>
    );
}
