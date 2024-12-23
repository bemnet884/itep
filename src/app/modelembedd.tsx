import Link from 'next/link';

export default function SketchfabEmbed() {
  return (
    <div className="sketchfab-embed-wrapper text-center my-8">
      {/* Responsive iframe */}
      <iframe
        title="Żaróweczka"
        frameBorder="0"
        allowFullScreen
        allow="autoplay; fullscreen; xr-spatial-tracking"
        className="w-full h-[60vh] md:h-[70vh] rounded-lg shadow-lg"
        src="https://sketchfab.com/models/d5857cfa8b9c4ebab1e9467ca6e8b4c1/embed"
      ></iframe>

      {/* Attribution */}
      <p className="text-sm font-light mt-4 text-gray-600">
        <Link
          href="https://sketchfab.com/3d-models/zaroweczka-d5857cfa8b9c4ebab1e9467ca6e8b4c1?utm_medium=embed&utm_campaign=share-popup&utm_content=d5857cfa8b9c4ebab1e9467ca6e8b4c1"
          target="_blank"
          rel="nofollow"
          className="font-medium text-blue-500 hover:text-blue-600"
        >
          Żaróweczka
        </Link>{' '}
        by{' '}
        <Link
          href="https://sketchfab.com/Vikii?utm_medium=embed&utm_campaign=share-popup&utm_content=d5857cfa8b9c4ebab1e9467ca6e8b4c1"
          target="_blank"
          rel="nofollow"
          className="font-medium text-blue-500 hover:text-blue-600"
        >
          Vikii
        </Link>{' '}
        on{' '}
        <Link
          href="https://sketchfab.com?utm_medium=embed&utm_campaign=share-popup&utm_content=d5857cfa8b9c4ebab1e9467ca6e8b4c1"
          target="_blank"
          rel="nofollow"
          className="font-medium text-blue-500 hover:text-blue-600"
        >
          Sketchfab
        </Link>
      </p>
    </div>
  );
}
