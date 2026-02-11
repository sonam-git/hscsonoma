'use client';

import { useEffect } from 'react';

declare global {
  interface Window {
    FB?: {
      XFBML: {
        parse: () => void;
      };
    };
  }
}

interface FacebookEmbedProps {
  pageUrl?: string;
  width?: number;
  height?: number;
  showTimeline?: boolean;
  showEvents?: boolean;
  showMessages?: boolean;
  smallHeader?: boolean;
  hideCover?: boolean;
  adaptContainerWidth?: boolean;
}

export default function FacebookEmbed({
  pageUrl = 'https://www.facebook.com/profile.php?id=100070462585968',
  width = 340,
  height = 500,
  showTimeline = true,
  showEvents = true,
  showMessages = false,
  smallHeader = false,
  hideCover = false,
  adaptContainerWidth = true,
}: FacebookEmbedProps) {
  useEffect(() => {
    // Load the Facebook SDK
    const loadFacebookSDK = () => {
      if (window.FB) {
        window.FB.XFBML.parse();
        return;
      }

      const script = document.createElement('script');
      script.src = 'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v18.0';
      script.async = true;
      script.defer = true;
      script.crossOrigin = 'anonymous';
      script.onload = () => {
        if (window.FB) {
          window.FB.XFBML.parse();
        }
      };
      document.body.appendChild(script);
    };

    loadFacebookSDK();
  }, []);

  const tabs = [
    showTimeline && 'timeline',
    showEvents && 'events',
    showMessages && 'messages',
  ]
    .filter(Boolean)
    .join(',');

  return (
    <div className="facebook-embed-container">
      <div id="fb-root"></div>
      <div
        className="fb-page"
        data-href={pageUrl}
        data-tabs={tabs}
        data-width={width}
        data-height={height}
        data-small-header={smallHeader}
        data-adapt-container-width={adaptContainerWidth}
        data-hide-cover={hideCover}
        data-show-facepile="true"
      >
        <blockquote cite={pageUrl} className="fb-xfbml-parse-ignore">
          <a href={pageUrl}>Himalayan Sherpa Club of Sonoma</a>
        </blockquote>
      </div>
    </div>
  );
}
