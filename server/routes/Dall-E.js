import express from 'express';
import {config} from 'dotenv';
import { Configuration, OpenAIApi } from 'openai';

config();
const router = express.Router();
const configuration = new Configuration({
  apiKey: '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'
}); 
const openai = new OpenAIApi(configuration);

router.route('/').get((req, res) => {
  res.status(200).send('Hello from DALL-E!');
});

router.route('/').post(async (req, res) => {
  try {
    const { prompt } = req.body;
    const aiResponse = await openai.createImage({
      prompt,
      n: 1,
      size: '1024x1024',
      response_format: 'b64_json',
    });

    const image = aiResponse.data.data[0].b64_json;    
    res.status(200).json({ photo: image });
  } catch (error) {
    console.error(error);
    res.status(500).send(error?.response.data.error.message || 'Something went wrong');
  }
});

export default router;  