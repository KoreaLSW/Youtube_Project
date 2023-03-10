import React from 'react';
import { relatedVideo } from '../YouTuBeAPI/youtubeApi';
import { useQuery } from '@tanstack/react-query';
import RelatedVideoItem from './RelatedVideoItem';

export default function RelatedVideos({ id }) {
    const {
        isLoading,
        error,
        data: videos,
    } = useQuery(['related', id], () => relatedVideo(id), {
        staleTime: 1000 * 60 * 5,
    });

    return (
        <>
            {isLoading && <p>Loading...</p>}
            {error && <p>Something is wrong.....</p>}
            {videos && (
                <ul className='ml-5'>
                    {videos.map((value) => {
                        return (
                            <RelatedVideoItem
                                key={value.id}
                                video={value}
                                type='list'
                            />
                        );
                    })}
                </ul>
            )}
        </>
    );
}
