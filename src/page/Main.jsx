import React, { useEffect, useState } from 'react';
import { fakeMainVideo, mainVideo } from '../YouTuBeAPI/youtubeApi';
import { useInfiniteQuery } from '@tanstack/react-query';
import VideoItem from '../components/VideoItem';
import { useInView } from 'react-intersection-observer';
import { useLocation, useParams } from 'react-router-dom';

export default function Main() {
    const { keyword, category } = useParams();
    const [ref, inView] = useInView();
    const [nextToken, setNextToken] = useState('');
    const {
        isLoading,
        error,
        data: videos,
        fetchNextPage,
        hasNextPage,
    } = useInfiniteQuery(
        ['mainVideos', keyword, category],
        ({ pageParam }) => mainVideo(pageParam, keyword, category),
        {
            getNextPageParam: (lastPage, pages) => {
                if (!lastPage.isLast) {
                    return (lastPage.current_page = nextToken);
                }
                return undefined;
            },
            staleTime: 1000 * 60 * 1,
        }
    );

    useEffect(() => {
        if (inView && hasNextPage) {
            setNextToken(
                () => videos.pages[videos.pages.length - 1].data.nextPageToken
            );
        }
    }, [inView]);

    const handleClick = () => {
        fetchNextPage();
    };
    isLoading && <p>로딩중....</p>;
    error && <p>Error....</p>;
    return (
        <div className='w-full ml-52 bg-slate-200 sm:ml-0'>
            <ul className='w-full  grid grid-cols-6 px-8 py-4 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6'>
                {videos &&
                    videos.pages.map((page) =>
                        page.data.items.map((value, index) => {
                            if (index < 24) {
                                return (
                                    <li
                                        key={
                                            keyword
                                                ? value.id.videoId
                                                : value.id
                                        }
                                    >
                                        <VideoItem
                                            item={value}
                                            type={keyword ? 'search' : ''}
                                        />
                                    </li>
                                );
                            } else {
                                return (
                                    <li
                                        key={
                                            keyword
                                                ? value.id.videoId
                                                : value.id
                                        }
                                        ref={ref}
                                    >
                                        <VideoItem
                                            item={value}
                                            type={keyword ? 'search' : ''}
                                        />
                                    </li>
                                );
                            }
                        })
                    )}
            </ul>
            <div className=' flex items-center justify-center mb-16'>
                <button
                    className='bg-stone-400 py-3 px-6 rounded-lg text-white'
                    onClick={handleClick}
                >
                    더보기
                </button>
            </div>
        </div>
    );
}
