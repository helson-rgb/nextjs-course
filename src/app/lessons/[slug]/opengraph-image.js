import { ImageResponse } from 'next/og';
import { getLessonBySlug } from '@/lib/lessons';

export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image({ params }) {
  const { slug } = await params;
  const lesson = getLessonBySlug(slug);
  const title = lesson?.title ?? 'Next Academy';
  const chapter = lesson?.chapter ?? '';

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          background: '#0b1326',
          padding: '60px 72px',
        }}
      >
        {/* top bar */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '6px',
            background: 'linear-gradient(90deg, #494bd6 0%, #c0c1ff 100%)',
          }}
        />

        {/* chapter label */}
        <div
          style={{
            fontSize: '22px',
            color: '#c0c1ff',
            marginBottom: '20px',
            fontFamily: 'sans-serif',
            letterSpacing: '0.05em',
            textTransform: 'uppercase',
          }}
        >
          {chapter}
        </div>

        {/* lesson title */}
        <div
          style={{
            fontSize: title.length > 30 ? '58px' : '72px',
            fontWeight: '800',
            color: '#dae2fd',
            lineHeight: 1.1,
            fontFamily: 'sans-serif',
            marginBottom: '36px',
          }}
        >
          {title}
        </div>

        {/* logo */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div
            style={{
              width: '36px',
              height: '36px',
              borderRadius: '8px',
              background: '#494bd6',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '20px',
              color: '#fff',
              fontFamily: 'sans-serif',
            }}
          >
            N
          </div>
          <span style={{ fontSize: '22px', color: '#908fa0', fontFamily: 'sans-serif' }}>
            Next Academy
          </span>
        </div>
      </div>
    ),
    { ...size }
  );
}
