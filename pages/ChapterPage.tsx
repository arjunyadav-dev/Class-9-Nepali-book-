
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { chapters } from '../constants';
import { getChapterContent } from '../services/geminiService';

const LoadingSpinner: React.FC = () => (
    <div className="flex justify-center items-center py-10">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-pink-500"></div>
    </div>
);


const ChapterPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const chapterId = id ? parseInt(id, 10) : NaN;
  const chapter = chapters.find((c) => c.id === chapterId);

  const [content, setContent] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (chapter) {
      const fetchContent = async () => {
        setLoading(true);
        setError(null);
        try {
          const fetchedContent = await getChapterContent(chapter.id, chapter.title);
          setContent(fetchedContent);
        } catch (err) {
          setError('Failed to load chapter content. Please try again later.');
        } finally {
          setLoading(false);
        }
      };
      fetchContent();
    }
  }, [chapter]);

  if (!chapter) {
    return (
      <div className="text-center text-red-500">
        <p>Chapter not found.</p>
        <Link to="/" className="text-pink-500 hover:underline mt-4 inline-block">Go back to Home</Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto max-w-3xl">
       <Link to="/" className="inline-flex items-center mb-4 text-pink-500 hover:text-pink-700">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
          Back to Chapters
        </Link>
      <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">अध्याय {chapter.id}: {chapter.title}</h2>
        <hr className="my-4"/>
        {loading && <LoadingSpinner />}
        {error && <p className="text-red-500 text-center">{error}</p>}
        {!loading && !error && (
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed whitespace-pre-wrap">
            {content}
          </div>
        )}
      </div>
    </div>
  );
};

export default ChapterPage;
