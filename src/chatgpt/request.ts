import axios from "axios";

const CHATGPT_API_ENDPOINT = "https://api.openai.com/v1/chat/completions";
const API_KEY = process.env.CHATGPT_API_KEY;

export const chatgptRequest = async (prompt: string) => {
    try{

        let response = await axios.post(
          CHATGPT_API_ENDPOINT,
          {
            model: "gpt-3.5-turbo",
            messages: [{ role: "user", content: prompt }],
            n: 1,
            stop: null,
            temperature: 0,
          },
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${API_KEY}`,
            },
          }
        );
        console.log("chagpt response", response.data.choices);
        return response.data?.choices?.[0]?.message?.content || "";
    } catch (err){
        console.log("Error GET chatgpt :", err)
    }
};
