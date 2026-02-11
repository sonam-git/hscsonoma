export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-earth-50 dark:bg-mountain-900">
      <div className="text-center">
        <div className="inline-block relative w-16 h-16">
          <div className="absolute top-0 left-0 w-full h-full border-4 border-wine-200 dark:border-wine-800 rounded-full"></div>
          <div className="absolute top-0 left-0 w-full h-full border-4 border-wine-600 rounded-full border-t-transparent animate-spin"></div>
        </div>
        <p className="mt-4 text-mountain-600 dark:text-mountain-300 font-medium">Loading...</p>
      </div>
    </div>
  );
}
