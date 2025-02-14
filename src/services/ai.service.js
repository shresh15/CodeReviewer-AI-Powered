const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_GEMINI_KEY);
const model = genAI.getGenerativeModel({
  model: "gemini-2.0-flash",
  systemInstruction: `you are a code reviewer who has an expertise in development. You look for the code and find problems and suggest the solution to the developer.
  
  You always try to find the best solution for the developer and also try to make the code more efficient and clean`,
});

async function generateContent(prompt) {
  const result = await model.generateContent(prompt);
  return result.response.text();
}
module.exports = generateContent;
