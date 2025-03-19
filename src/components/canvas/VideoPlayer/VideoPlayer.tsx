/* eslint-disable */
// @ts-nocheck
'use client';

import { FC } from 'react';
import classNames from 'classnames';
import { getTextClass } from './style-utils';
import { VideoPlayerProps } from '.';

export const VideoPlayer: FC<VideoPlayerProps> = ({ title, description, source, id }) => (
  <div className={classNames('hero min-h-[500px] relative', 'text-secondary-content')}>
    <div className={classNames('hero-content text-center p-0')}>
      <div className={classNames('flex flex-col mx-1 md:mx-10')}>
        <h1 className={classNames('font-bold', getTextClass('h5'))}>
          {title}
        </h1>
        <div className={classNames('py-6')}>
          {description}
        </div>
        <div className="text-gray-300 mb-30">
          {source === 'YouTube' && (
            <iframe
              width="100%"
              height="500px"
              src={`https://www.youtube.com/embed/${id}`}
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          )}
          {source === 'Loom' && (
            <iframe
              width="640"
              height="360"
              src={`https://www.loom.com/embed/${id}`}
              frameborder="0"
              webkitallowfullscreen
              mozallowfullscreen
              allowFullScreen
            ></iframe>
          )}
          {!source && <div className=" text-gray-300">Select a video source</div>}
        </div>
      </div>
    </div>
  </div>
);
