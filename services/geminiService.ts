
import { GoogleGenAI } from "@google/genai";

const API_KEY = process.env.API_KEY;

if (!API_KEY) {
    console.warn("API_KEY environment variable not set. Using a placeholder service.");
}

const ai = API_KEY ? new GoogleGenAI({ apiKey: API_KEY }) : null;

const generateContentWithGemini = async (title: string): Promise<string> => {
    if (!ai) {
        return Promise.resolve(`यो "${title}" अध्यायको लागि नमूना सामग्री हो। AI सामग्री उत्पन्न गर्न API कुञ्जी आवश्यक छ।`);
    }

    try {
        const prompt = `कक्षा ९ को नेपाली किताबको लागि, "${title}" शीर्षकमा एउटा विस्तृत अध्याय लेख्नुहोस्। अध्यायमा परिचय, मुख्य भाग, र निष्कर्ष समावेश हुनुपर्छ। यो नेपाली भाषामा र विद्यार्थीहरूलाई बुझ्न सजिलो हुने शैलीमा लेख्नुहोस्।`;
        
        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: prompt,
        });

        return response.text;
    } catch (error) {
        console.error("Error generating content with Gemini:", error);
        throw new Error("Failed to generate chapter content.");
    }
};

export const getChapterContent = async (chapterId: number, chapterTitle: string): Promise<string> => {
    const cacheKey = `chapter-${chapterId}`;
    const cachedContent = localStorage.getItem(cacheKey);

    if (cachedContent) {
        return Promise.resolve(cachedContent);
    }

    const content = await generateContentWithGemini(chapterTitle);
    localStorage.setItem(cacheKey, content);
    return content;
};
