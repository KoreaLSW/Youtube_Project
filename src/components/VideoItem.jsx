import React from 'react';
import { formatAgo, viewNumberConversion } from '../date';
import { useNavigate } from 'react-router-dom';

export default function VideoItem({ item, type }) {
    const navigate = useNavigate();
    return (
        <div
            className='m-2 cursor-pointer'
            onClick={() => {
                navigate(
                    `/videoDetail/${
                        type === 'search' ? item.id.videoId : item.id
                    }`,
                    {
                        state: { item, type },
                    }
                );
            }}
        >
            <img
                className='w-full object-cover rounded-md'
                src={item.snippet.thumbnails.medium.url}
                alt=''
            />
            <div>
                <div>
                    <img src='' alt='' />
                </div>
                <div>
                    <p className='line-clamp-2 text-ellipsis overflow-hidden'>
                        {item.snippet.title}
                    </p>
                    <p>{item.snippet.channelTitle}</p>
                    <div className='flex items-center'>
                        <p>{formatAgo(item.snippet.publishedAt, 'ko')} </p>
                        <p className='font-bold text-xl'></p>
                        {item.statistics && (
                            <p>
                                &nbsp;·&nbsp;
                                {viewNumberConversion(
                                    item.statistics.viewCount
                                )}
                                회
                            </p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
