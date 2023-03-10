import React from 'react';
import { formatAgo, viewNumberConversion } from '../date';
import { useNavigate } from 'react-router-dom';

export default function RelatedVideoItem({ key, video }) {
    const navigate = useNavigate();
    return (
        <li
            key={key}
            className='flex items-center mb-3 mr-3 cursor-pointer'
            onClick={() => {
                navigate(`/videoDetail/${video.id}`, {
                    state: { item: video, type: '' },
                });
            }}
        >
            <img
                className='w-32 h-24 rounded-lg '
                src={video.snippet.thumbnails.high.url}
                alt=''
            />
            <div className='ml-3'>
                <p className='text-sm line-clamp-2'>{video.snippet.title}</p>
                <p className='text-base text-gray-700'>
                    {video.snippet.channelTitle}
                </p>
                <p className='text-sm'>
                    {formatAgo(video.snippet.publishedAt, 'ko')}{' '}
                </p>
            </div>
        </li>
    );
}
