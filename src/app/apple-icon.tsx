import { ImageResponse } from 'next/og';

// Image metadata
export const size = {
  width: 180,
  height: 180,
};
export const contentType = 'image/png';

// Image generation
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 100,
          background: 'linear-gradient(135deg, #7c2d12 0%, #1e3a5f 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#fcd34d',
          borderRadius: '24px',
          fontWeight: 'bold',
        }}
      >
        H
      </div>
    ),
    {
      ...size,
    }
  );
}
