import { ComponentProps } from '@uniformdev/canvas-next-rsc/component';
import { VideoPlayer } from './VideoPlayer';

export type VideoPlayerProps = ComponentProps<{
  id: string;
  source: string;
  title: string;
  description: string;
}>;

export const videoPlayerMappings = {
  videoPlayer: VideoPlayer,
};

export default VideoPlayer;
