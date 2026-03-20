
import React from 'react';
import { Link } from 'react-router-dom';
import { chapters } from '../constants';
import type { Chapter } from '../types';

const ChapterCard: React.FC<{ chapter: Chapter }> = ({ chapter }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-1 transition-transform duration-300">
      <div className="p-6">
        <div className="text-sm text-pink-500 font-semibold">अध्याय {chapter.id}</div>
        <h3 className="text-xl font-bold text-gray-800 mt-1 mb-4">{chapter.title}</h3>
        <Link
          to={`/chapter/${chapter.id}`}
          className="inline-block w-full text-center bg-pink-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-pink-600 transition-colors"
        >
          View Chapter
        </Link>
      </div>
    </div>
  );
};

const HomePage: React.FC = () => {
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {chapters.map((chapter) => (
          <ChapterCard key={chapter.id} chapter={chapter} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
